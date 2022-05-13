import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import styles from './styles';
import { buscaInfoPokemon } from '../../services/requests/pokemons';
import backgroundType1 from './components/CardColor1';
import backgroundType2 from './components/CardColor2';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetalhesPokemon({ route }) {

    const [idPokemon, setIdPokemon] = useState()
    const [namePokemon, setNamePokemon] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [typePokemon, setTypePokemon] = useState([])
    const [abilities, setAbilities] = useState([])
    const [description, setDescription] = useState()
    const [evolutions, setEvolutions] = useState([])
    const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idPokemon}.gif`
    const imagePokeball = 'https://static.thenounproject.com/png/594337-200.png'
    const arrowImage = 'http://www.sinaldetransito.com.br/ferramentas/DIPLAVI/figuras/figuras%20de%20setas/setas%20utilizadas%20de%20verdade/setas%20png%20que%20foram%20trocadas%20por%20svg%20em%20novembro%202013/S-5_hd_sob_picto.png'

    useEffect(async () => {
        const detalhesPokemon = await buscaInfoPokemon(route.params.idPokemon)
        setIdPokemon(route.params.idPokemon)
        setNamePokemon(detalhesPokemon.name)
        setWeight(detalhesPokemon.weight)
        setHeight(detalhesPokemon.height)
        setTypePokemon(detalhesPokemon.type)
        setAbilities(detalhesPokemon.abilities)
        setDescription(detalhesPokemon.description)
        setEvolutions(detalhesPokemon.evolutionsFormImage)
    }, [])

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.backgroundLinear}
                colors={[backgroundType1(typePokemon), backgroundType2(typePokemon)]} />
            <View style={styles.cardContainer}>

                <Image
                    style={styles.imgPokemon}
                    source={{ uri: imagePokemon }} />

                <View style={styles.pkmConteiner}>
                    <Image style={styles.pokeball} source={{ uri: imagePokeball }} />
                    <Text style={styles.namePokemon}>{idPokemon}</Text>
                    <Text style={styles.namePokemon}>{namePokemon}</Text>
                </View>

                <View style={styles.characteristicsContainer}>
                    <Text style={styles.characteristics}>Weight: {weight / 10} kg</Text>
                    <Text style={styles.characteristics}>Height: {height / 10} m</Text>
                    <View style={styles.typeContainer}>
                        <Text style={styles.type} >Type: {typePokemon[0]}</Text>
                        {
                            typePokemon[1]
                                ? <Text style={styles.type}> / {typePokemon[1]}</Text>
                                : <></>
                        }
                    </View>
                </View>
                <View style={styles.abilitiesContainer}>
                    <Text style={styles.abilities} >Abilities: {abilities[0]}</Text>
                    <Text style={styles.abilities}> / {abilities[1]}</Text>
                </View>

                <Text style={styles.pokemonDescription}>{description}</Text>

                <View style={styles.imageEvolutionContainer} >
                    <Image
                        style={styles.imageEvolution}
                        source={{ uri: evolutions[0] }} />

                    {evolutions[1]
                        ? <View style={styles.arrowEvolutionContainer}>
                            <Image
                                style={styles.arrowEvolution}
                                source={{ uri: arrowImage }} />
                            <Image
                                style={styles.imageEvolution}
                                source={{ uri: evolutions[1] }} />
                        </View>
                        : <Text style={styles.testeAbsolute}></Text>
                    }
                    {evolutions[2]
                        ? <View style={styles.arrowEvolutionContainer}>
                            <Image
                                style={styles.arrowEvolution}
                                source={{ uri: arrowImage }} />
                            <Image
                                style={styles.imageEvolution}
                                source={{ uri: evolutions[2] }} />
                        </View>
                        : <Text style={styles.testeAbsolute}></Text>
                    }
                </View>
            </View>
        </View>
    )
}