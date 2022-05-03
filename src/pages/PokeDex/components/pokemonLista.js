import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import styles from './styles';
import api from '../../../services/api';
import Footerlist from './Footerlist';


export default function PokemonLista({ navigation }) {
    const [allPokemons, setAllPokemons] = useState([])
    const [navegacao, setNavegacao] = useState(false) //sabe se deve navegar
    const [pokemon, setPokemon] = useState('')//qual pokemon navegar
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        console.log("App Iniciado")
        loadApi();
    }, [])

    async function loadApi() {
        if (loading) return;
        setLoading(true)
        const response = await api.get(`/pokemon/?offset=${offset}&limit=10`)
        setAllPokemons([...allPokemons, ...response.data.results]);
        setOffset(offset + 10);
        setLoading(false)
    }

    //NAVEGACAO
    if (navegacao === true) {
        navigation.navigate('DetalhesPokemon', { idPokemon: pokemon });
        setNavegacao(false)
        setPokemon('')
    }

    function PokemonShow(item) {
        const { name, url } = item.item
        const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    setNavegacao(true)
                    setPokemon(pokemonNumber)
                }} >
                <Image
                    style={styles.imagePokemon}
                    source={{ uri: pokemonImage }}
                />
                <View style={styles.identificationContainer}>
                    <Text style={styles.numberPokemon}>{pokemonNumber}.</Text>
                    <Text style={styles.namePokemon}> {name.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            source={{ uri: "https://static.wikia.nocookie.net/pokemongo/images/d/d1/Pokedex_Background.png/revision/latest/scale-to-width-down/250?cb=20160720022003" }}
            resizeMode="cover"
            style={styles.imageBackground} >
            <View style={styles.container}>
                <FlatList
                    data={allPokemons}
                    keyExtractor={allPokemons => allPokemons.url}
                    renderItem={PokemonShow}
                    onEndReached={loadApi}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={<Footerlist load={loading} />}
                />
            </View>
            <StatusBar />
        </ImageBackground>
    )
}