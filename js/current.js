title = document.querySelector("#title");
temperatureElement = document.querySelector("#weather-temperature");
weatherDescription = document.querySelector("#weather-description");
cityHumidity = document.querySelector("#humidity");
cityWind = document.querySelector("#wind");
let button = document.querySelector("#current-location");

function showTemperature(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].main;
  let wind = Math.round(response.data.wind.speed);
  let cityName = response.data.name;
  console.log(response.data.name);

  title.innerHTML = `${cityName}`;
  temperatureElement.innerHTML = `${temp}°C`;
  weatherDescription.innerHTML = `${description}`;
  cityHumidity.innerHTML = `Humidity: ${humidity}%`;
  cityWind.innerHTML = `Wind: ${wind} km/h`;
}

function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

function buttonShowPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

button.addEventListener("click", buttonShowPosition);
