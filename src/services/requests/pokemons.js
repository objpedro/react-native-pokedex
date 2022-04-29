import api from "../api";

export async function buscaPokemon() {
    try {
        const resultado = await api.get(`/pokemon/?limit=20`);//requisicao
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
export async function buscaInfoPokemon() {
    try {
        const infoResultado = await api.get(`/pokemon/1`);//requisicao
        // const infoMap = resultado.data.types.map(infos => {
        //     return infos
        // })
        // return infoMap;
        return infoResultado;
    }
    catch (error) {
        console.log(error)
        return {}
    }
}