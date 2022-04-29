import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
} from 'react-native';
import styles from './styles';
import { buscaInfoPokemon } from '../../services/requests/pokemons';

export default function InfoPokemon({ route }) {

    const [detalhes, setDetalhes] = useState([])

    useEffect(() => {
        informacoesPokemon()
        console.log("INFOPOKEMON.data", detalhes)//data.types.type.name(provavel)
    }, [])

    async function informacoesPokemon() {//chamar pokemons
        const resultado = await buscaInfoPokemon()
        setDetalhes(resultado);
        // console.log("Resultado é:", resultado.data)
    }

    console.log("Detalhes:", detalhes.data)

    return (
        <View style={styles.container}>
            <Text>Opa</Text>
            <StatusBar style="light" />
        </View>
    )
}