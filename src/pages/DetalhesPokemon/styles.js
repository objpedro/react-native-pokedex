import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center'
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
    typeContainer: {
        flexDirection: 'row',
    },
    type: {
        marginRight: 5,
        fontSize: 20
    },
    abilitiesContainer: {
        flexDirection: 'row',
    },
    abilities: {
        marginRight: 5,
        fontSize: 20
    },
    pokemonDescription:{
        fontSize: 20,
    },
    imageEvolutionContainer: {
        flexDirection: 'row',
    },
    imageEvolution: {
        resizeMode: 'cover',
        width: 110,
        height: 110,
    },
    testeAbsolute:{
        position: 'absolute'
    }
})

export default styles;