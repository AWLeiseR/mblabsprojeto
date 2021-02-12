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
                    <Text style={Styles.infoEvento}>Local: {item.local}</Text>
                    <Text style={Styles.infoEvento}>Data: {item.data}</Text>
                </View>
                <Text style={Styles.precoStyle}>R$ {item.valor}</Text>
            </View>  
            <View style={Styles.verMaisView}>
                <TouchableOpacity style={Styles.verMaisBotao} onPress={()=>callback(item)}>
                    <Text style={Styles.verMaisText}>Ver Mais</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
} 
export default EventoItem