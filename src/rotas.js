import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PokemonLista from './pages/PokeDex/components/pokemonLista';
import DetalhesPokemon from './pages/DetalhesPokemon';

export default function Rotas() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PokemonLista' >
                <Stack.Screen
                    name={'PokemonLista'}
                    component={PokemonLista}
                    options={{
                        title: 'Pokedex',
                        headerShown: true//ocultar o header
                    }} />

                <Stack.Screen
                    name={'DetalhesPokemon'}
                    component={DetalhesPokemon}
                    options={{
                        title: 'Detalhes'
                    }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}