import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {cores} from '../../Utilitarios/constantes'

const Styles = StyleSheet.create({
    viewPrincipal:{
        width:'100%',
        height:height/1.02,
        backgroundColor:cores.roxoEscuro,
        display:'flex',
        alignItems:'center'
    },
    viewSecundaria:{
        width:width/1.5,
        height:height/1.2,
        display:'flex',
        justifyContent:'center',
        
    },
    labelInfoPrefil:{
        color:cores.amarelo,
        fontSize:20,
        fontWeight:'bold'
    }
})
export default Styles