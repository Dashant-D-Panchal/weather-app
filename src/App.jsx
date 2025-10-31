import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./App.css"

function New3() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = "49b78a78a503496e880131936250309";

    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const req = axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}&aqi=no`);
        const res = await req;
        setWeather({
            descp: res.data.current.condition.text,
            temp: res.data.current.temp_c,
            city: res.data.location.name,
            humidity: res.data.current.humidity,
            press: res.data.current.pressure_mb,
        })

        setCity(res.data.location.name)
        
        

    }

    //Converting K to C
    // let k = weather.temp;
    // let C = k - 273.15

    const Weath = () => {
        return <div >
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Temperature : {weather.temp} &#8451;
                </div>
                <div className="welement">
                    Humidity :{weather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {weather.press} mb
                </div>
            </div>
        </div>
    }
    return (<div className="main">
        <div className="weathhead">Weather Info</div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <input type="text" 
                     placeholder="city" 
                     name="loc" />
                    <button className="bttn">Search</button>
                </form>

                {weather && <Weath />}
            </div>
        </div>
    </div>
    )
}

export default New3;