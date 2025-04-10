import React, { useState } from "react";
import searchIcon from '../../assets/zsearchicon.jpg'
import temp from '../../assets/temp.png'
import humidity from '../../assets/humidity.png'
import wind from '../../assets/wind.png'
import clearImg from '../../assets/clear.png'
import cloudsImg from '../../assets/clouds.png'
import drizzleImg from '../../assets/drizzle.png'
import hazeImg from '../../assets/haze.png'
import mistImg from '../../assets/mist.png'
import rainImg from '../../assets/rain.png'
import snowImg from '../../assets/snow.png'

const WeatherApp = () => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    // console.log("API URL:", apiUrl);
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)
    const [city, setCity] = useState("")

    const handelSearch = async () => {
        try {
            const response = await fetch(`${apiUrl}${city}&appid=${publicKey}`)
            const data = await response.json();
            console.log(data);
            // console.log(response.status);
            // console.log(data.weather[0].main);
            
            if (response.status == 400) {
                setError(true)
                setWeatherData(null)
            } else {
                setError(false)
                setWeatherData(data)
            }
        } catch (error) {
            console.log("Error ", error);
            setError(true)
            weatherData(null);
        }
    }

    const weatherIcon = (type) => {
        switch (type) {
            case "Clear":
                return clearImg
                break;
            case "Clouds":
                return cloudsImg
                break;
            case "Mist":
                return mistImg
                break;
            case "Drizzle":
                return drizzleImg
                break;
            case "Rain":
                return rainImg
                break;
            case "Snow":
                return snowImg
                break;
            case "Haze":
                return hazeImg
                break;
        }
    }
    // handelSearch()
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200 h-screen">
            <div className="bg-blue-400 rounded-2xl shadow-lg p-6 w-full max-w-2xl h-2/3">
                <div className="flex items-center gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        spellCheck="false"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
                    />
                    <button
                        onClick={handelSearch}
                        className="bg-white p-2 rounded-full border-2"
                    >
                        <img src={searchIcon} alt="search" className="w-5 h-5 " />
                    </button>
                </div>
                {error && (<div className="hidden text-red-600 text-center mb-4">
                    <p>Wrong CITY or STATE or COUNTRY entered</p>
                </div>)}

                {weatherData && (
                    <div className="text-center">
                        <img
                            src={weatherIcon(weatherData.weather?.[0].main)}
                            alt="weather icon"
                            className="mx-auto w-24 h-24 mb-4"
                        />
                        <h1 className="text-3xl font-bold mb-6">{weatherData.name}</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={temp}
                                    alt="temp"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <p className="text-lg font-semibold">{weatherData.main.temp }</p>
                                    <p className="text-sm text-gray-600">Temperature</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <img
                                    src={humidity}
                                    alt="humidity"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <p className="text-lg font-semibold">{weatherData.main.humidity}</p>
                                    <p className="text-sm text-gray-600">Humidity</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <img
                                    src={wind}
                                    alt="wind"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <p className="text-lg font-semibold">{weatherData.wind.speed}km/h</p>
                                    <p className="text-sm text-gray-600">Wind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default WeatherApp;
