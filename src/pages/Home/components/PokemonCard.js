import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import { buscaPokemon } from '../../../services/requests/pokemons';

export default function PokemonCard() {

    const [allPokemons, setAllPokemons] = useState([])

    pokemons()

    async function pokemons() {
        const resultado = await buscaPokemon()
        console.log("Pokemons: ", resultado)
    }


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=10', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setAllPokemons(data.results)
            })
    }, [])


    return (
        <View>

            <FlatList
                data={allPokemons}
                numColumns={4}
                key={4}
                keyExtractor={(pokemon) => pokemon.name}
                renderItem={PokemonShow} />

            <StatusBar style="light" />
        </View>
    )
}

function PokemonShow(item, { navigation }) {
    const { url } = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('InfoPokemon')}>
                <Image style={{
                    resizeMode: "cover",
                    width: 90,
                    height: 90,
                }} source={{ uri: imageUrl }} />
            </TouchableOpacity>
        </View>
    )
}