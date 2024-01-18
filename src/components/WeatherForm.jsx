import { useState } from 'react'

export const WeatherForm = ({onChangeCity}) => {

    const[city, setCity] = useState('')

    const handleInputCity = (e) => {
        setCity(e.target.value)
        
    }

    const handleSubmitCityForm = (e) => {
        e.preventDefault()
        if(city !== ''){
            onChangeCity(city)
            setCity('')
        }
        
    }
        
    return (
        <>
            <form onSubmit={handleSubmitCityForm}>
                <input type="text" placeholder="Enter city name" value={city} onChange={handleInputCity} autoComplete="off" autoFocus/>
                <button type="submit">🔍</button>
            </form>
        </>
    )
}