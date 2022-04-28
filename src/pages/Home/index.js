import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    StatusBar,
} from 'react-native';
import styles from './styles';

export default function Home() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results)
            })
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={pokemons}
                numColumns={4}
                key={4}
                keyExtractor={(pokemon) => pokemon.name}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={PokemonShow} />
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

function PokemonShow(item) {
    const { name, url } = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
    //const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonNumber}.gif`

    return (
        <View>
            <TouchableOpacity
                style={styles.pokedexContainer}
                onPress={() => { }} >
                <Image
                    style={styles.pokemonImage}
                    source={{ uri: imageUrl }} />
            </TouchableOpacity>
        </View>
    )
}