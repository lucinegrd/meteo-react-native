import { useState } from 'react'
import {TextInput, View, TouchableHighlight, ScrollView} from 'react-native'
import style from '../Style.js'
import { Ionicons } from '@expo/vector-icons';
import Result from './Result.js';


function Search() {
    const [city, onChangeCity] = useState(null)
    const [search, onChangeSearch] = useState(null)
    const [showResult, changeShowResult] = useState(false)

    function submit() {
        onChangeCity(search)
        changeShowResult(true)
    }

    return (
        <View>
            <View style={style.searchcontainer}>
                <View style={style.textinputcontainer}>
                    <TextInput
                        onChangeText={onChangeSearch}
                        value={search}
                        placeholder="Rechercher une ville"
                        style={style.textinput}
                    />
                </View>
                <TouchableHighlight
                    activeOpacity={0.3}
                    style={style.button}
                    onPress={submit}
                >
                    <Ionicons name="search-outline" size={25} color="white" style={{marginHorizontal:6}}/>
                </TouchableHighlight>
            </View>
            <ScrollView>
                {showResult && <Result city={city}/>}
            </ScrollView>
        </View>
        
        
    )
}

export default Search