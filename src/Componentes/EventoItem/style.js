import {Dimensions, StyleSheet} from 'react-native'
import { cores } from '../../Utilitarios/constantes'

const width = Dimensions.get('window').width

const Styles = StyleSheet.create({

    viewPrincipal:{
        width:width/1.1,
        display:'flex',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'center',
        
        backgroundColor:'rgba(255,255, 255, 0.1)',
        borderRadius:20,
        marginBottom:5,
        padding:10
    },
    nomeEvento:{
        fontSize:width/16,
        fontWeight:'bold',
        textAlign:'center',
        color:cores.branco
    },
    linha:{
        width:width/1.5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center'
        
    },
    infoEvento:{
        fontSize:15,
        color:cores.branco
    },
    precoStyle:{
        fontSize:width/20,
        color:cores.branco,
        textAlign:'center'
    },
    
    verMaisView:{
        display:'flex',
        alignItems:'center'
    },
    verMaisBotao:{
        width:width/4,
        borderRadius:5,
        borderColor:cores.branco,
        borderWidth:1,

    },
    verMaisText:{
        textAlign:'center',
        color:cores.amarelo,
        fontSize:15,
        fontWeight:'bold'
    }
})
export default Styles