import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Map from './Map';
import Loading from './Loading';
import fetchData from '../lib/fetchData';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoiamptY2NsYWluIiwiYSI6ImNrYWVyMDFrbDAzdnIzNG83ZG02bXRvaHMifQ._ySqVl93fvm1jUeW-TEKDg';

const App = (props) => {
    const [appData, setAppData] = useState();

    useEffect(() => {
        fetchData(setAppData);
    }, []);

    return (
        <div className='App'>
            {appData ? <Map appData={appData} /> : <Loading />}
        </div>
    );
};

export default App;
