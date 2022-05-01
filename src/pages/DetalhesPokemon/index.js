import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import styles from './styles';
import { buscaInfoPokemon } from '../../services/requests/pokemons';

export default function DetalhesPokemon({ route }) {

    const [idPokemon, setIdPokemon] = useState()
    const [namePokemon, setNamePokemon] = useState()
    const [typePokemon, setTypePokemon] = useState([])
    const [abilities, setAbilities] = useState([])
    const [description, setDescription] = useState()
    const [evolutions, setEvolutions] = useState([])
    const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idPokemon}.gif`

    useEffect(async () => {
        const detalhesPokemon = await buscaInfoPokemon(route.params.idPokemon)
        setIdPokemon(route.params.idPokemon)
        setNamePokemon(detalhesPokemon.name)
        setTypePokemon(detalhesPokemon.type)
        setAbilities(detalhesPokemon.abilities)
        setDescription(detalhesPokemon.pokemonDescription)
        setEvolutions(detalhesPokemon.evolutionsFormImage)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.imgPokemon}
                source={{ uri: imagePokemon }} />

            <View style={styles.pkmConteiner}>
                <Image style={styles.pokeball} source={{ uri: 'https://static.thenounproject.com/png/594337-200.png' }} />
                <Text style={styles.namePokemon}>{idPokemon}</Text>
                <Text style={styles.namePokemon}>{namePokemon}</Text>
            </View>

            <View style={styles.typeContainer}>
                <Text style={styles.type} >Tipo: {typePokemon[0]}</Text>
                {
                    typePokemon[1]
                        ? <Text style={styles.type}>/ {typePokemon[1]}</Text>
                        : <></>
                }
            </View>

            <View style={styles.abilitiesContainer}>
                <Text style={styles.abilities} >Habilidades: {abilities[0]}</Text>
                {
                    abilities[1]
                        ? <Text style={styles.abilities}>/ {abilities[1]}</Text>
                        : <></>
                }
            </View>

            <Text style={styles.pokemonDescription}>{description}</Text>

            <View style={styles.imageEvolutionContainer} >
                <Image
                    style={styles.imageEvolution}
                    source={{ uri: evolutions[0] }} />

                {evolutions[1]
                    ? <Image
                        style={styles.imageEvolution}
                        source={{ uri: evolutions[1] }} />
                    : <Text style={styles.testeAbsolute}></Text>
                }
                {evolutions[2]
                    ? <Image
                        style={styles.imageEvolution}
                        source={{ uri: evolutions[2] }} />
                    : <Text style={styles.testeAbsolute}></Text>
                }
            </View>
        </View>
    )
}