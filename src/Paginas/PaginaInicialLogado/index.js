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
    
    const [aux,setaux] = useState([])
    const [pesquisa,setPesquisa] = useState('')
    useEffect(()=>{
        const testRequest = async () => {
            try {
                const test = await axios.get('https://fake-api-alan.herokuapp.com/eventos') 
                
                setaux(test.data)
          } catch (e) {
            console.error('TEST ERROR:', e)
          }
        }
        testRequest()
    },[])

    const onChangePesquisa = (text) =>{
        setPesquisa(text)
    }

    const funcaoLogout = () =>{
        logoutUsuario().then(
            navigation.navigate('paginaInicial')
        )
       
    }
   
    const callbackDetalhamento = (item)=>{
        navigation.navigate('detalhamentoEvento',{item:item})
    
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View>
                <View style={Styles.rowPesquisa}>
                <TextInput
                    placeholder='ex: Simposio'
                    value={pesquisa}
                    onChangeText={onChangePesquisa}
                    style={Styles.inputPesquisa}
                />
                <TouchableOpacity style={Styles.buttonPesquisa}>
                    <Text>{'>'}</Text>
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