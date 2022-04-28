const fakeForecast = {
  fakeData: true,
  latitude: 0,
  longitude: 0,
  timezone: 'America/New_York',
  currently: {
    time: 0,
    summary: 'Clear',
    icon: 'clear-day',
    temperature: 43.4,
    humidity: 0.62,
    windSpeed: 3.74,
    windBearing: 208,
  },
  daily: {
    data: [
      {
        time: 0,
        icon: 'partly-cloudy-night',
        sunriseTime: 1553079633,
        sunsetTime: 1553123320,
        temperatureHigh: 52.91,
        temperatureLow: 41.35,
      },
      {
        time: 86400,
        icon: 'rain',
        sunriseTime: 1553165933,
        sunsetTime: 1553209784,
        temperatureHigh: 48.01,
        temperatureLow: 44.17,
      },
      {
        time: 172800,
        icon: 'rain',
        sunriseTime: 1553252232,
        sunsetTime: 1553296247,
        temperatureHigh: 50.31,
        temperatureLow: 33.61,
      },
      {
        time: 259200,
        icon: 'partly-cloudy-night',
        sunriseTime: 1553338532,
        sunsetTime: 1553382710,
        temperatureHigh: 46.44,
        temperatureLow: 33.82,
      },
      {
        time: 345600,
        icon: 'partly-cloudy-night',
        sunriseTime: 1553424831,
        sunsetTime: 1553469172,
        temperatureHigh: 60.5,
        temperatureLow: 43.82,
      },
      {
        time: 432000,
        icon: 'rain',
        sunriseTime: 1553511130,
        sunsetTime: 1553555635,
        temperatureHigh: 61.79,
        temperatureLow: 32.8,
      },
      {
        time: 518400,
        icon: 'rain',
        sunriseTime: 1553597430,
        sunsetTime: 1553642098,
        temperatureHigh: 48.28,
        temperatureLow: 33.49,
      },
      {
        time: 604800,
        icon: 'snow',
        sunriseTime: 1553683730,
        sunsetTime: 1553728560,
        temperatureHigh: 43.58,
        temperatureLow: 33.68,
      },
    ],
  },
};

// export {
//   fakeForecast,
// };
// export default fakeForecast;
module.exports = fakeForecast;
