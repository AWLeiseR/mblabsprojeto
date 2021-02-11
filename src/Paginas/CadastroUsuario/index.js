import React,{useState} from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Alert} from 'react-native'
    
import {cadastrarUsuario, usuarioExistente} from '../../Utilitarios/Armazenamento'

import Styles from './style'

const CadastroUsuario=({navigation})=>{
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [endereço, setEndereço]=useState('')
    const [cpf, setCpf]=useState('')
    const [senha, setSenha]=useState('')
    const [confirmarSenha, setConfirmarSenha]=useState('')

    const onChangeNome=(text)=>{
        setNome(text)
    }
    const onChangeEmail=(text)=>{
        setEmail(text)
    }
    const onChangeCpf=(text)=>{
        setCpf(text)
    }
    const onChangeEndereço=(text)=>{
        setEndereço(text)
    }
    const onChangeSenha=(text)=>{
        setSenha(text)
    }
    const onChangeConfirmarSenha=(text)=>{
        setConfirmarSenha(text)
    }


    const onClickButtonCadastrar=()=>{
        if(nome === '' || email === '' || endereço === ''
            || cpf === '' || senha ==='' || confirmarSenha === ''){
                Alert.alert('Complete todos os campos do cadastro.')
        }else if(senha !== confirmarSenha){
            Alert.alert('Senhas não são iguais.')
        }else{
            usuarioExistente(email)
            .then(response=>{
                if(response !== null){
                    Alert.alert('O email já está em uso!')
                }else{
                    let usuario = {nome,email,endereço,cpf,senha,historicocompra:[],cargo:'comum'}
                   
                    cadastrarUsuario(email,usuario)
                   navigation.navigate('paginaInicial')
                }
            })
            .catch(e=>{
                Alert.alert('Ocorreu um erro no cadastro, tente mais tarde.')
            })
        }

    }

    return(
        <View style={Styles.viewPrincipal}>
            <Text> Cadastro de Usuario</Text>
            
            <View style={Styles.viewCadastro}>
                <View>
                    <Text>Nome</Text>
                    <TextInput
                        placeholder='ex: João da Silva'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeNome(text)}
                        value={nome}
                    />
                </View>

                <View>
                    <Text>Email</Text>
                    <TextInput
                        placeholder='ex: joaosilva@gmail.com'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeEmail(text)}
                        value={email}
                    />
                </View>
                
                <View>
                    <Text>Endereço</Text>
                    <TextInput
                        placeholder='ex: Rua Campinas, 22'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeEndereço(text)}
                        value={endereço}
                    />
                </View>
                

                <View>
                    <Text>CPF</Text>
                    <TextInput
                        placeholder='000.000.000-00'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeCpf(text)}
                        value={cpf}
                    />
                </View>
                
                <View>
                    <Text>Senha</Text>
                    <TextInput
                        placeholder='Insira sua senha secreta'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeSenha(text)}
                        value={senha}
                    />
                </View>            
                
                <View>
                    <Text>Confirmar Senha</Text>
                    <TextInput
                        placeholder='Repita sua senha secreta'
                        style={Styles.inputStyle}
                        onChangeText={text => onChangeConfirmarSenha(text)}
                        value={confirmarSenha}
                    />
                </View>
            </View>
            <Button onPress={onClickButtonCadastrar}
                title="Cadastrar"
                color="#841584" />
        </View>
    )
}
export default CadastroUsuario