import React, { useState } from 'react'
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    KeyboardAvoidingView} from 'react-native'

import Style from './style'

const PaginaInicial=({navigation})=>{
    
    return(
        <KeyboardAvoidingView style={Style.viewPrincipal} behavior="padding">
            
                <Text style={Style.nomeApp}>MBLabs Eventos</Text>
                <View style={Style.viewLogin}>
                
                    <View >
                      <Text style={Style.fraseMeio}>Compre de forma rápida e facil seu ingresso!</Text>  
                    </View>
                   
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('cadastroUsuario')} >
                        <Text style={Style.botaoPagina}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('codigoSms')} >
                        <Text style={Style.botaoPagina}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('paginaInicialLogado')} >
                        <Text style={Style.botaoPagina}>Pagina Logado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('perfil')} >
                        <Text style={Style.botaoPagina}>Perfil</Text>
                    </TouchableOpacity>
                    
        </KeyboardAvoidingView>   
    )
}
export default PaginaInicial