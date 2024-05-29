const apiKey = "58c4d5262b87644b308c3a3ae3cb779e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
async function checkWeather(city){
    const response = await fetch(apiURL+city+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    if(data.weather[0].main == "Cloud"){
        weatherImage.src = "./Images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImage.src = "./Images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "./Images/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherImage.src = "./Images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImage.src = "./Images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherImage.src = "./Images/snow.png";
    }
    // display
    weather.style.display = "block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});