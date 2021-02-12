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

import axios from 'axios'

const PaginaInicial=({navigation})=>{
    
    const [codigoRandom,setCodigoRandom]=useState(5395)
    const [codigo,setCodigo]=useState('')
    
    const onChangeTextCodigo=(text)=>{
        setCodigo(text)
        
    }

    const random = (min = 1000, max = 9999) => {
        let num = Math.random() * (max - min) + min
    
        return Math.floor(num)
    }

    const verificar=()=>{
       if(codigo === ''){
           Alert.alert('Insira o código de verificação')
       }else if(codigoRandom === parseInt(codigo)){
            navigation.navigate('paginaInicialLogado')
       }
        
    }

    const onClickButtonEntrar = () =>{
        let auxRandom = random(1000,9999)
        //setCodigoRandom(auxRandom)
        // axios({
        //     method: 'post',
        //     url:'https://api.zenvia.com/v2/channels/sms/messages',
        //     data:{"from":"nettle-approach","to":"5543996305197","contents":[{"type":"text","text":"Código de verificação:" + auxRandom}]},
        //     headers:{'Content-Type': 'application/json', 'X-API-TOKEN':'nFmmFEGl3N37ag6F2QX4KwYzESigxlNiU5R9'}

        // }).then(response=>console.log(response))
        // .catch(e=> console.log('erro:'+e))
    }



    return(
        <KeyboardAvoidingView style={Style.viewPrincipal} behavior="padding">
            
                <Text>MBLabs Eventos</Text>
                <View style={Style.viewLogin}>
                
                    <View>
                        <Text>Código de confirmação</Text>
                        <TextInput
                            placeholder='ex: 8888'
                            type='number'
                            onChangeText={text => onChangeTextCodigo(text)}
                            value={codigo}
                        />
                    </View>
                   
                    <Button onPress={verificar}
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