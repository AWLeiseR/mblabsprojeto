import React, { useState } from 'react'
import {View,TextInput,Button, Alert} from 'react-native'

const confirmarTelefoneTela = ({numero,callbackConfirmaTel}) =>{
    const[codigo,setCodigo] = useState(0)

    const onChangeCodigo = (text) =>{
        if(text.lenght <= 4 )
            setCodigo(text)
    }

const confirma=()=>{
    if(codigo === numero)
        callbackConfirmaTel()
    else    
        Alert.alert('Código incorreto')
}

    return(
        <View>
            <TextInput
                placeholder='ex: 9999'
                value={codigo}
                onChangeText={onChangeCodigo}/>
            <Button 
                title="Confirmar"
                onPress={confirma}
                />
        </View>
    )
}

export default confirmarTelefoneTela