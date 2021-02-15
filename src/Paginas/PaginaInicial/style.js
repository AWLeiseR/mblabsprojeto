import {Dimensions, StyleSheet} from 'react-native'

import {cores} from '../../Utilitarios/constantes'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Styles = StyleSheet.create({
    viewPrincipal:{
        width,
        height,
        display:'flex',
        alignItems: 'center',
        backgroundColor:cores.roxoEscuro
    },
    viewLogin:{
        width :'80%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        
    },
    entrarBotao:{
        width:width/2,
        height:40,
        display:'flex',
        borderColor:cores.branco,
        borderWidth:2,
        backgroundColor:'transparent',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    entrarBotaoText:{
        color:cores.branco,
        fontSize:20
    },
    nomeApp:{
        fontSize:30,
        color:cores.branco,
        fontWeight:'bold'
    },
    fraseMeio:{
        color:cores.amarelo,
        fontWeight:'700',
        fontSize:25,
        textAlign:'center'
    },
    botaoPagina:{
        color:cores.branco,
        fontSize:20
    },
    inputApp:{
        borderBottomColor:cores.branco,
        borderBottomWidth:1,
        color:cores.branco,
        paddingBottom:1,
        fontSize:20,
        marginBottom:10
    }
})

export default Styles