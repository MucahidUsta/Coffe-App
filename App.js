import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './app/config/colors';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoffeeDetailsScreen from './app/screens/CoffeeDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreenWithStyle} />
        <Stack.Screen name="CoffeeDetailsScreen" component={CoffeeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreenWithStyle = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
  },
});