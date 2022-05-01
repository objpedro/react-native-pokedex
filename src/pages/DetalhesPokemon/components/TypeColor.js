export default function TypeColor(typePokemon) {
    let cor1 = ''
    let cor2 = ''

    if (typePokemon[0] == 'NORMAL') {
        cor1 = '#B4B3AA'
    } else if (typePokemon[0] == 'POISON') {
        cor1 = '#A75E92'
    } else if (typePokemon[0] == 'PSYCHIC') {
        cor1 = '#ED61A5'
    } else if (typePokemon[0] == 'GRASS') {
        cor1 = '#83C765'
    } else if (typePokemon[0] == 'GROUND') {
        cor1 = '#D6BF60'
    } else if (typePokemon[0] == 'ICE') {
        cor1 = '#88DFFB'
    } else if (typePokemon[0] == 'FIRE') {
        cor1 = '#ED514A'
    } else if (typePokemon[0] == 'ROCK') {
        cor1 = '#C0B176'
    } else if (typePokemon[0] == 'DRAGON') {
        cor1 = '#8775F0'
    } else if (typePokemon[0] == 'WATER') {
        cor1 = '#4FA6F9'
    } else if (typePokemon[0] == 'BUG') {
        cor1 = '#B7C64C'
    } else if (typePokemon[0] == 'DARK') {
        cor1 = '#8B6758'
    } else if (typePokemon[0] == 'FIGHTING') {
        cor1 = '#B46054'
    } else if (typePokemon[0] == 'GHOST') {
        cor1 = '#7775C1'
    } else if (typePokemon[0] == 'STEEL') {
        cor1 = '#BAB8C8'
    } else if (typePokemon[0] == 'FLYING') {
        cor1 = '#719EF3'
    } else if (typePokemon[0] == 'ELETRIC') {
        cor1 = '#F8CF58'
    } else if (typePokemon[0] == 'FAIRY') {
        cor1 = '#E7A5E6'
    }

    if (typePokemon[1] == 'NORMAL') {
        cor2 = '#B4B3AA'
    } else if (typePokemon[1] == 'POISON') {
        cor2 = '#A75E92'
    } else if (typePokemon[1] == 'PSYCHIC') {
        cor2 = '#ED61A5'
    } else if (typePokemon[1] == 'GRASS') {
        cor2 = '#83C765'
    } else if (typePokemon[1] == 'GROUND') {
        cor2 = '#D6BF61'
    } else if (typePokemon[1] == 'ICE') {
        cor2 = '#88DFFB'
    } else if (typePokemon[1] == 'FIRE') {
        cor2 = '#ED514A'
    } else if (typePokemon[1] == 'ROCK') {
        cor2 = '#C1B176'
    } else if (typePokemon[1] == 'DRAGON') {
        cor2 = '#8775F1'
    } else if (typePokemon[1] == 'WATER') {
        cor2 = '#4FA6F9'
    } else if (typePokemon[1] == 'BUG') {
        cor2 = '#B7C64C'
    } else if (typePokemon[1] == 'DARK') {
        cor2 = '#8B6758'
    } else if (typePokemon[1] == 'FIGHTING') {
        cor2 = '#B46154'
    } else if (typePokemon[1] == 'GHOST') {
        cor2 = '#7775C1'
    } else if (typePokemon[1] == 'STEEL') {
        cor2 = '#BAB8C8'
    } else if (typePokemon[1] == 'FLYING') {
        cor2 = '#719EF3'
    } else if (typePokemon[1] == 'ELETRIC') {
        cor2 = '#F8CF58'
    } else if (typePokemon[1] == 'FAIRY') {
        cor2 = '#E7A5E6'
    }

    return { cor1, cor2 }
}