let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = document.querySelector("#date");
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

date.innerHTML = `${days[day]} ${hours}:${minutes}`;
//

let input = document.querySelector(".city");
let form = document.querySelector("#location-form");
let title = document.querySelector("#title");
let temperatureElement = document.querySelector("#weather-temperature");
let weatherDescription = document.querySelector("#weather-description");
let cityHumidity = document.querySelector("#humidity");
let cityWind = document.querySelector("#wind");
let weatherIcon = document.querySelector("#weather-icon");

function showCityTemperature(response) {
  temperatureC = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].main;
  let wind = Math.round(response.data.wind.speed);
  let weather = response.data.weather[0].icon;

  temperatureElement.innerHTML = `${temperatureC}`;
  weatherDescription.innerHTML = `${description}`;
  cityHumidity.innerHTML = `Humidity: ${humidity}%`;
  cityWind.innerHTML = `Wind: ${wind} km/h`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather}@2x.png`;
  getForecast(response.data.coord);
}

let city = null;

function showCity(event) {
  event.preventDefault();
  city = input.value;
  title.innerHTML = city;
  searchCity(city);
}

function searchCity(city) {
  title.innerHTML = city;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemperature);
}

searchCity("Paris");

form.addEventListener("submit", showCity);

//

let button = document.querySelector("#current-location");

function showTemperature(response) {
  temperatureC = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].main;
  let wind = Math.round(response.data.wind.speed);
  let cityName = response.data.name;
  let weather = response.data.weather[0].icon;

  title.innerHTML = `${cityName}`;
  temperatureElement.innerHTML = `${temperatureC}`;
  weatherDescription.innerHTML = `${description}`;
  cityHumidity.innerHTML = `Humidity: ${humidity}%`;
  cityWind.innerHTML = `Wind: ${wind} km/h`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather}@2x.png`;
  getForecast(response.data.coord);
}

let latitude = null;
let longitude = null;

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function buttonShowPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

button.addEventListener("click", buttonShowPosition);

//

linkC = document.querySelector("#link-c");
linkF = document.querySelector("#link-f");

let temperatureC = null;
let = smallTemperatureCelsius1Min = null;
let = smallTemperatureCelsius1Max = null;
//
let = smallTemperatureCelsius2Min = null;
let = smallTemperatureCelsius2Max = null;
//
let = smallTemperatureCelsius3Min = null;
let = smallTemperatureCelsius3Max = null;
//
let = smallTemperatureCelsius4Min = null;
let = smallTemperatureCelsius4Max = null;
//
let = smallTemperatureCelsius5Min = null;
let = smallTemperatureCelsius5Max = null;

function showF(event) {
  event.preventDefault();
  linkC.classList.remove("inactive");
  linkF.classList.add("inactive");
  // multiply by 1.8 (or 9/5) and add 32.
  tempF = Math.round(temperatureC * 1.8 + 32);
  //
  smallTemperatureF1Min = Math.round(smallTemperatureCelsius1Min * 1.8 + 32);
  smallTemperatureF1Max = Math.round(smallTemperatureCelsius1Max * 1.8 + 32);
  //
  smallTemperatureF2Max = Math.round(smallTemperatureCelsius2Min * 1.8 + 32);
  smallTemperatureF2Min = Math.round(smallTemperatureCelsius2Max * 1.8 + 32);
  //
  smallTemperatureF3Min = Math.round(smallTemperatureCelsius3Min * 1.8 + 32);
  smallTemperatureF3Max = Math.round(smallTemperatureCelsius3Max * 1.8 + 32);
  //
  smallTemperatureF4Min = Math.round(smallTemperatureCelsius4Min * 1.8 + 32);
  smallTemperatureF4Max = Math.round(smallTemperatureCelsius4Max * 1.8 + 32);
  //
  smallTemperatureF5Min = Math.round(smallTemperatureCelsius5Min * 1.8 + 32);
  smallTemperatureF5Max = Math.round(smallTemperatureCelsius5Max * 1.8 + 32);

  temperatureElement.innerHTML = tempF;
  //
  //
  //
  forecastTemperature1.innerHTML = `${smallTemperatureF1Min}° / ${smallTemperatureF1Max}°`;
  forecastTemperature2.innerHTML = `${smallTemperatureF2Min}° / ${smallTemperatureF2Max}°`;
  forecastTemperature3.innerHTML = `${smallTemperatureF3Min}° / ${smallTemperatureF3Max}°`;
  forecastTemperature4.innerHTML = `${smallTemperatureF4Min}° / ${smallTemperatureF4Max}°`;
  forecastTemperature5.innerHTML = `${smallTemperatureF5Min}° / ${smallTemperatureF5Max}°`;
}

linkF.addEventListener("click", showF);

