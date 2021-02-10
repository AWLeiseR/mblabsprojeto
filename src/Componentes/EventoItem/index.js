import React from 'react'
import {
    View,
    Text,
    TouchableOpacity} from 'react-native'

const EventoItem=({nome,data,local,valor})=>{

    return(
        <TouchableOpacity>
            <View>
                <Text>
                    {nome}
                </Text>
                <Text>
                    {data}
                </Text>
                <Text>
                    {local}
                </Text>
                <Text>
                    {valor}
                </Text>
            </View>    
        </TouchableOpacity>
    )
} 
export default EventoItem