import React from 'react';
import { View, StatusBar } from 'react-native';
import PokemonLista from './components/pokemonLista';

export default function Pokedex() {

    return (
        <View>
            <PokemonLista />
            <StatusBar />
        </View>
    )
}