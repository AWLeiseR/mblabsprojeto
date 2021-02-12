import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from './Paginas/PaginaInicial/index'
import PaginaInicialLogado from './Paginas/PaginaInicialLogado/index'
import CadastroUsuario from './Paginas/CadastroUsuario/index'
import DetalhamentoEvento from './Paginas/DetalhamentoEvento/index'
import PerfilUsuario from './Paginas/PerfilUsuario/index'
import CodigoSMS from './Paginas/CodigoSms/index'
import EfetuarCompra from './Paginas/CompraIngresso/index'
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                
                <Stack.Screen name="paginaInicial" component={PaginaInicial} />
                <Stack.Screen name="paginaInicialLogado" component={PaginaInicialLogado} />
                <Stack.Screen name="cadastroUsuario" component={CadastroUsuario} />
                <Stack.Screen name="detalhamentoEvento" component={DetalhamentoEvento}/>
                <Stack.Screen name="perfil" component={PerfilUsuario} />
                <Stack.Screen name='codigoSms' component={CodigoSMS}/>
                <Stack.Screen name='compraIngresso' component={EfetuarCompra}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
