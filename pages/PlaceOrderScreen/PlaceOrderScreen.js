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
      //console.log("log2")
      alert('Order placed!');
    } catch (err) {
      
      //console.log("log1")
      alert(err.response?.data?.message );
      //alert(err.response?.data?.message || 'Something went wrong');
    }
  };




//   const handleSubmit = async () => {
//   const parsedFoodItemId = parseInt(foodItemId);
//   const parsedQuantity = parseInt(quantity);

//   // Empty field check
//   if (!foodItemId || !quantity) {
//     alert('Please enter both Food Item ID and Quantity.');
//     return;
//   }

//   if (isNaN(parsedFoodItemId) || isNaN(parsedQuantity)) {
//     alert('Food Item ID and Quantity must be valid numbers.');
//     return;
//   }

//   try {
//     const items = [
//       { foodItemId: parsedFoodItemId, quantity: parsedQuantity }
//     ];

//     await placeOrder(items); 
//     console.log("log2")
//     alert('Order placed!');
//   } catch (err) {

//     alert(err?.response?.data?.message || 'Something went wrong. Please try again.');
//   }
// };


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
