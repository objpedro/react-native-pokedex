import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backgroundLinear: {
        position: 'absolute',
        width: '100%',
        height: "100%"
    },
    pkmConteiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgPokemon: {
        resizeMode: 'cover',
        width: 200,
        height: 200,
    },
    pokeball: {
        resizeMode: "cover",
        margin: 5,
        width: 25,
        height: 20,
    },
    namePokemon: {
        fontSize: 30,
        marginRight: 10,
    },
    characteristicsContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    characteristics: {
        fontSize: 15
    },
    typeContainer: {
        flexDirection: 'row',
    },
    type: {
        fontSize: 15
    },
    abilitiesContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
    },
    abilities: {
        marginRight: 5,
        fontSize: 15
    },
    pokemonDescription: {
        fontSize: 20,
        textAlign: 'left'
    },
    imageEvolutionContainer: {
        flexDirection: 'row',
    },
    imageEvolution: {
        resizeMode: 'cover',
        width: 110,
        height: 110,
    },
    arrowEvolutionContainer: {
        alignItems: "center",
        flexDirection: 'row'
    },
    arrowEvolution: {
        resizeMode: 'center',
        width: 30,
        height: 30,
    }
})

export default styles;