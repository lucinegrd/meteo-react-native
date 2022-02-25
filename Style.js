import { StyleSheet } from "react-native";

const color = '#0066CC'

export default StyleSheet.create({
    searchcontainer :{
        flexDirection: "row"
    },
    
    textinputcontainer : {
        margin:10,
        backgroundColor:"white", 
        justifyContent:"center",
        borderRadius:3,
        flex: 1        
    },
    textinput : {
        marginLeft:10,
    },
    button : {
        backgroundColor:color,
        margin:10,
        paddingVertical:4,
        marginLeft:0,
        justifyContent:"center",
        borderRadius: 3
    },
    textcontainer : {
        margin:10,
        padding:10,
        backgroundColor:'white',
        borderRadius: 3
    },
    text:{
        marginBottom:5,
        textAlign:'justify',
        fontSize:16
    },
    textlink:{
        color:color,
        textAlign:"center",
        fontWeight:'bold',
        fontVariant:['small-caps'],
        textDecorationLine:'underline'
    },
    result :{
    },
    day:{
        backgroundColor:"white",
        padding:10,
        marginVertical:5,
        marginHorizontal:10,
        width:355
    },
    daytitle :{
        fontWeight:"bold"
    },
    city:{
        fontSize:20,
        marginLeft:10,
        fontWeight:"600"
    }

})