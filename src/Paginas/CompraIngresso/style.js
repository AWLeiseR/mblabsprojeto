import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width,
        height,
        display:'flex',
        alignItems: 'center',
        padding:5,
        backgroundColor:cores.roxoEscuro
    },
    tituloPagina:{
        color:cores.amarelo,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'
    },
    viewInputInfoCartao:{
        width:'90%',
        height:height/1.5,
        
    },
    inputInfoCartao:{
        color:cores.branco,
        paddingBottom:5,
        borderBottomColor:cores.branco,
        borderBottomWidth:1,
        fontSize:20
    },
    botaoFinalizar:{
        width:width/2,
        borderRadius:5,
        borderWidth:1,
        borderColor:cores.branco,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    botaoFinalizarText:{
        color:cores.amarelo,
        fontWeight:'bold',
        fontSize:20
    }
   
})

export default Styles