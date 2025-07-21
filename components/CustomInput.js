// const TextInput = props => {
//   return (

    
//   );
// };
import React from 'react';
import styles from '../theme/appStyles';

import { View, Text, TextInput } from 'react-native';

export default function CustomInput({ label, value, onChangeText, keyboardType = 'default', placeholder }) {
  return (
    <View style={{ marginBottom: 15 }}>
      {label && <Text style={{ marginBottom: 5 }}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  );
}
