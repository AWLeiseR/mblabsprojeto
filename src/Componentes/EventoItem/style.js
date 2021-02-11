import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width

const Styles = StyleSheet.create({

    viewPrincipal:{
        width:width/1.1,
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'center',
        shadowColor:'gray',
        backgroundColor:'white',
        borderRadius:20,
        marginBottom:5
    },
    nomeEvento:{
        fontSize:width/16,
        fontWeight:'bold',
        textAlign:'center'
    },
    linha:{
        width:width/1.5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center'
        
    },
    precoStyle:{
        fontSize:width/20,
        color:'red',
        textAlign:'center'
    }
})
export default Styles