import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity} from 'react-native'
import EventoLista from '../../Componentes/EventoItem/index.js'
import {salvarEvento,pegarEvento,logoutUsuario, pegarTodosEventos} from '../../Utilitarios/Armazenamento'

salvarEvento({'nome': 'conferencia1', 'data': '12/12/2021', 'local':'São Paulo','valor':'R$12,00'})

const PaginaInicialLogado=({navigation})=>{
    
    const [aux,setaux] = useState({})
    
    pegarEvento('$conferencia1')
    .then(response=> {
        setaux(response)  
        }
    )
    .catch(e=>console.log(e))

    const funcaoLogout = () =>{
        logoutUsuario().then(
            navigation.navigate('paginaInicial')
        )
       
    }
   
    return(
        <View>
            <Text>
                PAGINA INICIAL LOGADO
            </Text>
            <ScrollView>
                <EventoLista nome={aux.nome} data={aux.data} local={aux.local} valor={aux.valor}/>
            </ScrollView>
            <TouchableOpacity onPress={funcaoLogout} ><Text>Logout</Text></TouchableOpacity>
        </View>
    )
} 
export default PaginaInicialLogado