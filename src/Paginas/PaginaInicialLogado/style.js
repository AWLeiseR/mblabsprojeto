import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        backgroundColor:cores.roxoEscuro
    },
    rowPesquisa:{
        height:35,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        marginTop:10,
        
    },
    inputPesquisa:{
        display:'flex',
        padding:5,
        width:'90%',
        height:'95%',
        borderRadius:5,
        borderWidth:1,
        borderColor:cores.branco,
        margin:1,
        fontSize:20,
        
    },
    buttonPesquisa:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'8%',
        height:'95%',
        borderRadius:5,
        margin:1
    },
    textPesquisa:{
        color:cores.branco,
        fontSize:20,
        fontWeight:'bold'
    }
    
})

export default Styles