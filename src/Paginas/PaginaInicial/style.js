import {Dimensions, StyleSheet} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Styles = StyleSheet.create({
    viewPrincipal:{
        width,
        height,
        display:'flex',
        alignItems: 'center'
        

    },
    viewLogin:{
        width :'80%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        
    }
})

export default Styles