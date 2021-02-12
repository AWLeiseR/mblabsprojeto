import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView} from 'react-native'

import Styles from'./style'

const DetalhamentoEvento =(props) =>{
    console.log(props.route.params)
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={Styles.viewPrincipal}>
                <View>
                    <Text style={Styles.nomeEvento}>{props.route.params.item.nome}</Text>
                </View>
                <View style={Styles.detalhesView}>
                    <View >
                        <Text style={Styles.labelsEvento}>Descrição:</Text>
                        <Text style={Styles.infoEvento}>{props.route.params.item.descricao}</Text>
                        <Text style={Styles.labelsEvento}>Local:</Text>
                        <Text style={Styles.infoEvento}> {props.route.params.item.local}</Text>
                        <Text style={Styles.labelsEvento}>Data:</Text> 
                        <Text style={Styles.infoEvento}> {props.route.params.item.data}</Text>
                        <Text style={Styles.labelsEvento}>Quantidade de Pessoas:</Text>
                        <Text style={Styles.infoEvento}> {props.route.params.item.quantidade}</Text>
                        <Text style={Styles.labelsEvento}>Valor do ingresso:</Text>
                        <Text style={Styles.infoEvento}> R$ {props.route.params.item.valor},00</Text>
                    </View>
                </View>
                <TouchableOpacity style={Styles.comprarBotao}>
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
} 
export default DetalhamentoEvento