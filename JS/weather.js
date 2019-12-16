const weather = document.querySelector(".js-weather");

const API_KEY = "2aacdf28f7e0645621b7bfc0272e8d18", // OpenWeather API Key
COORDINATES = 'coordinates';
// Javascript allows the browser to get and send data without it being refreshed and that is what we are going to do here using an api
function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`).then(function(response){
    return response.json();
  })
  .then(function(json){
    const temperature =json.main.temp;
    const place = json.name;
    weather.innerText = `${place} \n${temperature} ℉ `;
  }); // Get the data use fetch
}

function saveCoordinates(coordinatesObj){
  localStorage.setItem(COORDINATES, JSON.stringify(coordinatesObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude; 
  const longitude = position.coords.longitude;
  const coordinatesObj = {
    latitude, //Note: if the same name you can do latitude, instead of latitude: latitude,
    longitude //longitude: longitude
  };
  saveCoordinates(coordinatesObj);
  getWeatehr(latitude, longitude);
}

function handleGeoError(){
  console.log('Cant access goe location');
}

// Asks the user for their location using an alert
function askForCoordinates(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // Use navigator api, geolocation is an object
}

function loadCoordinates(){
  const loadedCoordinates = localStorage.getItem(COORDINATES);
  if(loadedCoordinates === null){
    askForCoordinates();
  } else {
    // getWeather
    const parsedCoordinates = JSON.parse(loadedCoordinates);
    getWeather(parsedCoordinates.latitude, parsedCoordinates.longitude);
  }
}



function init(){
  loadCoordinates();
}

init();