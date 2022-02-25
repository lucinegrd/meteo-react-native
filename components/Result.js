import {Text, ActivityIndicator, FlatList, View} from 'react-native';
import Style from '../Style';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { WEATHER_MAP_API_KEY } from "@env";
import Day from './Day';


function Result({city}) {
    const [meteo, setMeteo] = useState();   
    const[ville, setVille] = useState();

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_MAP_API_KEY}`)
            .then((res)=>{
                if (res.data.length !== 0) {
                    setVille(res.data[0].local_names != "undefined" ? res.data[0].local_names.fr : res.data[0].name)
                    const lat = res.data[0].lat
                    const long = res.data[0].lon
                    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=fr&exclude=hourly,minutely&units=metric&appid=${WEATHER_MAP_API_KEY}`)
                    .then(res => {
                        setMeteo(res.data)
                        
                    })
                }
                else {
                    setMeteo("")
                }
            })
    }, [city])



    return (meteo == null ? 
        <ActivityIndicator style={{margin:5}} color="#0066CC" size="large"/>
        : meteo == "" ? <Text style={Style.city}>Ville non trouvée</Text> : 
            <View>
                <Text style={Style.city}>{ville}</Text>
                <View style={Style.day}>
                    <Text style={Style.daytitle}>Aujourd'hui</Text>
                    <Text>Lever du soleil : {new Date(meteo.current.sunrise*1000).getHours() + "h" + new Date(meteo.current.sunrise*1000).getMinutes()}</Text>
                    <Text>Coucher du soleil : {new Date(meteo.current.sunset*1000).getHours() + "h" + new Date(meteo.current.sunset*1000).getMinutes()}</Text>
                    <Text>Maintenant: {Math.round(meteo.current.temp)}°</Text>
                    <Text>Ressenti : {Math.round(meteo.current.feels_like)}°</Text>
                    <Text>Vent : {Math.round(meteo.current.wind_speed*3.6)}km/h </Text>
                    <Text>Nuages : {meteo.current.clouds}% </Text>
                </View>
                {Object.keys(meteo.daily).map((index) => <Day key={index} day={meteo.daily[index]}/>)}
            </View>
        )
}

export default Result