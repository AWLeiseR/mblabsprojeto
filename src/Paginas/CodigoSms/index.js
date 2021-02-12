import React, { useState } from 'react'
import {View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity} from 'react-native'

import Styles from '../PaginaInicial/style'

import axios from 'axios'

import {autenticarUsuario} from '../../Utilitarios/Armazenamento'

const confirmarTelefoneTela = ({navigation}) =>{

    const[codigoRandom,setCodigoRandom] = useState(5395)
    const [codigo,setCodigo] = useState('')
    

    const onChangeCodigo = (text) =>{
        if(text.lenght <= 4 )
            setCodigo(text)
    }
    
    const random = (min = 1000, max = 9999) => {
        let num = Math.random() * (max - min) + min
    
        return Math.floor(num)
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

    const confirma=()=>{
        // if(codigo === numero)
        //     callbackConfirmaTel()
        // else    
        //     Alert.alert('Código incorreto')
    }

    return(
        <View style={Styles.viewPrincipal}>
            <View style={Styles.viewLogin}>
                <Text>Código de confirmação</Text>
                <TextInput
                    placeholder='ex: 9999'
                    value={codigo}
                    onChangeText={onChangeCodigo}
                    style={Styles.inputApp}
                    placeholderTextColor='#FFF'/>

                <TouchableOpacity onPress={onClickButtonEntrar}
                        style={Styles.entrarBotao}>
                        <Text style={Styles.entrarBotaoText}>ENTRAR</Text>
                </TouchableOpacity> 
            </View>
            
        </View>
    )
}

export default confirmarTelefoneTela