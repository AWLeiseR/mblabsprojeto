import React,{useState} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity} from 'react-native'

const CadastroEvento=()=>{
    const [nome, setNome]=useState('')
    const [descricao, setDescricao]=useState('')
    const [local, setLocal]=useState('')
    const [data, setData]=useState('')
    const [Local, setLocal]=useState('')
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

    return(
        <View>
            <Text>
                Cadastro de Evento
            </Text>
            <TextInput
                placeholder='Nome'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeTextName(text)}
                value={nome}
            />
            <TextInput
                placeholder='Descrição'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeTextDescricao(text)}
                value={value}
            />
            <TextInput
                placeholder='Local'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeTextLocal(text)}
                value={local}
            />
            <TouchableOpacity>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CadastroEvento