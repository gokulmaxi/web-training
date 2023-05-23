     const API_KEY = "afe8d400599d5c55918b86187ac43c5f"

     const cityDropdown = document.getElementById('cityDropdown');
     const weatherContainer = document.getElementById('weatherContainer');
     const weatherContent = document.getElementById('weatherContent');
     const cityName = document.getElementById('cityName');
     const temperature = document.getElementById('temperature');
     const humidity= document.getElementById('humidity');
     const wind= document.getElementById('wind');
     const icon = document.getElementById('icon');

     cityDropdown.addEventListener('change', fetchWeather);

     async  function fetchWeather() {
       const selectedCity = cityDropdown.value;
       const apiKey = "afe8d400599d5c55918b86187ac43c5f"
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;

       weatherContainer.classList.add('hidden');
       weatherContent.classList.add('hidden');

       await fetch(url)
         .then(response => response.json())
         .then(data => {
           console.log(data);
           cityName.textContent = data.weather[0].main;
           temperature.textContent = `${data.main.temp}°C`;
           humidity.textContent = data.main.humidity
           wind.textContent = data.wind.speed
           icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
           weatherContainer.classList.remove('hidden');
           weatherContent.classList.remove('hidden');
         })
         .catch(error => {
           console.error('Error:', error);
         });
     }

     fetchWeather();
