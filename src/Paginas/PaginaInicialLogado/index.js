import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Button,FlatList, SafeAreaView, TextInput} from 'react-native'
import EventoLista from '../../Componentes/EventoItem/index.js'
import {logoutUsuario} from '../../Utilitarios/Armazenamento'

import Styles from './style'

import axios from 'axios'

const PaginaInicialLogado=({navigation})=>{
    const [eventos,setEventos] = useState([])
    const [aux,setaux] = useState([])
    const [pesquisa,setPesquisa] = useState('')
    useEffect(()=>{
        const testRequest = async () => {
            try {
                const test = await axios.get('https://fake-api-alan.herokuapp.com/eventos') 
                setEventos(test.data)
                setaux(test.data)
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

    const funcaoLogout = () =>{
        logoutUsuario().then(
            navigation.navigate('paginaInicial')
        )
       
    }
    const pesquisaEvento = () =>{
        setaux(eventos.filter(item =>{
            let nome = item.nome
            console.log(nome)
            console.log(pesquisa)
            console.log( nome.includes(pesquisa)  )  
            return nome.includes(pesquisa)   
        }))
    }
    const callbackDetalhamento = (item)=>{
        navigation.navigate('detalhamentoEvento',{item:item})
    
    }

    return(
        <SafeAreaView style={{width:'100%',flex:1}}>
            <View style={Styles.viewPrincipal}>
                <View style={Styles.rowPesquisa}>
                <TextInput
                    placeholder='ex: Simposio'
                    value={pesquisa}
                    onChangeText={onChangePesquisa}
                    style={Styles.inputPesquisa}
                    placeholderTextColor='#FFF'
                />
                <TouchableOpacity onPress={pesquisaEvento}style={Styles.buttonPesquisa}>
                    <Text style={Styles.textPesquisa}>{'>'}</Text>
                </TouchableOpacity>
                </View>
                {/*<Button title='Ver todos os eventos' onPress={testRequest}/>*/}
                
                <FlatList
                    data={aux}
                    renderItem={({item}) =>(<EventoLista  key={item.nome} item={item} callback={callbackDetalhamento} />)}
                    keyExtractor={item => item.nome}
                    contentContainerStyle={{ paddingBottom: '20%' }}
                />
                
                <TouchableOpacity onPress={funcaoLogout} ><Text>Logout</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
} 
export default PaginaInicialLogado