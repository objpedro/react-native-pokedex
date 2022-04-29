import api from "../api";

export async function buscaPokemon() {
    try {
        const resultado = await api.get(`/pokemon/?limit=10`);//requisicao
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
//PEGA OS TIPOS
export async function buscaInfoPokemon(idPokemon) {
    try {
        const infoResultado = await api.get(`/pokemon/${idPokemon}`);//requisicao

        //const stats = infoResultado.data.stats
        const name = infoResultado.data.name
        const type = infoResultado.data.types.map(typeName => {
            return typeName.type.name
        })
        const abilities = infoResultado.data.abilities.map(abilityName => {
            return abilityName.ability.name
        })
        // console.log(`Nome: ${name}. Tipo: ${type}. Habilidades: ${abilities}.`)
        return {name, type, abilities}

    }
    catch (error) {
        console.log(error)
        return {}
    }
}