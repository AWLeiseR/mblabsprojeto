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
        backgroundColor:cores.cinza2
    },
    fraseMeio:{
        color:cores.roxoLogo,
        fontWeight:'700',
        fontSize:23,
        textAlign:'center'
    },
    viewLogin:{
        width :'80%',
        height:'50%',
        display:'flex',
        
        justifyContent:'center',
        
    },
    viewImagem:{
        width:'100%',
        height:'30%',
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
    },
    imagemLogo:{
        marginTop:150,
        alignSelf:'center',
        width:200*1.3,
        height:210
       
    },
    viewBotaoPagina:{
        width,
        display:'flex',
        alignItems:'center'
    },
    botaoPagina:{
        marginBottom:5,
        borderRadius:30,
        backgroundColor:cores.roxoLogo,
        height:50,
        width:width/2,
        display:'flex',
        justifyContent:'center'
    },
    botaoPaginaTexto:{
        textAlign:'center',
        color:cores.branco,
        fontSize:20
    },
})

export default Styles