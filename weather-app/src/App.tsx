import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Timepage } from './pages/Timepage';
import { WeatherPage } from './pages/Weatherpage';
import { Homepage } from './pages/Homepage';

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/time">Timepage</Link>
                    <Link to="/weather">Weatherpage</Link>
                </header>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/time" element={<Timepage />} />
                </Routes>
            </div>
        );
    }
}

export default App;
