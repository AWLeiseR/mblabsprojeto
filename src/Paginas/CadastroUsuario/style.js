import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width,
        height,
        display:'flex',
        alignItems:'center',
        //justifyContent:'center',
        backgroundColor:cores.cinza2
        

    },
    tituloPagina:{
        fontSize:30,
        fontWeight:'bold',
        color:cores.roxoLogo,
        textAlign:'center'
    },
    viewCadastro:{
        height:'85%',
        display:'flex',
        //flexDirection:'column',
        justifyContent:'center',
        //alignItems:'center'
        
    },
    inputStyle:{
        width:width/1.3,
        height: 30,  
        marginBottom:5,
        borderBottomColor:cores.roxoLogo,
        borderBottomWidth:1,
        paddingBottom:5,
        color:cores.roxoEscuro
    },
    
    labelsInput:{
        color:cores.roxoLogo
    },
    cadastrarBotao:{
        borderColor:cores.roxoLogo,
        borderRadius:20,
        borderWidth:1,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    cadastrarBotaoText:{
        color:cores.amarelo,
        fontWeight:'bold',
        fontSize:20
    }
})

export default Styles