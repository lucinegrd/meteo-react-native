import {Text, ActivityIndicator} from 'react-native';
import Style from '../Style';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { WEATHER_MAP_API_KEY } from "@env";


function Result({city}) {
    const [meteo, setMeteo] = useState();   

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_MAP_API_KEY}`)
            .then((response)=>{
                if (response.config.data != "undefined") {
                    const lat = response.data[0].lat
                    const long = response.data[0].lon
                    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${WEATHER_MAP_API_KEY}`)
                    .then(res => {
                        setMeteo(res.data.current)
                    })
                }
                else {
                    setMeteo(null)
                }
            })
    }, [city])


    return (meteo == null ? 
        <ActivityIndicator color="#0066CC" size="large"/>
        : <Text style={Style.result}>{city}{meteo.weather[0].description}</Text>
    )
}

export default Result