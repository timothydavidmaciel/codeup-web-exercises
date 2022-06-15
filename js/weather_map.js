// Mapbox Data

mapboxgl.accessToken = MAPBOX_KEY_API;

let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 10// starting zoom
});

let weatherData = $.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_KEY,
    units: "imperial",
    lat: 29.4252,
    lon: -98.4946
}).then((data) => {
    let weatherCards = "";
    for (let i = 0; i < 5; i++) {
        weatherCards +=
            `  <div class="card d-flex flex-row" style="width: auto;">
                  <div class="card-body">
                    <div class="card-title">${new Date(data.daily[i].dt * 1000)}</div>
                    <p class="card-text">Temp: ${data.daily[i].temp.day}</p
                </div>                     
              </div>
        `
    }
    document.getElementById("5Day").innerHTML = weatherCards;
})

// Marker Start Point
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);


// When dragging the marker it will update the location with the current forecast in that area
function onDragEnd() {
    const lngLat = marker.getLngLat();
    let renderWD = $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        units: "imperial",
        lat: lngLat.lat,
        lon: lngLat.lng
    }).then((data) => {
        console.log(data);
        let weatherCards = "";
        for (let i = 0; i < 5; i++) {
            weatherCards +=
                `  <div class="card d-flex flex-row" style="width: auto;">
                  <div class="card-body">
                    <div class="card-title">${new Date(data.daily[i].dt * 1000)}</div>
                    <p class="card-text">Temp: ${data.daily[i].temp.day}</p
                </div>
              </div>
        `
        }
        document.getElementById("5Day").innerHTML = weatherCards;
    })
}


marker.on('dragend', onDragEnd);

// Using geocode to update when searched
document.getElementById("submitSearch").addEventListener("click", function (e) {
    e.preventDefault();
let inputValue = document.getElementById("search").value;
console.log(inputValue)
geocode(inputValue, MAPBOX_KEY_API).then((res) => {
    let weatherData = $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        units: "imperial",
        lat: `${res[1]}`,
        lon: `${res[0]}`
    }).then((data) => {
        console.log(data)
        let weatherCards = "";
        for (let i = 0; i < 5; i++) {
            weatherCards +=
                `  <div class="card d-flex flex-row" style="width: auto;">
                  <div class="card-body">
                    <div class="card-title">${new Date(data.daily[i].dt * 1000)}</div>
                    <p class="card-text">Temp: ${data.daily[i].temp.day}</p
                </div>                     
              </div>
        `
        }
        document.getElementById("5Day").innerHTML = weatherCards;
        marker.setLngLat(res);
        map.setCenter(res);
    })
})

})


