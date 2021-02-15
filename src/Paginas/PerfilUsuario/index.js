import React, { useEffect, useState } from 'react'
import {View,Text,TextInput,
    TouchableOpacity} from 'react-native'
import Styles from './style'
import BottomBar from '../../Componentes/bottomBar'
import {resgatarMemoria} from '../../Utilitarios/Armazenamento'
const PerfilUsuario=({navigation})=>{
    const [usuario,setUsuario] = useState({})
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [endereco, setEndereco]=useState('')
    const [cpf, setCpf]=useState('')
    const [senha, setSenha]=useState('')
    const [confirmarSenha, setConfirmarSenha]=useState('')

    useEffect(()=>{
        resgatarMemoria()
        .then(res => setUsuario(res))
        .catch(e=>console.log(e))
    },[])
    console.log(usuario)
    const callback=()=>{
        navigation.navigate('paginaInicialLogado')
    }
    const callbackPerfil=()=>{
        navigation.navigate('perfil')
    }
    const callbackSair=()=>{
        navigation.navigate('paginaInicial')
    }
    return(
        <View style={Styles.viewPrincipal}>
                <Text style={Styles.tituloPagina}>Perfil do usuário</Text>
            <View style={Styles.viewSecundaria}>
                    
                    <View>
                        <Text style={Styles.labelInfoPrefil}>Nome:</Text>
                        <Text style={Styles.infoPerfil}>{usuario.nome}</Text>
                        <Text style={Styles.labelInfoPrefil}>CPF:</Text>
                        <Text style={Styles.infoPerfil}>{usuario.cpf}</Text>
                        <Text style={Styles.labelInfoPrefil}>Email:</Text>
                        <Text style={Styles.infoPerfil}>{usuario.email}</Text>
                        <Text style={Styles.labelInfoPrefil}>Endereço:</Text>
                        <Text style={Styles.infoPerfil}>{usuario.endereco}</Text>
                        <Text style={Styles.labelInfoPrefil}>Telefone:</Text>
                        <Text style={Styles.infoPerfil}>{usuario.tel}</Text>
                    </View>
                    
                </View>
                <BottomBar callbackEventos={callback} callbackProfile={callbackPerfil} callbackSair={callbackSair}/>
        </View>
    )
}
export default PerfilUsuario