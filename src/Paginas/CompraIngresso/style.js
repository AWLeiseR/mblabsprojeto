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
        backgroundColor:cores.cinza2
    },
    tituloPagina:{
        color:cores.roxoLogo,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'
    },
    viewInputInfoCartao:{
        width:'90%',
        height:height/1.5,
        display:'flex',
        justifyContent:'center'
        
    },
    inputInfoCartao:{
        color:cores.roxoLogo,
        paddingBottom:5,
        borderBottomColor:cores.roxoLogo,
        borderBottomWidth:1,
        fontSize:20
    },
    botaoFinalizar:{
        width:width/2,
        height:40,
        borderRadius:20,
        
        backgroundColor:cores.roxoLogo,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    botaoFinalizarText:{
        color:cores.branco,
        fontWeight:'bold',
        fontSize:20
    }
   
})

export default Styles