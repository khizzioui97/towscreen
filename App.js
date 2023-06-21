import { AppRegistry, Platform } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './app/pages/WelcomePage';
import HomePage from './app/pages/HomePage';

// Import the necessary web-specific components
import { AppLoading } from 'expo';
import { createBrowserApp } from '@react-navigation/web';

// Check if the platform is web
const isWeb = Platform.OS === 'web';

// Create a browser app for web
const BrowserApp = createBrowserApp(App);

// Register and run the application
AppRegistry.registerComponent(appName, () => (isWeb ? BrowserApp : App));
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

// ...

// Render the app component based on the platform
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
