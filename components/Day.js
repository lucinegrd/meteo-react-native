import { Text, View } from "react-native"
import Style from "../Style"

function Day({day}){
    const days=["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    const date=new Date(day.dt*1000)
    const sunrise = new Date(day.sunrise*1000).getHours() + "h" + new Date(day.sunrise*1000).getMinutes()
    const sunset = new Date(day.sunset*1000).getHours() + "h" + new Date(day.sunset*1000).getMinutes()
    
    return <View style={Style.day}>
                <Text style={Style.daytitle}>{days[date.getDay()]} </Text>
                <Text>Lever du soleil : {sunrise}</Text>
                <Text>Coucher du soleil : {sunset}</Text>
                <Text>Température du jour : {Math.round(day.temp.day)}°</Text>
                <Text>Min : {Math.round(day.temp.min)}°</Text>
                <Text>Max : {Math.round(day.temp.max)}°</Text>
                <Text>Ressenti : {Math.round(day.feels_like.day)}°</Text>
                <Text>Vent : {Math.round(day.wind_speed*3.6)}km/h </Text>
                <Text>Nuages : {day.clouds}% </Text>
                <Text>Probabilité pluie : {day.pop}% </Text>
                {day.rain > 0 ? <Text>Pluie : {day.rain}mm</Text> : null}
                <Text>Description : {day.weather[0].description}</Text>
        </View>
}

export default Day