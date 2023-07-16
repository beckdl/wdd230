const currentTemp = document.querySelector('#temp');
const currentHumidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.1651&lon=-117.3409&units=imperial&appid=5a04946737ab290cdc5fe062838346b0";

const urlDaily = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1651&lon=-117.3409&cnt=3&units=imperial&appid=5a04946737ab290cdc5fe062838346b0";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    currentHumidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

async function apiDaily() {
    try {
        const response = await fetch(urlDaily);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayDaily(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiDaily();

function  displayDaily(weatherData) {
    currentDailyTemp.innerHTML = `${weatherData.list[0].main.temp.toFixed(0)}`;
    currentHumidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
