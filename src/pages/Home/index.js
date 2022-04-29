import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PokemonCard from './components/PokemonCard';
import styles from './styles';

export default function Home() {
    return (
        <View style={styles.container} >
            <PokemonCard />
        </View>
    )
}