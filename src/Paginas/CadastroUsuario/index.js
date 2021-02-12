import React,{useState} from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Alert} from 'react-native'

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
    const [confirmarTela,setConfirmarTela] = useState(false)


    //manipulador das varivaeis
    const onChangeNome=(text)=>{
        setNome(text)
    }
    const onChangeEmail=(text)=>{
        setEmail(text)
    }
    const onChangeCpf=(text)=>{
        setCpf(text)
    }
    const onChangeTel=(text)=>{
        if(text.length<=11)
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
                        let usuario = {nome,email,endereco,cpf,senha,historicocompra:[],cargo:'comum'}
                        axios.post('https://fake-api-alan.herokuapp.com/usuarios',{usuario})
                        .then(response=>{
                            Alert.alert('Cadastro efetuado com sucesso! Enviamos um código de confirmação para seu número de celular.')
                            setNome('')
                            setEmail('')
                            setEndereco('')
                            setSenha('')
                            setCpf('')
                            setConfirmarSenha('')
                            mostrarTelaComfiramcao()
                            
                        })
                        .catch(e=>Alert.alert('Ocorreu um erro no cadastro, tente mais tarde.'))
                    
                    }
            })
            .catch(e=>{
                Alert.alert('Ocorreu um erro no cadastro, tente mais tarde.')
            })
        }

    }

    const mostrarTelaComfiramcao = () =>{
        setConfirmarTela(!confirmarTela)
    }

    const callback = () => {
        setConfirmarTela(false)
        navigation.navigate('paginaInicialLogado')
    }

    return(
        <View style={Styles.viewPrincipal}>
            <View>
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
                        <Text>endereco</Text>
                        <TextInput
                            placeholder='ex: Rua Campinas, 22'
                            style={Styles.inputStyle}
                            onChangeText={text => onChangeendereco(text)}
                            value={endereco}
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
                        <Text>Telefone</Text>
                        <TextInput
                            placeholder='43999999999'
                            style={Styles.inputStyle}
                            onChangeText={text => onChangeTel(text)}
                            value={tel}
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
        </View>
    )
}
export default CadastroUsuario