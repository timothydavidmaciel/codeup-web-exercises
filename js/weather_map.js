// San Antonio Weather

// let currWeather = $.get(`http://api.openweathermap.org/data/2.5/weather?lat=29.4252&lon=-98.4946&appid=${OPEN_WEATHER_KEY}&units=imperial`).done(data => console.log(data));

$(document).ready(() => {
    $.get(`http://api.openweathermap.org/data/2.5/weather?lat=29.4252&lon=-98.4946&appid=${OPEN_WEATHER_KEY}&units=imperial`).done(function (data) {
            $('.test').html('');
        data.forEach(function (item){
            $('.test2').append('<div></div>');
            $('div').last().append('<div>' + item.main + '</div>');
        })
        });
});