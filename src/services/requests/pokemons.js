import api from "../api";

export async function buscaPokemon() {
    try {
        const resultado = await api.get(`/pokemon/?offset=0&limit=10`);//requisicao
        const resultadoMap = resultado.data.results.map(allPokemons => {//tirar do array
            return allPokemons
        })
        return resultadoMap;
    }
    catch (error) {
        console.log(error)
        return {}
    }
}

export async function buscaInfoPokemon(idPokemon) {
    try {
        const pokemonDetails = await api.get(`/pokemon/${idPokemon}`);
        const species = await api.get(`/pokemon-species/${idPokemon}`);
        const evolutionApi = await api.get(species.data.evolution_chain.url);

        //DETALHES DO POKEMON
        const name = pokemonDetails.data.name.toUpperCase()
        const height = pokemonDetails.data.height
        const weight = pokemonDetails.data.weight
        const type = pokemonDetails.data.types.map(typeName => {
            return typeName.type.name.toUpperCase()
        })
        const abilities = pokemonDetails.data.abilities.map(abilityName => {
            return abilityName.ability.name.toUpperCase()
        })
        const description = species.data.flavor_text_entries.map(description => {
            if (description.language.name == 'en' && description.version.name == 'x') {
                return description.flavor_text
            }
        })
        // console.log("Descriçõ: ", description)

        //TRATATIVA EVOLUÇÕES
        const evolutions = evolutionApi.data.chain
        const baby = evolutions.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '')
        const firstEvolution = evolutions.evolves_to.map(first => {
            return first.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '')
        })
        const secondEvolution = evolutions.evolves_to.map(second => {
            const segundaEvoluçãoMap = second.evolves_to.map(url => {
                return url.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '')
            })
            return segundaEvoluçãoMap[0]
        })

        //Enviando foto
        const babyFormImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baby}.png`
        const firstFormImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${firstEvolution[0]}.png`
        const secondFormImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${secondEvolution[0]}.png`
        let evolutionsFormImage = [babyFormImage]

        //VERIFICA EVOLUÇÕES
        if (secondEvolution[0] !== undefined) {
            evolutionsFormImage.push(firstFormImage, secondFormImage)
        } else if (firstEvolution[0] !== undefined) {
            evolutionsFormImage.push(firstFormImage)
        }

        console.log("API OK!")
        return {
            name,
            height,
            weight,
            type,
            abilities,
            description,
            evolutionsFormImage
        }
    }
    catch (error) {
        console.log(error)
        return {}
    }
}