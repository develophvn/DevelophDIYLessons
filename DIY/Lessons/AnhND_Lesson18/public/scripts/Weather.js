const API_KEY = '74c23c2d9a83caffe161458d751d26a2';

const Weather = {
	async getWeatherData(){
		const location = await Location.getCurrentLocation();
		const {latitude, longitude} = location;
  
		const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

		const  weatherData = await fetch(apiURL)
										.then(res =>  res.json());

		let temp = Math.round(weatherData.main.temp - 273.15),
		   {name} = weatherData,
		   weather = weatherData.weather[0];
		let iconURL = "http://openweathermap.org/img/w/" + weather.icon + ".png";
  
		return {
		   temp, name, weather, iconURL
		}
	},

	async init() {
		const weatherData = await Weather.getWeatherData();

		document.getElementsByClassName('location')[0].innerHTML = weatherData.name;
		document.getElementsByClassName('num')[0].innerHTML = weatherData.temp  + "<sup>o</sup>C";
		document.getElementById('weather-icon').setAttribute('src', weatherData.iconURL);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	Weather.init();
})
