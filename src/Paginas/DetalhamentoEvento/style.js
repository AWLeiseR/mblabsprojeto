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
    nomeEvento:{
        color:cores.amarelo,
        marginTop:10,
        fontWeight:'bold',
        fontSize:35,
        
        textAlign:'center'
        
    },
    detalhesView:{
        width:width/1.1,
        height:'70%',
        
        display:'flex',
        justifyContent:'center',
        
        
    },
    labelsEvento:{
        color:cores.amarelo,
        fontWeight:'bold',
        fontSize:20
    },
    infoEvento:{
        color:cores.branco,
        fontSize:15,
        paddingLeft:30
    },
    linhaInformacao:{
        display:'flex',
        flexDirection:'row'
    },
    comprarBotao:{
        width:width/3,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:10

    },
    comprarBotaoText:{
        fontSize:20,
        color:cores.amarelo
    }
})

export default Styles