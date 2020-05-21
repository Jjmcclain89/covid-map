import React, { useEffect, useRef } from 'react';
import buildMap from '../lib/buildMap';

const Map = (props) => {
    const { appData } = props;
    const mapElementRef = useRef(null);

    useEffect(() => {
        buildMap(mapElementRef, appData);
    });

    return (
        <div className='mapContainer'>
            {/* Mapbox Container */}
            <div className='mapBox' ref={mapElementRef} />
        </div>
    );
};

export default Map;
