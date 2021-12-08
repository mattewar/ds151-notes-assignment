import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.js'
import CreateScreen from './src/screens/CreateScreen.js';
import UpdateScreen from './src/screens/UpdateScreen.js';
import { NotesProvider } from './src/context/NotesContext.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'Notas' }} component={HomeScreen} />
          <Stack.Screen name="Update" options={{ title: 'Atualizar' }} component={UpdateScreen} />
          <Stack.Screen name="Create" options={{ title: 'Criar' }} component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}

export default App;