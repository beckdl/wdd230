const currentTemp = document.querySelector('#temp');
const currentHumidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.1651&lon=-117.3409&units=imperial&appid=5a04946737ab290cdc5fe062838346b0";

const urlDaily = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1651&lon=-117.3409&cnt=24&units=imperial&appid=5a04946737ab290cdc5fe062838346b0";

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
            displayDaily(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiDaily();
var i = 0;
const displayDaily = (list) => {
    const cards = document.getElementById('daily'); // select the output container element
    
        list.forEach((num) => {
            // Create elements to add to the div.cards element
            
            if (i % 8 == 0) {
                let card = document.createElement('section');
                let figure = document.createElement('figure');
                let h2 = document.createElement('h2');
                let description = document.createElement('figcaption');
                let pTemp = document.createElement('p');
                let pHum = document.createElement('p');
                let portrait = document.createElement('img');
        
                // Build the h2 content out to show the prophet's full name - finish the    template   string
                h2.textContent = `${num.dt_txt}`;
                description.textContent = `${num.weather[0].description}`;
                pTemp.textContent = `Temperature: ${num.main.temp} F`;
                pHum.textContent = `Humidity: ${num.main.humidity}`;

                // Build the image portrait by setting all the relevant attribute
                portrait.setAttribute('src', `https://openweathermap.org/img/w/${num.weather[0].icon}.png`);
                portrait.setAttribute('alt', `Picture of ${num.weather[0].description}`);
                portrait.setAttribute('loading', 'lazy');
        
                // Append the section(card) with the created elements
                card.appendChild(h2);
                figure.appendChild(portrait);
                figure.appendChild(description);
                card.appendChild(figure);
                card.appendChild(pTemp);
                card.appendChild(pHum);
        
                cards.appendChild(card);
                i += 1;
            }else {
                i += 1;
                return;
            }
            
        }) // end of forEach loop
    
} // end of function expression
