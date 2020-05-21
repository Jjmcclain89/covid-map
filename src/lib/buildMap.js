import mapboxgl from 'mapbox-gl';
import mapboxLayer from '../mapbox/mapboxLayer';
import mapboxPopup from '../mapbox/mapboxPopup';
import buildPopupHTML from './buildPopupHTML';

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

        // Configure tooltip
        map.on('mouseenter', 'circles', (e) => {
            const { properties, geometry } = e.features[0];
            const { confirmed, deaths, country, state } = properties;

            const popupHTML = buildPopupHTML(confirmed, deaths, country, state);

            // Change the pointer type on mouseenter
            map.getCanvas().style.cursor = 'pointer';

            // get the coordinates of the data point
            const coordinates = geometry.coordinates.slice();

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            mapboxPopup.setLngLat(coordinates).setHTML(popupHTML).addTo(map);
        });

        map.on('mouseleave', 'circles', () => {
            map.getCanvas().style.cursor = '';
            mapboxPopup.remove();
        });
    });
};
