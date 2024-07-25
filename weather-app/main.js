const apiKey = "fdf6e905a500f6f5a72f9753f5dedd63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector(".search button");
    const searchBox = document.querySelector(".search input");
    const weatherIcon = document.querySelector(".weather-icon");  
    const cardBackground = document.querySelector(".card");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
  
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
                cardBackground.style.backgroundImage = "linear-gradient(135deg, #e0eafc, #cfdef3)";

            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
                cardBackground.style.backgroundImage = "linear-gradient(135deg, #48c6ef, #6f86d6)";
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
                cardBackground.style.backgroundImage = "linear-gradient(135deg, #3a7bd5, #3a6073)";
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
                cardBackground.style.backgroundImage = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
                cardBackground.style.backgroundImage = "linear-gradient(135deg, #e0eafc, #cfdef3)";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
