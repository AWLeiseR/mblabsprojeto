import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        height:'100%',
        paddingBottom:10,
        backgroundColor:cores.cinza2,
        display:'flex',
        alignItems:'center',
    },
    viewSecundaria:{
        width:'80%',
        height:height/3,
       // borderColor:'black',
       // borderWidth:1,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    tituloPafina:{
        marginTop:10,
        color:cores.roxoLogo,
        fontWeight:'bold',
        fontSize:30
    },
    frasePagina:{
        color:cores.roxoLogo,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        marginVertical:height/6,
        //borderWidth:1,
       //borderColor:'black'
    },
    viewInputEmail:{
        display:'flex',
       // justifyContent:'flex-end',
        //height:height/2,
       //borderWidth:1,
       //borderColor:'black'
    },
    loginInput:{
        height:40,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:cores.roxoLogo,
        paddingBottom:5,
        color:cores.roxoLogo,
        marginBottom:20,
        
    },
    labelInputEmail:{
        color:cores.roxoLogo,
        fontSize:20
    },
    botaoLogin:{
        width:width/2.5,
        height:40,
        borderColor:cores.roxoLogo,
        borderWidth:1,
        borderRadius:30,
        display:'flex',
        justifyContent:'center'
    },
    botaoLoginText:{
        color:cores.amarelo,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    viewBotaoEntrar:{
        //height:'50%',
        //borderWidth:1,
       // borderColor:'black',
       
        display:'flex',
        justifyContent:'center'
    }
})
export default Styles