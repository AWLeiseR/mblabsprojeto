import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image} from 'react-native'

import logo from '../../Utilitarios/icones/logoMBLabs.png'
import Styles from './style'

const PaginaInicial=({navigation})=>{
    return(
        <KeyboardAvoidingView  behavior="padding" enabled>
            <View style={Styles.viewPrincipal}>

                <View style={Styles.viewImagem}>
                    <Image source={logo} style={Styles.imagemLogo}/>
                </View>

                <View style={Styles.viewLogin}>
                    <Text style={Styles.fraseMeio}>Compre de forma rápida e fácil seu ingresso!</Text>  
                </View>

                <View style={Styles.viewBotaoPagina}>

                    <TouchableOpacity style={Styles.botaoPagina}
                        onPress={() => navigation.navigate('cadastroUsuario')} >
                        <Text style={Styles.botaoPaginaTexto}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.botaoPagina}
                        onPress={() => navigation.navigate('login')} >
                        <Text style={Styles.botaoPaginaTexto}s>Entrar</Text>
                    </TouchableOpacity>
                    
                </View> 

            </View>
            
                    
        </KeyboardAvoidingView>   
    )
}
export default PaginaInicial