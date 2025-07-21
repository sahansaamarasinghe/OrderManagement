
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getGuestOrders } from '../../api/orderApi';
import styles from './Style';

function ViewOrder({ navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getGuestOrders();
        //console.log(res)
        setOrders(res.data);
        console.log(res.data)
      } catch (err) {
        console.error("Error fetching guest orders", err);
      }
    };

    fetchOrders();
  }, []);

 const renderOrder = ({ item }) => (
  <View style={styles.card}>
    <Text>Order ID: {item?.orderId ?? 'N/A'}</Text>
    <Text>Total: ${item?.totalAmount?.toFixed(2) ?? '0.00'}</Text>
    <Text>Date: {item?.orderDate ? new Date(item.orderDate).toLocaleString() : 'Unknown'}</Text>
    <Text>Items:</Text>
    {Array.isArray(item.items) && item.items.length > 0 ? (
      item.items.map((entry, idx) => (
        <Text key={idx}>- {entry}</Text>
      ))
    ) : (
      <Text>- No items found</Text>
    )}
  </View>
);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Guest Orders</Text>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          keyExtractor={(item, index) => item?.orderId?.toString() ?? `key-${index}`}

          renderItem={renderOrder}
        />
      ) : (
        <Text>No orders found.</Text>
      )}
      <Button title="Go to Place Orders" onPress={() => navigation.navigate('Order')} />
    </View>
  );
}

export default ViewOrder;
