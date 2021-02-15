import React,{useState} from 'react'
import {View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert} from 'react-native'

import axios from 'axios'

import { cores } from '../../Utilitarios/constantes'

import Styles from './style'

const Login =({navigation})=>{

    const [email,setEmail] = useState('')
    
    const onChangeEmail = (text) =>{
        setEmail(text)
    }

    const verificarEmail = ()=>{
        if(email.length > 0 && email.includes('@') && email.includes('.com')){
            axios.get('https://fake-api-alan.herokuapp.com/usuarios?email='+email)
            .then(response =>{
                    let res = response.data
                    console.log(res)
                    if(res.length === 0){
                        Alert.alert('Usuario não cadastrado', 'Deseja cadastrar-se',[
                            {text: "Sair", onPress: () => navigation.navigate('paginaInicial'), style: "cancel"},
                            { text: "Cadastrar", onPress:() => navigation.navigate('cadastroUsuario') }
                        ])
                    }else{
                        //console.log(res)
                        navigation.navigate('codigoSms',{usuario:res[0],pagina:2})
                    }
                    
            })
            .catch(e=>{
                console.log(e)
                Alert.alert('Um erro aconteceu no login, tente mais tarde!')
            })
        }else{
            Alert.alert('Email invalido!')
        }
        
    }
    
    return(
        <KeyboardAvoidingView>
            <View style={Styles.viewPrincipal}>
                <Text style={Styles.tituloPafina}>Login</Text>
                <Text style={Styles.frasePagina}>Insira seu email cadastrado no campo abaixo</Text>
                <View style={Styles.viewSecundaria}>
                    
                    <View style={Styles.viewInputEmail}>
                        <Text style={Styles.labelInputEmail}>Email</Text>
                        <TextInput
                            style={Styles.loginInput}
                            placeholder='ex: carlosferreira@gmail.com'
                            placeholderTextColor='#999'
                            valeu={email}
                            onChangeText={onChangeEmail}/>
                    </View>
                    <View style={Styles.viewBotaoEntrar}>
                        <TouchableOpacity 
                            style={Styles.botaoLogin}
                            onPress={verificarEmail}>
                            <Text style={Styles.botaoLoginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                        
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login