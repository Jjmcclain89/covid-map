const stateNameArray = [
    {
        state: 'Alaska',
        lat: 61.385,
        long: -152.2683,
    },
    {
        state: 'Alabama',
        lat: 32.799,
        long: -86.8073,
    },
    {
        state: 'Arkansas',
        lat: 34.9513,
        long: -92.3809,
    },
    {
        state: 'Arizona',
        lat: 33.7712,
        long: -111.3877,
    },
    {
        state: 'California',
        lat: 36.17,
        long: -119.7462,
    },
    {
        state: 'Colorado',
        lat: 39.0646,
        long: -105.3272,
    },
    {
        state: 'Connecticut',
        lat: 41.5834,
        long: -72.7622,
    },
    {
        state: 'Delaware',
        lat: 39.3498,
        long: -75.5148,
    },
    {
        state: 'Florida',
        lat: 27.8333,
        long: -81.717,
    },
    {
        state: 'Georgia',
        lat: 32.9866,
        long: -83.6487,
    },
    {
        state: 'Hawaii',
        lat: 21.1098,
        long: -157.5311,
    },
    {
        state: 'Iowa',
        lat: 42.0046,
        long: -93.214,
    },
    {
        state: 'Idaho',
        lat: 44.2394,
        long: -114.5103,
    },
    {
        state: 'Illinois',
        lat: 40.3363,
        long: -89.0022,
    },
    {
        state: 'Indiana',
        lat: 39.8647,
        long: -86.2604,
    },
    {
        state: 'Kansas',
        lat: 38.5111,
        long: -96.8005,
    },
    {
        state: 'Kentucky',
        lat: 37.669,
        long: -84.6514,
    },
    {
        state: 'Louisiana',
        lat: 31.1801,
        long: -91.8749,
    },
    {
        state: 'Massachusetts',
        lat: 42.2373,
        long: -71.5314,
    },
    {
        state: 'Maryland',
        lat: 39.0724,
        long: -76.7902,
    },
    {
        state: 'Maine',
        lat: 44.6074,
        long: -69.3977,
    },
    {
        state: 'Michigan',
        lat: 43.3504,
        long: -84.5603,
    },
    {
        state: 'Minnesota',
        lat: 45.7326,
        long: -93.9196,
    },
    {
        state: 'Missouri',
        lat: 38.4623,
        long: -92.302,
    },
    {
        state: 'Mississippi',
        lat: 32.7673,
        long: -89.6812,
    },
    {
        state: 'Montana',
        lat: 46.9048,
        long: -110.3261,
    },
    {
        state: 'North Carolina',
        lat: 35.6411,
        long: -79.8431,
    },
    {
        state: 'North Dakota',
        lat: 47.5362,
        long: -99.793,
    },
    {
        state: 'Nebraska',
        lat: 41.1289,
        long: -98.2883,
    },
    {
        state: 'New Hampshire',
        lat: 43.4108,
        long: -71.5653,
    },
    {
        state: 'New Jersey',
        lat: 40.314,
        long: -74.5089,
    },
    {
        state: 'New Mexico',
        lat: 34.8375,
        long: -106.2371,
    },
    {
        state: 'Nevada',
        lat: 38.4199,
        long: -117.1219,
    },
    {
        state: 'New York',
        lat: 42.1497,
        long: -74.9384,
    },
    {
        state: 'Ohio',
        lat: 40.3736,
        long: -82.7755,
    },
    {
        state: 'Oklahoma',
        lat: 35.5376,
        long: -96.9247,
    },
    {
        state: 'Oregon',
        lat: 44.5672,
        long: -122.1269,
    },
    {
        state: 'Pennsylvania',
        lat: 40.5773,
        long: -77.264,
    },
    {
        state: 'Rhode Island',
        lat: 41.6772,
        long: -71.5101,
    },
    {
        state: 'South Carolina',
        lat: 33.8191,
        long: -80.9066,
    },
    {
        state: 'South Dakota',
        lat: 44.2853,
        long: -99.4632,
    },
    {
        state: 'Tennessee',
        lat: 35.7449,
        long: -86.7489,
    },
    {
        state: 'Texas',
        lat: 31.106,
        long: -97.6475,
    },
    {
        state: 'Utah',
        lat: 40.1135,
        long: -111.8535,
    },
    {
        state: 'Virginia',
        lat: 37.768,
        long: -78.2057,
    },
    {
        state: 'Vermont',
        lat: 44.0407,
        long: -72.7093,
    },
    {
        state: 'Washington',
        lat: 47.3917,
        long: -121.5708,
    },
    {
        state: 'Wisconsin',
        lat: 44.2563,
        long: -89.6385,
    },
    {
        state: 'West Virginia',
        lat: 38.468,
        long: -80.9696,
    },
    {
        state: 'Wyoming',
        lat: 42.7475,
        long: -107.2085,
    },
];

// Convert array to map to make lookups faster
const stateNameMap = {};
stateNameArray.map(state=> stateNameMap[state.state] = state);

export default stateNameMap; 


