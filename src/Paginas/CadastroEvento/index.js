import React,{useState} from 'react'

import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView} from 'react-native'

import {eventoExistente, salvarEvento} from '../../Utilitarios/Armazenamento'
import Styles from './style'



const CadastroEvento=()=>{
    const [nome, setNome]=useState('')
    const [descricao, setDescricao]=useState('')
   
    const [data, setData]=useState('')
    const [local, setLocal]=useState('')
    const [preco, setPreco]=useState('')
    const [quantidade, setQuantidade]=useState('')

    const onChangeTextName=(text)=>{
        setNome(text)
    }

    const onChangeTextDescricao=(text)=>{
        setDescricao(text)
    }

    const onChangeTextLocal=(text)=>{
        setLocal(text)
    }

    const onChangeTextData=(text)=>{
        setData(text)
    }

    const onChangeTextPreco=(text)=>{
        setPreco(text)
    }

    const onChangeTextQuantidade=(text)=>{
        setQuantidade(text)
    }

    const onClickButtonCadastrar=()=>{
        if(nome === '' || descricao === '' || local === '' ||
            quantidade === '' || preco === '' || data === '' ){
                Alert.alert('Preencha todos os campos para finalizar o cadastr.')
        }else{
            eventoExistente(nome)
            .then(response => Alert.alert('Nome de evento ja cadastrado.') )
            .catch(e => {
                let evento = {nome,descricao,local,data,quantidade,preco}
                salvarEvento(evento)
                .then(response => Alert.alert('Evento cadastrado com sucesso'))
                .catch(e => Alert.alert('Erro ao tentar cadastrar evento.'))
            })
        }
    }
    return(
        <KeyboardAvoidingView style={Styles.viewPrincipal} behavior="height">
            <Text>Cadastro de Evento</Text>
            <View style={Styles.viewCadastro}>
                <View>
                    <Text>Nome</Text>
                    <TextInput
                        placeholder='Nome'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeTextName(text)}
                        value={nome}
                    />
                </View>
                <View>
                    <Text>Descrição</Text>
                    <TextInput
                        placeholder='ex: Congresso internacional destinado a medicos cardiologistas, com a presença de Dr Fulano, Dr Ciclano...'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeTextDescricao(text)}
                        value={descricao}
                    />
                </View>
                
                <View>
                    <Text>Local</Text>
                    <TextInput
                        placeholder='Centro de Eventos São Paulo'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeTextLocal(text)}
                        value={local}
                    />
                </View>
                <View>
                    <Text>Data</Text>
                    <TextInput
                        placeholder='15/11/2021'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeTextData(text)}
                        value={data}
                    />
                </View>
                <View>
                    <Text>Valor do ingresso</Text>
                    <TextInput
                        placeholder='ex: 12.0'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeTextPreco(text)}
                        value={local}
                    />
                </View>
                <View>
                    <Text>Quantidade de ingressos</Text>
                    <TextInput
                        placeholder='ex: 12'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeTextQuantidade(text)}
                        value={local}
                    />
            </View>
            </View>
            
            <Button onPress={onClickButtonCadastrar}
                title="Cadastrar"
                color="#841584" />
        </KeyboardAvoidingView>
    )
}
export default CadastroEvento