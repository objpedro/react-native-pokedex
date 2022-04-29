import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfoPokemon from './src/pages/InfoPokemon';
import PokemonLista from './src/pages/PokeDex/components/pokemonLista';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='PokemonLista' >
        <Stack.Screen
          name={'PokemonLista'}
          component={PokemonLista}
          options={{
            title: 'PokemonLista',
            headerShown: true//ocultar o header
          }} />

        <Stack.Screen
          name={'InfoPokemon'}
          component={InfoPokemon}
          options={{
            title: 'InfoPokemon'
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
