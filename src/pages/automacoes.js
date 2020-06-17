import React  from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

function Automacoes() {
  return (
    <View style={styles.teste}>
      <Text>Automações</Text>
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

export default Automacoes;
