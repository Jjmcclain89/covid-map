export default (dataObject) => {
    // Create an array of only the dataObject values
    const dataArray = Object.values(dataObject);
    dataArray.map((array) => {
        // Sort each array by ascending timestamp
        array.sort((a, b) => (a.date > b.date ? -1 : 1));
    });

    // Get most recent data
    const recentData = dataArray.map((array) => {
        return array.pop();
    });
    // Create mapbox feature objects
    return recentData.map((datum, i) => {
        // Destructure variables from datum object
        const {
            long,
            lat,
            confirmed,
            deaths,
            recovered,
            country,
            state,
        } = datum;

        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [long, lat],
            },
            properties: {
                id: i,
                country,
                state,
                confirmed,
                deaths,
                recovered,
            },
        };
    });
};
