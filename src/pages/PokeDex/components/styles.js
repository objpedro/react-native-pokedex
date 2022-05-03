import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        paddingHorizontal: '5%'
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center"
    },
    btn: {
        borderWidth: 2,
        margin: 5,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomRightRadius: 300
    },
    imagePokemon: {
        marginLeft: 10,
        resizeMode: 'cover',
        width: 100,
        height: 100,
    },
    identificationContainer: {
        marginLeft: '30%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberPokemon: {
        fontSize: 20,
    },
    namePokemon: {
        fontSize: 20,
    }
})

export default styles;