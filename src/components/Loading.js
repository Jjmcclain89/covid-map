import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => (
    <div className='loading'>
        <h1>Fetching map data from John's Hopkins</h1>
        <div className='loading__container'>
            <ReactLoading
                type='bubbles'
                color='#a3a3a3'
                width='100%'
                height='100%'
            />
        </div>
    </div>
);

export default Loading;
