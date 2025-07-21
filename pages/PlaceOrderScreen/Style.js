import { StyleSheet } from 'react-native';
import { Button } from 'react-native/types_generated/index';

const styles = StyleSheet.create({
  container: { padding: 20,
     paddingBottom: 80
   },
  heading: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    position: 'absolute',

  bottom: 20,
  left: 20,
  right: 20,

},

});

export default styles;