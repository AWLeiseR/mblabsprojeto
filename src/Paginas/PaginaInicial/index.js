import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Button} from 'react-native'

const PaginaInicial=()=>{
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    
    const onChangeTextEmail=(text)=>{
        setEmail(text)
    }

    const onChangeTextSenha=(text)=>{
        setSenha(text)
    }

    return(
        <View>
            <Text>
                Pagina Inicial
            </Text>
            <TextInput
                placeholder='Email'
                onChangeText={text => onChangeTextEmail(text)}
                value={email}
            />
            <TextInput
                placeholder='Senha'
                onChangeText={text => onChangeTextSenha(text)}
                value={senha}
            />
            <Button>Entrar</Button>
        </View>
    )
}
export default PaginaInicial