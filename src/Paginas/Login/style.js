import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        height:'100%',
        paddingBottom:10,
        backgroundColor:cores.roxoEscuro,
        display:'flex',
        alignItems:'center'
    },
    viewSecundaria:{
        width:'80%',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    loginInput:{
        height:40,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:cores.branco,
        paddingBottom:5,
        color:cores.branco,
        marginBottom:20
    },
    labelInputEmail:{
        color:cores.branco,
        fontSize:20
    },
    botaoLogin:{
        width:width/3,
        borderColor:cores.branco,
        borderWidth:1,
        borderRadius:5
    },
    botaoLoginText:{
        color:cores.amarelo,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})
export default Styles