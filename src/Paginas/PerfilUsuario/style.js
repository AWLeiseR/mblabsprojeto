import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        height:height/1.02,
        backgroundColor:cores.cinza2,
        display:'flex',
        alignItems:'center'
    },
    viewSecundaria:{
        width:width/1.5,
        height:height/1.2,
        display:'flex',
        justifyContent:'center',
        
    },
    tituloPagina:{
        color:cores.roxoLogo,
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    },
    labelInfoPrefil:{
        color:cores.roxoLogo,
        fontSize:25,
        fontWeight:'bold'
    },
    infoPerfil:{
        color:cores.cinza,
        paddingLeft:50,
        fontSize:20
    }
})
export default Styles