// Add HTML and CSS for the forecast
// Add API
// Recplace fake date with real data

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function showCityTemperature(response) {
  console.log(response);

  temperatureC = Math.round(response.data.main.temp);

  //  let temp = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].main;
  let wind = Math.round(response.data.wind.speed);
  let weather = response.data.weather[0].icon;

  temperatureElement.innerHTML = `${temperatureC}`;
  weatherDescription.innerHTML = `${description}`;
  cityHumidity.innerHTML = `Humidity: ${humidity}%`;
  cityWind.innerHTML = `Wind: ${wind} km/h`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather}@2x.png`;
}

function showForecastCity(event) {
  event.preventDefault();
  let city = input.value;
  title.innerHTML = input.value;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemperature);
}

form.addEventListener("submit", showForecastCity);
