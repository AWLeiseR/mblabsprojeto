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
        //justifyContent:'center',
        backgroundColor:cores.cinza2
    },
    tituloPagina:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:cores.roxoLogo
    },
    viewFrase:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        height:'40%'
    },
    frase:{
        paddingHorizontal:10,
        textAlign:'center',
        fontSize:15,
        color:cores.roxoLogo
    },
    viewLogin:{
        width :'80%',
        height:'20%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        
    },
    botaoPagina:{
        color:cores.roxoLogo,
        fontSize:20
    },
    inputApp:{
        display:'flex',
        justifyContent:'center',
        
        borderBottomColor:cores.roxoLogo,
        borderBottomWidth:1,
        color:cores.roxoLogo,
        paddingBottom:1,
        fontSize:20,
        marginBottom:10
    },
    entrarBotao:{
        width:width/2,
        height:40,
        backgroundColor:cores.roxoLogo,
        borderRadius:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    entrarBotaoText:{
        
        color:cores.branco,
    
        fontSize:20,
        textAlign:'center'
    },

})
export default Styles