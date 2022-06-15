// Mapbox Data

mapboxgl.accessToken = MAPBOX_KEY_API;

let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 10// starting zoom
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

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


// San Antonio Weather

    // change below

// need to fix below

// let geoData = marker
// // let geoData = $.get(`http://api.openweathermap.org/geo/1.0/direct?q=San-Antonio,us&limit=5&appid=${OPEN_WEATHER_KEY}`)
// //     .then((data) => {
//     let geoInsert = "";
//     for (let i = 0; i < 1; i++) {
//         geoInsert +=
//             `<div>${geoData.lon}, ${geoData.lat}</div>`
//         // }
//         document.getElementById("testCity").innerHTML = geoInsert;
//     }

    let weatherData = $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        units: "imperial",
        lat: 29.4252,
        lon: -98.4946
        // lat: 29.4252,
        // lon: -98.4946
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



// const geocoder = new MapboxGeocoder({
//     // Initialize the geocoder
//     accessToken: mapboxgl.accessToken, // Set the access token
//     mapboxgl: mapboxgl, // Set the mapbox-gl instance
//     marker: false // Do not use the default marker style
// });

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});

// Add the geocoder to the map
map.addControl(geocoder)

// console.log(geocoder)
//
// function searchBox() {
//     const lngLat = geocoder;
//     let searchWM = $.get("http://api.openweathermap.org/data/2.5/onecall", {
//         APPID: OPEN_WEATHER_KEY,
//         units: "imperial",
//         lat: lngLat.eventManager.proximity.latitude,
//         lon: lngLat.eventManager.proximity.longitude
//     }).done((searchData) => {
//         let searchCards = "";
//         for (let i = 0; i < 5; i++) {
//             searchCards +=
//                 `  <div class="card d-flex flex-row" style="width: auto;">
//                   <div class="card-body">
//                     <div class="card-title">${new Date(searchData.daily[i].dt * 1000)}</div>
//                     <p class="card-text">Temp: ${searchData.daily[i].temp.day}</p
//                 </div>
//               </div>
//         `
//         document.getElementById("5Day").innerHTML = searchCards;
//     }
// })}

// function searchBox() {
//     const lngLat = geocoder;
//     console.log(lngLat.typeahead.selected.center[0])
//     let searchWM = $.get("http://api.openweathermap.org/data/2.5/onecall", {
//         APPID: OPEN_WEATHER_KEY,
//         units: "imperial",
//         lat: lngLat.typeahead.selected.center[1],
//         lon: lngLat.typeahead.selected.center[0]
//     }).done((searchData) => {
//         console.log();
//         // let weatherCards = "";
//         // for (let i = 0; i < 5; i++) {
//         //     weatherCards +=
//         //         `  <div class="card d-flex flex-row" style="width: auto;">
//         //           <div class="card-body">
//         //             <div class="card-title">${new Date(data.daily[i].dt * 1000)}</div>
//         //             <p class="card-text">Temp: ${data.daily[i].temp.day}</p
//         //         </div>
//         //       </div>
//         // `
//     })}
// document.getElementById("5Day").innerHTML = weatherCards;
// })
// }
