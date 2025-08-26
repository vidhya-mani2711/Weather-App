const { default: axios } = require("axios");
const { useState } = require("react");

function Background()
{
    const[city,setcity] = useState("")
    
    function handlecity(evt)
    {
        setcity(evt.target.value)
    }    
    
    function getWeather()
    {
        var weatherDate = axios("https://api.openweathermap.org/data/2.5/weather?q=london&appid=a523dfcbe6181201fe3a6480fa64ba38")
        weatherDate.then(function(success){
            console.log(success)
        })
    }
}