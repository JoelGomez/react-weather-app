import { useState, useEffect } from "react"
import { WeatherForm } from "./WeatherForm"
import { WeatherMainInfo } from "./WeatherMainInfo"
import './weatherApp.css'
const key = import.meta.env.VITE_API_KEY
const url = import.meta.env.VITE_API_URL


export const WeatherApp = () => {



    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()    
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location?.name}`
    }, [weather])


    const loadInfo = async (city = 'chihuahua') => {

        try {
            const response = await fetch(`${url}&key=${key}&q=${city}`)
            const data = await response.json()

            setWeather(data)
            // console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }


    const handleChangeCity = (city) => {

        loadInfo(city)
    }

    return (
        <div className="weatherApp">
            <WeatherForm onChangeCity={handleChangeCity} />
            <div className="weatherInfo">
                {
                    weather && <WeatherMainInfo weather={weather} />
                }
            </div>
        </div>
    )

}