function showC(event) {
  event.preventDefault();
  linkC.classList.add("inactive");
  linkF.classList.remove("inactive");
  temperatureElement.innerHTML = temperatureC;
  //
  forecastTemperature1.innerHTML = `${smallTemperatureCelsius1Min}° / ${smallTemperatureCelsius1Max}°`;
  forecastTemperature2.innerHTML = `${smallTemperatureCelsius2Min}° / ${smallTemperatureCelsius2Max}°`;
  forecastTemperature3.innerHTML = `${smallTemperatureCelsius3Min}° / ${smallTemperatureCelsius3Max}°`;
  forecastTemperature4.innerHTML = `${smallTemperatureCelsius4Min}° / ${smallTemperatureCelsius4Max}°`;
  forecastTemperature5.innerHTML = `${smallTemperatureCelsius5Min}° / ${smallTemperatureCelsius5Max}°`;
}

linkC.addEventListener("click", showC);

// Forecast

forecastDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

weekDay1 = document.querySelector("#week-day1");
weekDay2 = document.querySelector("#week-day2");
weekDay3 = document.querySelector("#week-day3");
weekDay4 = document.querySelector("#week-day4");
weekDay5 = document.querySelector("#week-day5");

function changeDays() {
  weekDay = [
    `${forecastDays[day]}`,
    `${forecastDays[day + 1]}`,
    `${forecastDays[day + 2]}`,
    `${forecastDays[day + 3]}`,
    `${forecastDays[day + 4]}`,
  ];

  weekDay1.innerHTML = weekDay[0];
  weekDay2.innerHTML = weekDay[1];
  weekDay3.innerHTML = weekDay[2];
  weekDay4.innerHTML = weekDay[3];
  weekDay5.innerHTML = weekDay[4];
}

changeDays();

forecastTemperature1 = document.querySelector("#forecast-temperature1");
forecastTemperature2 = document.querySelector("#forecast-temperature2");
forecastTemperature3 = document.querySelector("#forecast-temperature3");
forecastTemperature4 = document.querySelector("#forecast-temperature4");
forecastTemperature5 = document.querySelector("#forecast-temperature5");
//
smallWeatherIcon1 = document.querySelector("#small-weather-icon1");
smallWeatherIcon2 = document.querySelector("#small-weather-icon2");
smallWeatherIcon3 = document.querySelector("#small-weather-icon3");
smallWeatherIcon4 = document.querySelector("#small-weather-icon4");
smallWeatherIcon5 = document.querySelector("#small-weather-icon5");
//
let = smallTemperatureCelsius1Min = null;
let = smallTemperatureCelsius1Max = null;
//
let = smallTemperatureCelsius2Min = null;
let = smallTemperatureCelsius2Max = null;
//
let = smallTemperatureCelsius3Min = null;
let = smallTemperatureCelsius3Max = null;
//
let = smallTemperatureCelsius4Min = null;
let = smallTemperatureCelsius4Max = null;
//
let = smallTemperatureCelsius5Min = null;
let = smallTemperatureCelsius5Max = null;
//
function showForecast(response) {
  //
  smallTemperatureCelsius1Min = Math.round(response.data.daily[0].temp.min);
  smallTemperatureCelsius1Max = Math.round(response.data.daily[0].temp.max);
  //
  smallTemperatureCelsius2Min = Math.round(response.data.daily[1].temp.min);
  smallTemperatureCelsius2Max = Math.round(response.data.daily[1].temp.max);
  //
  smallTemperatureCelsius3Min = Math.round(response.data.daily[2].temp.min);
  smallTemperatureCelsius3Max = Math.round(response.data.daily[2].temp.max);
  //
  smallTemperatureCelsius4Min = Math.round(response.data.daily[3].temp.min);
  smallTemperatureCelsius4Max = Math.round(response.data.daily[3].temp.max);
  //
  smallTemperatureCelsius5Min = Math.round(response.data.daily[4].temp.min);
  smallTemperatureCelsius5Max = Math.round(response.data.daily[4].temp.max);

  forecastTemperature1.innerHTML = `${smallTemperatureCelsius1Min}° / ${smallTemperatureCelsius1Max}°`;

  forecastTemperature2.innerHTML = `${smallTemperatureCelsius2Min}° / ${smallTemperatureCelsius2Max}°`;

  forecastTemperature3.innerHTML = `${smallTemperatureCelsius3Min}° / ${smallTemperatureCelsius3Max}°`;

  forecastTemperature4.innerHTML = `${smallTemperatureCelsius4Min}° / ${smallTemperatureCelsius4Max}°`;

  forecastTemperature5.innerHTML = `${smallTemperatureCelsius5Min}° / ${smallTemperatureCelsius5Max}°`;
  //
  smallWeatherIcon1.src = `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`;
  smallWeatherIcon2.src = `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`;
  smallWeatherIcon3.src = `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`;
  smallWeatherIcon4.src = `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`;
  smallWeatherIcon5.src = `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`;
}

function getForecast(coordinates) {
  latitude = coordinates.lat;
  longitude = coordinates.lon;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast);
}
