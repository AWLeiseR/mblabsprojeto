import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView} from 'react-native'

import Styles from'./style'

const DetalhamentoEvento =({navigation,route}) =>{
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={Styles.viewPrincipal}>
                <View>
                    <Text style={Styles.nomeEvento}>{route.params.item.nome}</Text>
                </View>
                <View style={Styles.detalhesView}>
                    <View >
                        <Text style={Styles.labelsEvento}>Descrição:</Text>
                        <Text style={Styles.infoEvento}>{route.params.item.descricao}</Text>
                        <Text style={Styles.labelsEvento}>Local:</Text>
                        <Text style={Styles.infoEvento}> {route.params.item.local}</Text>
                        <Text style={Styles.labelsEvento}>Data:</Text> 
                        <Text style={Styles.infoEvento}> {route.params.item.data}</Text>
                        <Text style={Styles.labelsEvento}>Quantidade de Pessoas:</Text>
                        <Text style={Styles.infoEvento}> {route.params.item.quantidade}</Text>
                        <Text style={Styles.labelsEvento}>Valor do ingresso:</Text>
                        <Text style={Styles.infoEvento}> R$ {route.params.item.valor},00</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('compraIngresso')} style={Styles.comprarBotao}>
                    <Text style={Styles.comprarBotaoText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
} 
export default DetalhamentoEvento