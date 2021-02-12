import React, { useState } from 'react'
import {View,Text,TextInput,
    TouchableOpacity,
    Alert} from 'react-native'
import Styles from './style'


const EfetuarCompra=()=>{
    const [numeroCartao,setNumeroCartao] = useState(false)
    const [nomeTitular, setNomeTitular]=useState('')
    const [Validade, setValidade]=useState('')
    const [CodSeguranca, setCodSeguranca]=useState('')
    const [cpf, setCpf]=useState('')
    const [senha, setSenha]=useState('')
    const [confirmarSenha, setConfirmarSenha]=useState('')

    //manipulador das varivaeis
    const onChangeNumeroCartao = (text) =>{
        setNumeroCartao(text)
    }
    const onChangeNomeTitular=(text)=>{
        setNomeTitular(text)
    }
    const onChangeValidade=(text)=>{
        setValidade(text)
    }
    const onChangeCpf=(text)=>{
        setCpf(text)
    }
    const onChangeCodSeguranca=(text)=>{
        setCodSeguranca(text)
    }
    const onChangeSenha=(text)=>{
        setSenha(text)
    }
    const onChangeConfirmarSenha=(text)=>{
        setConfirmarSenha(text)
    }

    const finalizarCompra = () =>{
        Alert.alert('Compra efetuada com sucesso! ')
    }

  
    return(
        <View>
            <View style={Styles.viewPrincipal}>
                    <Text style={Styles.tituloPagina}>
                        Efetuar compra
                    </Text>
                    <View style={Styles.viewInputInfoCartao}>
                        <TextInput
                            placeholder='Nome do titular'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            style={Styles.inputInfoCartao}
                            onChangeText={onChangeNomeTitular}
                            value={nomeTitular}
                        />
                        <TextInput
                            placeholder='número do Cartao'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            style={Styles.inputInfoCartao}
                            onChangeText={onChangeNumeroCartao}
                            value={numeroCartao}
                        />
                        <TextInput
                            placeholder='Validade'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            style={Styles.inputInfoCartao}
                            onChangeText={onChangeValidade}
                            value={Validade}
                        />
                        <TextInput
                            placeholder='Código de segurança'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            style={Styles.inputInfoCartao}
                            onChangeText={onChangeCodSeguranca}
                            value={CodSeguranca}
                        />
                    </View>
                    <TouchableOpacity onPress={finalizarCompra}style={Styles.botaoFinalizar}>
                        <Text style={Styles.botaoFinalizarText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}
export default EfetuarCompra