import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView} from 'react-native'
import EventoLista from '../../Componentes/EventoItem/index.js'
import {salvarEvento,pegarEvento, pegarTodosEventos, deletarEvento} from '../../Utilitarios/Armazenamento'

salvarEvento({'nome': 'conferencia1', 'data': '12/12/2021', 'local':'São Paulo','valor':'R$12,00'})

const PaginaInicialLogado=()=>{
    
    const [aux,setaux] = useState({})
    
    pegarEvento('$conferencia1')
    .then(response=> {
        setaux(response)  
        }
    )
    .catch(e=>console.log(e))

    
   
    return(
        <View>
            <Text>
                PAGINA INICIAL LOGADO
            </Text>
            <ScrollView>
                <EventoLista nome={aux.nome} data={aux.data} local={aux.local} valor={aux.valor}/>
            </ScrollView>
            
        </View>
    )
} 
export default PaginaInicialLogado