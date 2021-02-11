import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity} from 'react-native'

import Styles from './style'

const EventoItem=({nome,data,local,valor})=>{
    const [mostrarDetalhes,setMostrarDetalhes]=useState(false)
    const [textoBotão,setTextoBotão]=useState('Mostrar detalhes')
    const mudartexto = () =>{
        if(mudartexto === false){
            setTextoBotão('Mostrar detalhes')
        }else{
            setTextoBotão('Esconder Detalhes')
        }
    }
    return(
        <View style={Styles.viewPrincipal}>
            <View>
                <View>
                    <Text style={Styles.nomeEvento}>{nome}</Text> 
                </View>
                <View style={Styles.linha}>
                    <Text>Local: {local}</Text>
                    <Text>Data: {data}</Text>
                </View>
                <Text style={Styles.precoStyle}>{valor}</Text>
            </View>   
            <TouchableOpacity>
                <Text>{textoBotão}</Text>
            </TouchableOpacity> 
        </View>
    )
} 
export default EventoItem