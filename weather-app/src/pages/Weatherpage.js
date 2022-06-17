import React from 'react'
import Weatherblock from '../components/weatherlogic';

const Weatherpage = () => {
    return (
        <div>
            <h1>Weather Page</h1>
            <h2>
                <Weatherblock/>
            </h2>
        </div>
    )
}
export {Weatherpage};