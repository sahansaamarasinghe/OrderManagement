import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlaceOrder from './pages/PlaceOrderScreen/PlaceOrderScreen';
import ViewOrder from './pages/ViewOrderScreen/ViewOrdersScreen';

const Stack = createNativeStackNavigator();

export default function PageStack() {
  return (
    <Stack.Navigator initialRouteName="Order">
      <Stack.Screen name="Order" component={PlaceOrder} />
      <Stack.Screen name="View" component={ViewOrder} />
    </Stack.Navigator>
  );
}
