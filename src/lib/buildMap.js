import mapboxgl from 'mapbox-gl';
import mapboxLayer from '../mapbox/mapboxLayer';
import mapboxPopup from '../mapbox/mapboxPopup';

export default (mapElementRef, mapboxFeaturesData) => {
    /*
     *  Mapbox works by using map layers that use a source for the data
     *  To display a layer, first add a source, then configure the styling of the layer
     */

    // Create mapbox map object
    const map = new mapboxgl.Map({
        container: mapElementRef.current,
        style: 'mapbox://styles/mapbox/navigation-preview-day-v4',
        // default center over North America
        center: [-100, 40],
        zoom: 3,
    });

    // Add nav controls to top right corner of map
    map.addControl(new mapboxgl.NavigationControl());

    // When the map loads, add data source and data layer
    map.once('load', () => {
        map.addSource('points', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                // Add the features data
                features: mapboxFeaturesData,
            },
        });

        // Add layer
        map.addLayer(mapboxLayer);

        map.on('mouseenter', 'circles', (e) => {
            const {
                confirmed,
                deaths,
                country,
                state,
            } = e.features[0].properties;

            // Change the pointer type on mouseenter
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();

            const stateHTML = state
                ? `<p>State/Province: <b>${state}</b></p>`
                : '';
                
            const mortalityRate = ((deaths / confirmed) * 100).toFixed(2);

            const countryHTML
            const HTML = `<p>Country: <b>${country}</b></p>
                  ${stateHTML}
                  <p>Cases: <b>${confirmed}</b></p>
                  <p>Deaths: <b>${deaths}</b></p>
                  <p>Mortality Rate: <b>${mortalityRate}%</b></p>
                  `;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            mapboxPopup.setLngLat(coordinates).setHTML(HTML).addTo(map);
        });

        map.on('mouseleave', 'circles', () => {
            map.getCanvas().style.cursor = '';
            mapboxPopup.remove();
        });
    });
};
