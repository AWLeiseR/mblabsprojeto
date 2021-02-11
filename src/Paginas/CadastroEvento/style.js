import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Styles = StyleSheet.create({
    viewPrincipal:{
        width,
        height,
        display:'flex',
        alignItems:'center'
        

    },
    inputStyle:{
        width:width/1.3,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
    },
    viewCadastro:{
        width :'80%',
        height:height/1.4,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
        
    }
})

export default Styles