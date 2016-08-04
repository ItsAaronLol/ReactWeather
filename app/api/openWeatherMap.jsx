var axios = require('axios');

//const is a variable that can't be altered

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ec66502a75b2a2e85ac669bda4757a6b&units=imperial';

module.exports = {
  getTemp: function(location){
    //encodeURIComponent: modifies string into a usable browser variable, eg. replacing spaces with '%'
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //axios.get takes a url and goes off and fetches it, bringing back the results
    //axios uses promises
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    })
  }
}
