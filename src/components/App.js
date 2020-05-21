import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import buildMap from '../lib/buildMap';
import fetchData from '../lib/fetchData';

mapboxgl.accessToken =
    'pk.eyJ1IjoiamptY2NsYWluIiwiYSI6ImNrYWVyMDFrbDAzdnIzNG83ZG02bXRvaHMifQ._ySqVl93fvm1jUeW-TEKDg';

const App = (props) => {
    const mapElementRef = useRef(null);
    const [appData, setAppData] = useState();

    useEffect(() => {
        fetchData(setAppData);
    }, []);

    return (
        <div className='App'>
            {appData &&
                buildMap(
                    mapElementRef,
                    appData
                )}
            <div className='mapContainer'>
                {/* Mapbox Container */}
                <div className='mapBox' ref={mapElementRef} />
            </div>
        </div>
    );
};

export default App;
