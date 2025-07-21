import React from 'react';
import { View, Text ,Button} from 'react-native';
import styles from './Style';

function ViewOrder({navigation}) {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>View Order</Text>
      <Button
        title="Go To Place Orders"
        onPress={() => navigation.navigate('Order')}
      />
    </View>
  );
}

export default ViewOrder
