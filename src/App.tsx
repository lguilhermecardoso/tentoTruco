import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Game from './screens/Game';
import { ThemeProvider } from 'styled-components/native';
import theme from './utils/theme';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: (props) => null
            }}
          />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
