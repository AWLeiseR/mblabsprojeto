import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    KeyboardAvoidingView} from 'react-native'

import {autenticarUsuario} from '../../Utilitarios/Armazenamento'

import Style from './style'

const PaginaInicial=({navigation})=>{
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    
    const onChangeTextEmail=(text)=>{
        setEmail(text)
    }

    const onChangeTextSenha=(text)=>{
        setSenha(text)
    }

    const onClickButtonEntrar = () =>{
        if(email === '' || senha === ''){
            Alert.alert('preencha todos os campos')
        }else{
            console.log(email)
            console.log(senha)
            autenticarUsuario(email,senha)
            .then(response=>{
                if(response === null){
                    Alert.alert('Erro na autenticação, verifique suas credenciais.')
                }else{
                    navigation.navigate('paginaInicialLogado')
                }
            })
            .catch()
        }
    }

    return(
        <KeyboardAvoidingView style={Style.viewPrincipal} behavior="padding">
            
                <Text>MBLabs Eventos</Text>
                <View style={Style.viewLogin}>
                
                    <View>
                        <Text>Email</Text>
                        <TextInput
                            placeholder='ex: joseferreira@gmail.com'
                            onChangeText={text => onChangeTextEmail(text)}
                            value={email}
                        />
                    </View>
                    
                    <View>
                        <Text>Senha</Text>
                        <TextInput
                            placeholder='Digite aqui sua senha'
                            secureTextEntry={true}
                            onChangeText={text => onChangeTextSenha(text)}
                            value={senha}
                        />
                    </View>
                    
                    <Button onPress={onClickButtonEntrar}
                        title="Entrar"
                        color="#841584" /> 
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('cadastroUsuario')} ><Text>Cadastrar-se</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('cadastroEvento')} ><Text>Cadastrar Evento</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('paginaInicialLogado')} ><Text>Pagina Logado</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('perfil')} ><Text>Perfil</Text></TouchableOpacity>
        </KeyboardAvoidingView>
        
    )
}
export default PaginaInicial