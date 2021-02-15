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
    nomeEvento:{
        color:cores.roxoLogo,
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
        color:cores.roxoLogo,
        fontWeight:'bold',
        fontSize:20
    },
    infoEvento:{
        color:cores.cinza,
        fontSize:15,
        paddingLeft:30
    },
    linhaInformacao:{
        display:'flex',
        flexDirection:'row'
    },
    comprarBotao:{
        width:width/2,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:cores.roxoLogo,
        borderRadius:10,
        backgroundColor:cores.roxoLogo
    },
    comprarBotaoText:{
        fontSize:20,
        color:cores.branco
    }
})

export default Styles