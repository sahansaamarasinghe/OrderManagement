//import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlaceOrder from './pages/PlaceOrderScreen/PlaceOrderScreen';
import ViewOrder from './pages/ViewOrderScreen/ViewOrdersScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Order"
          component={PlaceOrder}         
        />
        <Stack.Screen  
        name="View" 
        component={ViewOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
