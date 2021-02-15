import {Dimensions, StyleSheet} from 'react-native'
import { cores } from '../../Utilitarios/constantes'

const width = Dimensions.get('window').width

const Styles = StyleSheet.create({
    viewPrincipal:{
        height:80,
        width:'100%'
    },
    viewSecundaria:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    botaoBottmoBar:{
        width:'30%',
        height:'100%',
        marginHorizontal:5,
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        padding:2
    },
    botaoBottomBarText:{
        color:cores.branco,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    icones:{
        alignSelf:'center'
    }
})
export default Styles