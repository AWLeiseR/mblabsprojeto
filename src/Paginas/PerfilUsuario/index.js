import React, { useState } from 'react'
import {View,Text,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PerfilUsuario=()=>{
    const [editarPerfil,setEditarPerfil] = useState(false)
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [endereco, setEndereco]=useState('')
    const [cpf, setCpf]=useState('')
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

    const salvarAlteracoes = () =>{
        
    }

    const displayTela = ()=>{
        if(editarPerfil){
            return(
                <View>
                    <Text>Editar perfil do usuário</Text>
                    <View>
                        <TextInput
                            value={Nome}
                            onChangeText={onChangeNome}/>

                        <TextInput
                            value={cpf}/>

                        <TextInput
                            value={email}/>
                        
                        <TextInput 
                            value={endereco}/>
                        <TextInput
                            value={cargo}/>
                        
                        <TextInput
                            value={senha}/>
                        
                        <TextInput 
                            value={confirmarSenha}/>
                    </View>
                </View>
            )
        }else{
            return(
                <View>
                    <Text>
                    Perfil do usuário
                    </Text>
                    <View>
                        <Text>Nome</Text>
                        <Text>CPF</Text>
                        <Text>Email</Text>
                        <Text>Endereço</Text>
                        <Text>Cargo</Text>
                    </View>
                    <TouchableOpacity>
                        <Text>Historico de Compras</Text>
                    </TouchableOpacity>
                </View> 
            )
        }
    }
    return(
        <View>
            {displayTela()}
            <TouchableOpacity onPress={()=>setEditarPerfil(true)}>
                <Text>Editar perfil</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PerfilUsuario