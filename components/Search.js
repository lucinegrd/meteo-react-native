import { useState } from 'react'
import {TextInput, View, TouchableHighlight} from 'react-native'
import style from '../Style.js'
import { Ionicons } from '@expo/vector-icons';


function Search() {
    const [city, onChangeCity] = useState(null)

    function submit() {
        return
    }

    return (
        <View style={style.searchcontainer}>
            <View style={style.textinputcontainer}>
                <TextInput
                    onChangeText={onChangeCity}
                    value={city}
                    placeholder="Rechercher une ville"
                    style={style.textinput}
                />
            </View>
            <TouchableHighlight
                activeOpacity={0.3}
                style={style.button}
                onPress={()=>submit()}
            >
                <Ionicons name="search-outline" size={25} color="white" style={{marginHorizontal:6}}/>
            </TouchableHighlight>
        </View>
        
    )
}

export default Search