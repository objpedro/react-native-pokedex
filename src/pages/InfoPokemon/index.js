import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

export default function InfoPokemon() {
    return (
        <View style={styles.container}>
            <Text>Testando Informações do Pokemon!</Text>
            <StatusBar style="light" />
        </View>
    )
}