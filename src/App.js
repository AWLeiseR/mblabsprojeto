import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaInicial from './Paginas/PaginaInicial/index'
import PaginaInicialLogado from './Paginas/PaginaInicialLogado/index'
import CadastroUsuario from './Paginas/CadastroUsuario/index'
import CadastroEvento from './Paginas/CadastroEvento/index'
import PerfilUsuario from './Paginas/PerfilUsuario/index'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator >
            
            <Stack.Screen name="paginaInicial" component={PaginaInicial} />
            <Stack.Screen name="paginaInicialLogado" component={PaginaInicialLogado} />
            <Stack.Screen name="cadastroUsuario" component={CadastroUsuario} />
            <Stack.Screen name="cadastroEvento" component={CadastroEvento} />
            <Stack.Screen name="perfil" component={PerfilUsuario} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
