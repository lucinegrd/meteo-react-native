import {Text, ActivityIndicator} from 'react-native';
import Style from '../Style';
import axios from 'axios'
import { useEffect, useState } from 'react';


function Result({city}) {
    const [meteo, setMeteo] = useState();   

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=857ba8834749bebada3481826ce7dcad`)
            .then((response)=>{
                const lat = response.data[0].lat
                const long = response.data[0].lon
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=857ba8834749bebada3481826ce7dcad`)
                .then(res => {
                    console.log(res.data)
                    setMeteo(res.data.current)
                })
            })
    }, [])

    return (meteo == null ? 
        <ActivityIndicator color="#0066CC" size="large"/>
        : <Text style={Style.result}>{city}{meteo.weather[0].description}</Text>
    )
}

export default Result