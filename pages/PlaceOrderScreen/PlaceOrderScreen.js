import React from 'react';
import { View, Text, Button } from 'react-native';

function PlaceOrder({navigation}) {
  return (
    <View>
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Place Order</Text>
      <Button
        title="Go to View Orders"
        onPress={() => navigation.navigate('View')}
      />
    </View>
  );
}


export default PlaceOrder