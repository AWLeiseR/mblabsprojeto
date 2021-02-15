import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        height,
        paddingBottom:10,
        backgroundColor:cores.cinza2
    },
    rowPesquisa:{
        height:35,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
        
    },
    inputPesquisa:{
        display:'flex',
        padding:5,
        width:'90%',
        height:'95%',
        borderRadius:5,
        borderWidth:1,
        borderColor:cores.roxoLogo,
        margin:1,
        fontSize:15,
        color:cores.roxoLogo
        
    },
    viewButtonPesquisa:{
        position:'absolute',
        width:width/1.2,
        height:35,
        display:'flex',
        justifyContent:'center',
        
    },
    buttonPesquisa:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',        
        borderRadius:5,
       
        
    },
    textPesquisa:{
        color:cores.roxoLogo,
        fontSize:30,
        fontWeight:'bold'
    },
    linhaBotoesPesquisa:{
        width:'95%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10
        
    },
    botaoPesquisaGeral:{
        borderRadius:5,
        width:'30%',
        height:25,
        margin:5,
        display:'flex',
        justifyContent:'center'
    },
    botaoPrescionado:{
        backgroundColor:cores.roxoLogo,
    },
    botaoNormal:{
        borderWidth:1,
        borderColor:cores.roxoLogo,
    },
    
    textoBotaoPadrao:{
        textAlign:'center'
    },
    textoBotaoPrescionado:{
        color:cores.branco
    },
    textoBotaoNormal:{
        color:cores.roxoLogo
    },
    carregnadoView:{
        height:height/1.5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    },
    carregnadoViewText:{
        color:cores.amarelo,
        fontSize:35,
        fontWeight:'bold',
        
    }

    
})

export default Styles