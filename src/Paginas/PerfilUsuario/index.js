import React, { useState } from 'react'
import {View,Text,TextInput,
    TouchableOpacity} from 'react-native'


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

  
    return(
        <View>
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
            
        </View>
    )
}
export default PerfilUsuario