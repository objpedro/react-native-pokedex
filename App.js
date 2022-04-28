import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import InfoPokemon from './src/pages/InfoPokemon';
import Teste from './src/pages/teste';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // <Teste />

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >

        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            title: 'Pokédex',
            headerShown: true//ocultar o header
          }} />

        <Stack.Screen
          name={'InfoPokemon'}
          component={InfoPokemon}
          options={{
            title: 'Sobre'
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
