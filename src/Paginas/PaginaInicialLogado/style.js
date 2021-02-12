import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Styles = StyleSheet.create({
    rowPesquisa:{
        height:35,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
        
    },
    inputPesquisa:{
        display:'flex',
        padding:5,
        width:'90%',
        height:'90%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        margin:1
    },
    buttonPesquisa:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'8%',
        height:'95%',
        backgroundColor:'#841599',
        borderRadius:5,
        margin:1
    }
    
})

export default Styles