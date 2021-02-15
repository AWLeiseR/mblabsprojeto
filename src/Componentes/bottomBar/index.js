import React from 'react'
import {View,TouchableOpacity,Text,Image} from 'react-native'
import Styles from './style'
import sair from '../../Utilitarios/icones/logout.png'
import perfil from '../../Utilitarios/icones/user.png'
import evento from '../../Utilitarios/icones/event.png'

const BottomBar = ({callbackEventos,callbackProfile,callbackSair})=>{
    return(
        <View style={Styles.viewPrincipal}>
            <View style={Styles.viewSecundaria}>
                <TouchableOpacity  
                    onPress={() => {callbackEventos()} }
                    style={Styles.botaoBottmoBar}>

                    <Image style={Styles.icones} source={evento} />
                    <Text style={Styles.botaoBottomBarText}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=> callbackProfile()}
                    style={Styles.botaoBottmoBar}>

                    <Image style={Styles.icones} source={perfil} />
                    <Text style={Styles.botaoBottomBarText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=> callbackSair()}
                    style={Styles.botaoBottmoBar}>
                    <Image style={Styles.icones} source={sair} />
                    <Text style={Styles.botaoBottomBarText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default BottomBar