import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import Switch from './components/Switch';
import Logo from './components/Logo'

import './App.css';

const App = () => {
    
    const [isToggled, setIsToggled] = useState(false);

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <Logo />
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                    </h2>
                    <div className="city-temp">
                        {isToggled ? <div>
                        {Math.round(((weather.main.temp) * (9/5)) + 32)}
                        <sup>&deg;F</sup>
                        </div> : <div>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                        </div>}
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div className='toggle'>
                    {isToggled ? <span>&deg;C</span> : <span><b>&deg;C</b></span>}<Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />{isToggled ? <span><b>&deg;F</b></span> : <span>&deg;F</span>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;