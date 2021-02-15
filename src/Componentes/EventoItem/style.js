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
        
        backgroundColor:'#fff',
        borderRadius:20,
        marginBottom:10,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 8},
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    nomeEvento:{
        fontSize:width/16,
        fontWeight:'bold',
        textAlign:'center',
        color:cores.roxoLogo
    },
    coluna:{
        width:width/1.5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        margin:10
        
    },
    infoEvento:{
        fontSize:15,
        color:cores.cinza
    },
    precoStyle:{
        fontSize:width/20,
        color:cores.roxoLogo,
        fontWeight:'bold'
        //textAlign:'center'
    },
    
    verMaisView:{
        display:'flex',
        alignItems:'center'
    },
    verMaisBotao:{
        width:width/4,
        height:30,
        borderRadius:20,
        backgroundColor:'rgba(103,81,159,0.8)',
        borderColor:cores.roxoLogo,
        borderWidth:1,
        display:'flex',
        justifyContent:'center'

    },
    verMaisText:{
        textAlign:'center',
        color:cores.branco,
        fontSize:15,
        fontWeight:'bold'
    }
})
export default Styles