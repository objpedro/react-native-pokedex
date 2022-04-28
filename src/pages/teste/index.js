// import React, { useEffect, useState } from 'react';
// import {
//     SafeAreaView,
//     View,
//     TouchableOpacity,
//     Text,
//     FlatList,
//     Image,
//     StatusBar,
// } from 'react-native';
// import styles from './styles';

// export default function Teste() {

//     const [allPokemons, setAllPokemons] = useState([]);
//     //console.log("Todos os pokemons", allPokemons)
//     const [typesPokemons, setTypesPokemons] = useState([]);
//     //console.log(allPokemons)

//     useEffect(() => {//MOSTRAR POKEMONS
//         fetch('https://pokeapi.co/api/v2/pokemon/?limit=2', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//             },
//         })
//             .then(response => response.json())
//             .then(data => {
//                 setAllPokemons(data.results)
//             })
//             .then(() => {

//                 const urlPokemons = allPokemons.map(pokemon => {
//                     return pokemon.url
//                 })
//                 urlPokemons.forEach(element => {
//                     fetch(element, {
//                         method: 'GET',
//                         headers: {
//                             'Accept': 'application/json',
//                         },
//                     })
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log("Chamando data", data.types)
//                         })
//                 });

//             })
//     }, [])

//     return (
//         <SafeAreaView style={styles.container} >
//             <FlatList ////MOSTRAR POKEMONS
//                 data={allPokemons}
//                 keyExtractor={(pokemon) => pokemon.name}
//                 contentContainerStyle={{ flexGrow: 1 }}
//                 renderItem={PokemonShow} />

//             <StatusBar style="light" />
//         </SafeAreaView>
//     )
// }

// function PokemonShow(item) {
//     const { name, url } = item.item
//     //console.log("Item",item.item)
//     const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
//     const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
//     //const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonNumber}.gif`

//     return (
//         <View>
//             <TouchableOpacity style={styles.pokedexContainer}>
//                 <View style={styles.pokemonImageView}>
//                     <Image style={styles.pokemonImage} source={{ uri: imageUrl }} />
//                 </View>
//                 <Image style={styles.pokeball} source={{ uri: 'https://www.pngmart.com/files/2/Pokeball-Transparent-PNG.png' }} />
//                 <Text style={styles.pokemonName}>{name}</Text>
//                 <Text style={styles.pokemonId}>#{pokemonNumber}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// function TypeShow(item) {

//     const { name, url } = item.item
//     const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

// }