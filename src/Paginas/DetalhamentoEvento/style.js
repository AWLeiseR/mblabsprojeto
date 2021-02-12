import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Styles = StyleSheet.create({
    viewPrincipal:{
        width,
        height,
        display:'flex',
        alignItems: 'center',
        padding:5
    },
    nomeEvento:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:35,
        
    },
    detalhesView:{
        height:'70%',
        padding:10,
        display:'flex',
        justifyContent:'center'
        
    },
    labelsEvento:{
        fontWeight:'bold',
        fontSize:20
    },
    infoEvento:{
        fontSize:15
    },
    linhaInformacao:{
        display:'flex',
        flexDirection:'row'
    },
    comprarBotao:{
        width:width/3,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:10

    }
})

export default Styles