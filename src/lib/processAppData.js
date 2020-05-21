import getMapboxFeatures from './getMapboxFeatures';

import { formatWorldData, formatUSData } from './formatData';

export default (rawWorldData, rawUSConfirmedData, rawUSDeathsData) => {
    const formattedWorldData = formatWorldData(rawWorldData);
    const formattedUSData = formatUSData(rawUSConfirmedData, rawUSDeathsData);

    const mapboxFeaturesData = [
        ...getMapboxFeatures(formattedWorldData),
        ...getMapboxFeatures(formattedUSData),
    ];

    return mapboxFeaturesData;
};
