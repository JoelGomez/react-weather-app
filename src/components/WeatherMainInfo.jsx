import './weatherMainInfo.css';

export const WeatherMainInfo = ({ weather }) => {

    return (
        <>
            <div className="container">
                <div className='location'>
                    <div>
                        <h1>{weather?.location?.name}</h1>
                    </div>
                    <div>
                        {weather?.location?.country}
                    </div>
                </div>
                <div className='icon'>
                    <img src={`http:${weather?.current?.condition?.icon}`} alt={weather?.current?.condition?.text} />
                </div>
            </div>
            <div className='temp'>
                {weather?.current?.temp_c}°C
            </div>
            <div className="map">
                <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d64374.82519830212!2d${weather?.location?.lon}!3d${weather?.location?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1705552949728!5m2!1ses-419!2smx`} width="100%" height="550" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}