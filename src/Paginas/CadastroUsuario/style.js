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
        justifyContent:'center',
        backgroundColor:cores.roxoEscuro
        

    },
    tituloPagina:{
        fontSize:30,
        fontWeight:'bold',
        color:cores.amarelo,
        textAlign:'center'
    },
    viewCadastro:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
        
    },
    inputStyle:{
        width:width/1.3,
        height: 30,  
        marginBottom:5,
        borderBottomColor:cores.branco,
        borderBottomWidth:1,
        paddingBottom:5,
        color:cores.branco
    },
    
    labelsInput:{
        color:cores.branco
    },
    cadastrarBotao:{
        borderColor:cores.branco,
        borderRadius:5,
        borderWidth:1,
        height:30,
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