import axios from "axios"
import { useState } from "react"

function App() {
  
 
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [descp, setDesc] = useState("")

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const getWeather = () => {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80f7d16aa75d97042e2ba983b4428359`)
        weatherData.then(function (success) {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setTemp(success.data.main.temp)
            setDesc(success.data.weather[0].description)

        })
            .catch(function (err) {
                console.log(err)
            })
    }


    return (
        <div className="bg-black p-16">
            <div className="bg-green-700 p-10">
                <h1 className="text-2xl">Weather App</h1>
                <p className="py-3">I can give you a daily weather report about your city</p>
                <input onChange={handleCity} value={city} type="text" className="p-2" />
                <button onClick={getWeather} className="bg-black text-white p-2 rounded-sm text-md">Get report</button>
                <div className="font-semibold">
                    <p className="py-0.5" >Weather: {weather}</p> <br />
                    <p className="pb-0.5">Temprature: {temp}</p> <br />
                    <p>Description: {descp}</p>
                </div>
            </div>
        </div>
    )
}



export default App;
