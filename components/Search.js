import { useState } from 'react'
import {TextInput, View, Button} from 'react-native'

function Search({navigation}) {
    const [city, onChangeCity] = useState(null)

    return (
        <View>
            <TextInput
                onChangeText={onChangeCity}
                value={city}
                placeholder="Rechercher une ville"
            />
            <Button
                title="About me"
                onPress={() => navigation.navigate('About')} 
            />
            <Button
                title="Rechercher encore"
                onPress={()=>navigation.push('Search')}
            />
        </View>
    )
}

export default Search