import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity} from 'react-native'

import Styles from './style'

const EventoItem=({item,callback})=>{

    return(
        <View style={Styles.viewPrincipal}>
            <View>
                <View>
                    <Text style={Styles.nomeEvento}>{item.nome}</Text> 
                </View>
                <View style={Styles.linha}>
                    <Text>Local: {item.local}</Text>
                    <Text>Data: {item.data}</Text>
                </View>
                <Text style={Styles.precoStyle}>R$ {item.valor}</Text>
            </View>  
            
            <TouchableOpacity onPress={()=>callback(item)}>
                <Text>Ver Mais</Text>
            </TouchableOpacity> 
        </View>
    )
} 
export default EventoItem