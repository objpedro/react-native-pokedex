import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { buscaPokemon } from '../../../services/requests/pokemons';


export default function PokemonLista({ navigation }) {
    const [allPokemons, setAllPokemons] = useState([])
    const [navegacao, setNavegacao] = useState(false) //sabe se deve navegar
    const [pokemon, setPokemon] = useState('')//qual pokemon navegar
    //console.log(navegacao, pokemon)

    useEffect(() => {
        pokemons()
    }, [])

    async function pokemons() {//chamar pokemons
        const resultado = await buscaPokemon()
        setAllPokemons(resultado)
    }

    //NAVEGACAO
    if (navegacao === true) {
        navigation.navigate('DetalhesPokemon', { idPokemon: pokemon });
        setNavegacao(false)
        setPokemon('')
        //console.log("navigation", pokemon)
    } else {
        //console.log("Não vai navegar hoje!")
    }

    function PokemonShow(item) {
        const { name, url } = item.item
        const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    //console.log("Cliquei no Pokemon", pokemonNumber)
                    setNavegacao(true)
                    setPokemon(pokemonNumber)
                }} >
                <Image
                    style={styles.imagePokemon}
                    source={{ uri: pokemonImage }}
                />
                <Text
                    style={styles.namePokemon} >{name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={{
                padding: 10
            }}>
            <FlatList
                data={allPokemons}
                keyExtractor={allPokemons => allPokemons.name}
                renderItem={PokemonShow}
            />
            <StatusBar />
        </View>
    )
}