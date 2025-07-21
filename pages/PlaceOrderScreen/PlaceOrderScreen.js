import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import styles from './Style';
import { placeOrder } from '../../api/orderApi';

import CustomInput from '../../components/CustomInput';

const PlaceOrder = ({ navigation }) => {
  const [foodItemId, setFoodItemId] = useState('');
  const [quantity, setQuantity] = useState('');

    const handleSubmit = async () => {
    const parsedFoodItemId = parseInt(foodItemId);
    const parsedQuantity = parseInt(quantity);

    if (!foodItemId || !quantity) {
      alert('Please enter both Food Item ID and Quantity.');
      return;
    }

    if (isNaN(parsedFoodItemId) || isNaN(parsedQuantity)) {
      alert('Food Item ID and Quantity must be valid numbers.');
      return;
    }

    try {
      const items = [
        { foodItemId: parsedFoodItemId, quantity: parsedQuantity }
      ];

      await placeOrder(items);
      //console.log("log2")
      alert('Order placed!');
    } catch (err) {

      alert(err?.response?.data?.message || 'Something went wrong. Please try again.');
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

      <View style={styles.buttonContainer}>
        <Button title="View My Orders"
        onPress={() => navigation.navigate('View')} />
      </View>
    </View>
  );
};

export default PlaceOrder;
