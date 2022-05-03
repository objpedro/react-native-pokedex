import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export default function Footerlist({ load }) {
    if (!load) return null;
    return (
        <View>
            <ActivityIndicator size={40} color='#fff' />
        </View>
    )
}