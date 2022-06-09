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


    // change below
    let weatherData = $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        units: "imperial",
        lat:     29.4252,
        lon: -98.4946
    }).then((data) => {
        let weatherCards = "";
        for (let i = 0; i < 5; i++) {
          weatherCards +=   `
            <div>
            <h6>Temp: ${data.daily[i].temp.day}</h6>
</div>
            `}
        document.getElementById("5Day").innerHTML = weatherCards;
    })





// let places = "";
//
// places.forEach(function (place) {
//
//     let POPUP = new mapboxgl.Popup()
//         .setLngLat(place.coordinates)
//         .setHTML(place.name)
//         .addTo(map)
//
//     let marker = new mapboxgl.Marker()
//         .setLngLat(place.coordinates)
//         .setPopup(POPUP)
//         .addTo(map)
// })

// Changes the current city

document.getElementById("currentCity").innerHTML = "<a>Current City : Place Holder</a>"

// look at geocode api
//can use a diffrent geocode api
mapboxgl.accessToken = MAPBOX_KEY_API;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 10// starting zoom
});