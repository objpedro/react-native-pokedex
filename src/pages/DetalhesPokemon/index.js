import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    FlatList,
} from 'react-native';
import styles from './styles';
import { buscaInfoPokemon } from '../../services/requests/pokemons';

export default function DetalhesPokemon({ route }) {

    const [idPokemon, setIdPokemon] = useState()
    const [namePokemon, setNamePokemon] = useState()
    const [typePokemon, setTypePokemon] = useState()
    const [abilitiesPokemon, setAbilitiesPokemon] = useState()

    useEffect(async () => {
        // console.log("Teste de route", route.params.idPokemon)
        const resultado = await buscaInfoPokemon(route.params.idPokemon)

        // const name = resultado.name
        // const type = resultado.type
        // const abilities = resultado.abilities
        // console.log(name, type, abilities)

        setIdPokemon(route.params.idPokemon)
        setNamePokemon(resultado.name)
        setTypePokemon(resultado.type)
        setAbilitiesPokemon(resultado.abilities)


        //console.log("INFOPOKEMON.data", detalhes)//data.types.type.name(provavel)
    }, [])

    const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idPokemon}.gif`


    return (
        <View style={styles.container}>
            <Text>Opa</Text>
            <Image
                style={{
                    width: 200,
                    height: 200,
                }}
                source={{ uri: imagePokemon }} />

            <Text>{namePokemon}</Text>
            <Text>{typePokemon}</Text>
            <Text>{abilitiesPokemon}</Text>

            <StatusBar style="light" />
        </View>
    )
}