import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './Style';
import { placeOrder } from '../../api/orderApi';

import CustomInput from '../../components/CustomInput';

const PlaceOrder = ({ navigation }) => {
  const [foodItemId, setFoodItemId] = useState('');
  const [quantity, setQuantity] = useState(''); 

  const handleSubmit = async () => {
    try {
      const items = [
        { foodItemId: parseInt(foodItemId), quantity: parseInt(quantity) },
      ];
      console.log("items",items)
      await placeOrder(items);
      alert('Order placed!');
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Place an Order</Text>
      <Text>Food Item ID:</Text>
      <CustomInput
        style={styles.input}
        keyboardType="numeric"
        value={foodItemId}
        onChangeText={setFoodItemId}
      />

      <Text>Quantity:</Text>
      <CustomInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Button title="Submit Order" onPress={handleSubmit} />

      <Button
        title="View My Orders"
        onPress={() => navigation.navigate('View')}
      />
    </View>
  );
};

export default PlaceOrder;
