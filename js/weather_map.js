// San Antonio Weather

// let currWeather = $.get(`http://api.openweathermap.org/data/2.5/weather?lat=29.4252&lon=-98.4946&appid=${OPEN_WEATHER_KEY}&units=imperial`).done(data => console.log(data));

// $(document).ready(() => {
//     $.get(`http://api.openweathermap.org/data/2.5/weather?lat=29.4252&lon=-98.4946&appid=${OPEN_WEATHER_KEY}&units=imperial`).done(function (data) {
//             $('.test').html('');
//         data.forEach(function (item){
//             $('.test2').append('<div></div>');
//             $('div').last().append('<div>' + item.main + '</div>');
//         })
//         });
// });

// Weather info for San Antonio, Tx

$(document).ready(() => {
    // change below
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_KEY,
        units: "imperial",
        q:     "San Antonio, US"
    }).done(function(data) {
        console.log(data);
    });
    // change above
})

// Changes the current city

// document.getElementById("currentCity").innerHTML = "<a>Current City : Place Holder</a>"

mapboxgl.accessToken = MAPBOX_KEY_API;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 10// starting zoom
});