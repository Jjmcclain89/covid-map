import { csv } from 'd3-fetch';
import processAppData from '../lib/processAppData';

const getWorldData = async () => {
    return await csv(
        'https://raw.githubusercontent.com/datasets/covid-19/master/data/time-series-19-covid-combined.csv'
    );
};

const getUSConfirmedData = async () => {
    return await csv(
        'https://raw.githubusercontent.com/datasets/covid-19/master/data/us_confirmed.csv'
    );
};

const getUSDeathsData = async () => {
    return await csv(
        'https://raw.githubusercontent.com/datasets/covid-19/master/data/us_deaths.csv'
    );
};

export default async (setAppData) => {
    console.log('fetching data...');
    const [worldData, usConfirmedData, usDeathsData] = await Promise.all([
        getWorldData(),
        getUSConfirmedData(),
        getUSDeathsData(),
    ]);
    setAppData(processAppData(worldData, usConfirmedData, usDeathsData));
    console.log('data fetched');
};
