import React,{useState} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView} from 'react-native'

import Styles from './style'

import axios from 'axios'


const CadastroUsuario=({navigation})=>{
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [endereco, setEndereco]=useState('')
    const [cpf, setCpf]=useState('')
    const [tel,setTel]=useState('')
    const [senha, setSenha]=useState('')
    const [confirmarSenha, setConfirmarSenha]=useState('')
    


    //manipulador das varivaeis
    const onChangeNome=(text)=>{
        setNome(text)
    }
    const onChangeEmail=(text)=>{
        setEmail(text)
    }
    const onChangeCpf=(text)=>{

        if(cpf.length === 2 && text.length === 3)
            setCpf(text + '.')
        else if(cpf.length === 4 && text.length === 3)
            setCpf(text)
        else if(cpf.length === 6 && text.length === 7)
            setCpf(text + '.')
        else if(cpf.length === 8 && text.length === 7)
            setCpf(text)
        else if(cpf.length === 10 && text.length === 11)
            setCpf(text + '-')
        else if(cpf.length === 12 && text.length === 11)
            setCpf(text)
        else
            setCpf(text)
    
    }
    const onChangeTel=(text)=>{
        
            setTel(text)
            
    }
    const onChangeendereco=(text)=>{
        setEndereco(text)
    }
    const onChangeSenha=(text)=>{
        setSenha(text)
    }
    const onChangeConfirmarSenha=(text)=>{
        setConfirmarSenha(text)
    }

    //manipulador de cadastro
    const onClickButtonCadastrar=()=>{
        console.log('entrou')
        if(nome === '' || email === '' || endereco === ''
            || cpf === '' || senha ==='' || confirmarSenha === '' || tel === ''){
                Alert.alert('Complete todos os campos do cadastro.')
        }else if(senha !== confirmarSenha){
            Alert.alert('Senhas não são iguais.')
        }else{
            axios.get('https://fake-api-alan.herokuapp.com/usuarios?nome='+nome)
            .then(response=>{let res = response.data
                    let size = Object.keys(res).length
                    
                    if(size !== 0){
                        Alert.alert('O email já está em uso!')
                    }else{
                        let usuario = {nome,email,tel,endereco,cpf,senha}
                            setNome('')
                            setEmail('')
                            setTel('')
                            setEndereco('')
                            setSenha('')
                            setCpf('')
                            setConfirmarSenha('')
                            navigation.navigate('codigoSms',{usuario,pagina:1})

                    }
            })
            .catch(e=>{
                Alert.alert('Ocorreu um erro no cadastro, tente mais tarde.')
            })
        }

    }

    return(
        <KeyboardAvoidingView behavior='padding' style={{flex:1,alignItems: "center",
        justifyContent: "center"}}>
            
            <View style={Styles.viewPrincipal}>
                <View>
                    <Text style={Styles.tituloPagina}> Cadastro de Usuário</Text>
                    
                    <View style={Styles.viewCadastro}>
                        <View>
                            <Text style={Styles.labelsInput}>Nome</Text>
                            <TextInput
                                placeholder='ex: João da Silva'
                                style={Styles.inputStyle}
                                onChangeText={text => onChangeNome(text)}
                                value={nome}
                            />
                        </View>

                        <View>
                            <Text  style={Styles.labelsInput}>Email</Text>
                            <TextInput
                                placeholder='ex: joaosilva@gmail.com'
                                keyboardType='email-address'
                                style={Styles.inputStyle}
                                onChangeText={text => onChangeEmail(text)}
                                value={email}
                            />
                        </View>
                        
                        <View>
                            <Text style={Styles.labelsInput}>Endereco</Text>
                            <TextInput
                                placeholder='ex: Rua Campinas, 22'
                                style={Styles.inputStyle}
                                onChangeText={text => onChangeendereco(text)}
                                value={endereco}
                            />
                        </View>
                        
                        <View>
                            <Text style={Styles.labelsInput}>CPF</Text>
                            <TextInput
                                placeholder='000.000.000-00'
                                style={Styles.inputStyle}
                                keyboardType='numeric'
                                onChangeText={text => onChangeCpf(text)}
                                value={cpf}
                                maxLength={14}
                            />
                        </View>

                        <View>
                            <Text style={Styles.labelsInput}>Telefone</Text>
                            <TextInput
                                placeholder='43999999999'
                                style={Styles.inputStyle}
                                keyboardType='numeric'
                                onChangeText={text => onChangeTel(text)}
                                value={tel}
                                maxLength={11}
                            />
                        </View>
                        
                        <View>
                            <Text style={Styles.labelsInput}>Senha</Text>
                            <TextInput
                                placeholder='Insira sua senha secreta'
                                style={Styles.inputStyle}
                                onChangeText={text => onChangeSenha(text)}
                                value={senha}
                            />
                        </View>            
                        
                        <View>
                            <Text style={Styles.labelsInput}>Confirmar Senha</Text>
                            <TextInput
                                placeholder='Repita sua senha secreta'
                                style={Styles.inputStyle}
                                onChangeText={text => onChangeConfirmarSenha(text)}
                                value={confirmarSenha}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={onClickButtonCadastrar} 
                        style={Styles.cadastrarBotao}>
                        <Text style={Styles.cadastrarBotaoText}>Cadastrar</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        </KeyboardAvoidingView>
    )
}
export default CadastroUsuario