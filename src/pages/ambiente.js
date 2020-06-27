import React  from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

function Ambiente() {
  return (
    <View style={styles.teste}>
      <Text>Ambiente :) </Text>
    </View>
  );
};


const styles = StyleSheet.create({
 teste:{
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center',
 }
});

export default Ambiente;
