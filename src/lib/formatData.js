import stateNameMap from '../resources/stateNameMap';

/* -- formatDataFunctions --
 * Function to format csv data to a javascript object. Returns a new data object
 * New data object has a key for each location (lat/long pair)
 * The value of each key is an array containing timeseries data for location
 */
export const formatUSData = (confirmedDataArray, deathDataArray) => {
    const newUSDataObject = {};
    confirmedDataArray.map((locationDataPoint) => {
        const {
            Long: long,
            Lat: lat,
            Case: confirmed,
            'Country/Region': country,
            'Province/State': state,
            Date: date,
        } = locationDataPoint;

        // Create new data point
        const newDataPoint = {
            long: parseFloat(long),
            lat: parseFloat(lat),
            confirmed: parseInt(confirmed),
            country,
            state,
            date,
        };

        // Create ID to uniquely identify location
        const latlongID = `${newDataPoint.lat}/${newDataPoint.long}`;
        newDataPoint.latlongID = latlongID;

        // Build location data array
        // Add new object to appropriate array, create array if it does not exist
        newUSDataObject[state]
            ? newUSDataObject[state].push(newDataPoint)
            : (newUSDataObject[state] = [newDataPoint]);
    });

    // Filter confirmed for only recent data
    for (let [key, value] of Object.entries(newUSDataObject)) {
        const d = new Date();
        const today = `${d.getFullYear()}-${(d.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${d.getDate() - 1}`;
        newUSDataObject[key] = value.filter((state, i) => state.date == today);
    }

    const newUSDeathDataObject = {};
    deathDataArray.map((locationDataPoint) => {
        const {
            Long: long,
            Lat: lat,
            Case: deaths,
            'Country/Region': country,
            'Province/State': state,
            Date: date,
        } = locationDataPoint;

        // Create new data point
        const newDataPoint = {
            long: parseFloat(long),
            lat: parseFloat(lat),
            deaths: parseInt(deaths),
            country,
            state,
            date,
        };

        // Create ID to uniquely identify location
        const latlongID = `${newDataPoint.lat}/${newDataPoint.long}`;
        newDataPoint.latlongID = latlongID;

        // Build location data array
        // Add new object to appropriate array, create array if it does not exist
        newUSDeathDataObject[state]
            ? newUSDeathDataObject[state].push(newDataPoint)
            : (newUSDeathDataObject[state] = [newDataPoint]);
    });

    // Filter deaths for only recent data
    for (let [key, value] of Object.entries(newUSDeathDataObject)) {
        const d = new Date();
        const today = `${d.getFullYear()}-${(d.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${d.getDate() - 1}`;
        newUSDeathDataObject[key] = value.filter(
            (state, i) => state.date == today
        );
    }

    // Add recent death data to cases object
    for (let [key, dataArray] of Object.entries(newUSDeathDataObject)) {
        let totalDeaths = 0;
        dataArray.map((datum) => {
            totalDeaths += parseInt(datum.deaths);
        });
        newUSDataObject[key][0].deaths = totalDeaths;
    }

    // Aggregate State data
    const aggregateStateData = [];
    for (let [key, dataArray] of Object.entries(newUSDataObject)) {
        // key is a string = state name, value is an array of all the data points in that state
        let confirmedCount = 0;
        dataArray.map((datum) => {
            confirmedCount += datum.confirmed;
        });

        // Build state object by first copying a data point to get the common fields
        const stateObject = Object.assign({}, dataArray[0]);
        // Update non-common fields
        // Destructure values
        const { state, lat, long } = stateObject;
        stateObject.confirmed = confirmedCount;
        stateObject.lat = stateNameMap[state]?.lat || lat;

        stateObject.long = stateNameMap[state]?.long || long;

        stateObject.latlongID = `${lat}/${long}`;

        aggregateStateData[state] = [stateObject];
    }

    return aggregateStateData;
};

export const formatWorldData = (dataArray) => {
    const newWorldDataObject = {};
    dataArray.map((locationDataPoint) => {
        const {
            Long: long,
            Lat: lat,
            Confirmed: confirmed,
            Deaths: deaths,
            Recovered: recovered,
            'Country/Region': country,
            'Province/State': state,
            Date: date,
        } = locationDataPoint;

        // Create new data point
        const newDataPoint = {
            long: parseFloat(long),
            lat: parseFloat(lat),
            confirmed: parseInt(confirmed),
            country,
            state,
            deaths: parseInt(deaths),
            recovered: parseInt(recovered),
        };

        // Don't process US data here, that is done seperately using a more discreet data set
        if (newDataPoint.country != 'US') {
            // Create ID to uniquely identify location
            const latlongID = `${newDataPoint.lat}/${newDataPoint.long}`;
            newDataPoint.latlongID = latlongID;

            // Build location data array
            // Group data by state
            // Add new object to appropriate array, create array if it does not exist
            newWorldDataObject[latlongID]
                ? newWorldDataObject[latlongID].push(newDataPoint)
                : (newWorldDataObject[latlongID] = [newDataPoint]);
        }
    });

    return newWorldDataObject;
};
