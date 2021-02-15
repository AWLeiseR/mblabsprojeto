import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Button,FlatList, SafeAreaView, TextInput} from 'react-native'
import EventoLista from '../../Componentes/EventoItem/index.js'


import Styles from './style'

import axios from 'axios'

import bottomBar from '../../Componentes/bottomBar/index'
import BottomBar from '../../Componentes/bottomBar/index'
import { removerMemoria } from '../../Utilitarios/Armazenamento.js'

const criterioBusca={
    NOME:1,
    LOCAL:2,
    DATA:3
}

const estadoPagina={
    CARREGANDO:1,
    PRONTA:2
}

const PaginaInicialLogado=({navigation})=>{
    const [eventos,setEventos] = useState([])
    const [aux,setaux] = useState([])
    const [pesquisa,setPesquisa] = useState('')
    const [criterio,setCriterio] = useState(criterioBusca.NOME)
    const [pagina,setPagina] = useState(estadoPagina.CARREGANDO)

    useEffect(()=>{
        const testRequest = async () => {
            try {
                const test = await axios.get('https://fake-api-alan.herokuapp.com/eventos') 
                setEventos(test.data)
                setaux(test.data)
                setPagina(estadoPagina.PRONTA)
          } catch (e) {
            console.error('TEST ERROR:', e)
          }
        }
        testRequest()
    },[])

    const onChangePesquisa = (text) =>{
        if(text.lenght === 0)
            setaux(eventos)
        setPesquisa(text)
    }
    
    const pesquisaEvento = () =>{
        
        setaux(eventos.filter(item =>{
            let dado 
            switch(criterio){
                case criterioBusca.LOCAL:
                    dado = item.local
                    break
                case criterioBusca.DATA:
                    dado = item.data
                    break
                default:
                    dado = item.nome
                    break
            }
            return dado.includes(pesquisa)   
        }))
    }

    const onPressBotaoCriterio = (botao) =>{
        setCriterio(botao)
    }

    const callbackDetalhamento = (item)=>{
        navigation.navigate('detalhamentoEvento',{item:item})
    
    }

    const addStyle = (status)=>{
        if(status !== criterio)
            return Styles.botaoNormal
        else    
            return Styles.botaoPrescionado
    }

    const addStyleText = (status)=>{
        if(status !== criterio)
            return Styles.textoBotaoNormal
        else    
            return Styles.textoBotaoPrescionado
    }

    const conteudoPagina = () =>{
        if(pagina === estadoPagina.PRONTA){
            return(
                
                    <FlatList
                        data={aux}
                        renderItem={({item}) =>(<EventoLista  key={item.nome} item={item} callback={callbackDetalhamento} />)}
                        keyExtractor={item => item.nome}
                        contentContainerStyle={{ paddingBottom: '20%' }}
                    /> 
            )
        }else{
            return(
            
                <View style={Styles.carregnadoView}>
                    <Text style={Styles.carregnadoViewText}>Carregando eventos...</Text>
                </View>
                
            )
        }
    }

    const callback=()=>{
        navigation.navigate('paginaInicialLogado')
    }
    const callbackPerfil=()=>{
        navigation.navigate('perfil')
    }
    const callbackSair=()=>{
        removerMemoria()
        .then(()=>navigation.navigate('paginaInicial'))
        
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={Styles.viewPrincipal}>
                <View>
                        <View style={Styles.rowPesquisa}>
                            <TextInput
                                placeholder='ex: Simposio'
                                value={pesquisa}
                                onChangeText={onChangePesquisa}
                                style={Styles.inputPesquisa}
                                placeholderTextColor='#67519f'
                            />
                            <View style={Styles.viewButtonPesquisa}>
                                <TouchableOpacity onPress={pesquisaEvento}style={Styles.buttonPesquisa}>
                                    <Text style={Styles.textPesquisa}>{'>'}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={Styles.linhaBotoesPesquisa}>
                            <TouchableOpacity style={[Styles.botaoPesquisaGeral,addStyle(criterioBusca.NOME)]}
                                onPress={() => onPressBotaoCriterio(criterioBusca.NOME)}>
                                <Text style={[Styles.textoBotaoPadrao,addStyleText(criterioBusca.NOME)]}>Nome</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.botaoPesquisaGeral,addStyle(criterioBusca.LOCAL)]}
                                onPress={() => onPressBotaoCriterio(criterioBusca.LOCAL)}>
                                <Text style={[Styles.textoBotaoPadrao,addStyleText(criterioBusca.LOCAL)]}>Local</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.botaoPesquisaGeral,addStyle(criterioBusca.DATA)]}
                                onPress={() => onPressBotaoCriterio(criterioBusca.DATA)}>
                                <Text style={[Styles.textoBotaoPadrao,addStyleText(criterioBusca.DATA)]}>Data</Text>
                            </TouchableOpacity>
                        </View>
                
                        
                    </View>
            {conteudoPagina()}
            <BottomBar callbackEventos={callback} callbackProfile={callbackPerfil} callbackSair={callbackSair}/>
            
            </View>
           
        </SafeAreaView>
    )
} 
export default PaginaInicialLogado