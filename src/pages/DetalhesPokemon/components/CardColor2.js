import React, { useState } from 'react';
export default function backgroundType2(typePokemon) {

    switch (typePokemon[1]) {
        case 'NORMAL':
            return '#B4B3AA';
        case 'POISON':
            return '#A75E92';
        case 'PSYCHIC':
            return '#ED61A5';
        case 'GRASS':
            return '#83C765';
        case 'GROUND':
            return '#D6BF60';
        case 'ICE':
            return '#88DFFB';
        case 'FIRE':
            return '#ED514A';
        case 'ROCK':
            return '#C0B176';
        case 'DRAGON':
            return '#8775F0';
        case 'WATER':
            return '#4FA6F9';
        case 'BUG':
            return '#B7C64C';
        case 'DARK':
            return '#8B6758';
        case 'FIGHTING':
            return '#B46054';
        case 'GHOST':
            return '#7775C1';
        case 'STEEL':
            return '#BAB8C8';
        case 'FLYING':
            return '#719EF3';
        case 'ELECTRIC':
            return '#F8CF58';
        case 'FAIRY':
            return '#E7A5E6';
        default:
            return '#fff';
    }
}