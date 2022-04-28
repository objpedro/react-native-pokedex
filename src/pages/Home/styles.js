import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5DE5ED',
        alignItems: "center",
    },
    pokedexContainer: {
        alignItems: "center",
        justifyContent: 'center'
    },
    pokemonImage: {
        resizeMode: "cover",
        width: 90,
        height: 90
    },
})

export default styles;