import React, { useEffect, useState } from 'react'
import {View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity} from 'react-native'

import Styles from '../PaginaInicial/style'

import axios from 'axios'

import {salvarMemoria} from '../../Utilitarios/Armazenamento'

//pagina 1 enviar para inicio do app (paginaInicial)
//pagina 2 enviar para area logada

const confirmarTelefoneTela = ({navigation,route}) =>{

    const [codigoRandom,setCodigoRandom] = useState(0)
    const [codigo,setCodigo] = useState('')
    
    useEffect(()=>{
        let auxRandom = random(1000,9999)
        setCodigoRandom(auxRandom)
        console.log(auxRandom)
        axios({
            method: 'post',
            url:'https://api.zenvia.com/v2/channels/sms/messages',
            data:{"from":"nettle-approach","to":'55'+route.params.usuario.tel,"contents":[{"type":"text","text":"Código de verificação: " + auxRandom}]},
            headers:{'Content-Type': 'application/json', 'X-API-TOKEN':'nFmmFEGl3N37ag6F2QX4KwYzESigxlNiU5R9'}

        }).then(response=>console.log(response))
        .catch(e=>console.log(e))
    },[])

    const onChangeCodigo = (text) =>{
            setCodigo(text)
    }
    
    const random = (min = 1000, max = 9999) => {
        let num = Math.random() * (max - min) + min
    
        return Math.floor(num)
    }

    
    const finalizarCadastro = ()=>{
        console.log(parseInt(codigo) === codigoRandom)
        console.log(route)
        if(parseInt(codigo) === codigoRandom && route.params.pagina === 1){
            axios.post('https://fake-api-alan.herokuapp.com/usuarios',route.params.usuario)
                .then(response=>{
                    
                    Alert.alert('Cadastro efetuado com sucesso!')
                    
                        navigation.navigate('paginaInicial')
                   
                        
                })
                .catch(e=>Alert.alert('Ocorreu um erro no cadastro, tente mais tarde.'))
        }else if(parseInt(codigo) === codigoRandom && route.params.pagina === 2){
            salvarMemoria(route.params.usuario)
            navigation.navigate('paginaInicialLogado')
        }
        else{
            Alert.alert('Código incorreto')
        }    
           
        
    }

    return(
        <View style={Styles.viewPrincipal}>
            <View style={Styles.viewLogin}>
                <Text style={Styles.botaoPagina}>Código de confirmação</Text>
                <TextInput
                    placeholder='ex: 9999'
                    value={codigo}
                    onChangeText={onChangeCodigo}
                    style={Styles.inputApp}
                    placeholderTextColor='#FFF'
                    maxLength={4}/>

                <TouchableOpacity onPress={finalizarCadastro }
                        style={Styles.entrarBotao}>
                        <Text style={Styles.entrarBotaoText}>ENTRAR</Text>
                </TouchableOpacity> 
            </View>
            
        </View>
    )
}

export default confirmarTelefoneTela