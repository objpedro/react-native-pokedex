import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
        borderBottomEndRadius: 70
    },
    imagePokemon: {
        resizeMode: 'cover',
        width: 90,
        height: 90
    },
    numberPokemon: {
        position: 'absolute',
        fontSize: 30,
        marginLeft: '40%',
        marginTop: 10,
    },
    namePokemon: {
        position: 'absolute',
        fontSize: 30,
        marginLeft: '50%',
        marginTop: 10,
    }
})

export default styles;