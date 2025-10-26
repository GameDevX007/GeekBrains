const apiKey = '5394dd1fd665de10e2da30c9f7a79f7c';

let cityInput = document.getElementById('cityInput');
let weatherForm = document.getElementById('weatherForm');
let resultDegree = document.getElementById('resultDegree');
let resultCity = document.getElementById('resultCity');
let iconImg = document.getElementById('weatherIcon');

weatherForm.addEventListener("submit", function(e) {
  e.preventDefault();
  searchWeather();
});

function searchWeather() {
  let city = cityInput.value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      console.log(data);

      resultCity.textContent = `City: ${data.name}`;
      resultDegree.textContent = `Temperature: ${data.main.temp} °C`;

      // 👉 Добавляем иконку погоды
      const iconCode = data.weather[0].icon; // например: "10d"
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      iconImg.src = iconUrl;
      iconImg.style.display = 'block';
    })
    .catch(error => {
      console.error(error);
      resultCity.textContent = "Error";
      resultDegree.textContent = error.message;
      iconImg.style.display = 'none'; // скрываем иконку при ошибке
    });
}
