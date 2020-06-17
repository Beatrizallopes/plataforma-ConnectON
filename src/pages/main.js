import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ambientes from "./ambientes";
import Automacoes from "./automacoes";
import {
  StyleSheet,
} from 'react-native';

const Tab = createBottomTabNavigator();

const App = ({ navigation }) => {
  return (
  <NavigationContainer>
   <Tab.Navigator style={styles.menuInferior}>
        <Tab.Screen name="Ambientes" component={Ambientes} />
        <Tab.Screen name="Automações" component={Automacoes} />
        <Tab.Screen name="Consumo" component={Automacoes} />
        <Tab.Screen name="Configurações" component={Automacoes} />
      </Tab.Navigator>
 </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 menuInferior:{
  backgroundColor:"#000000",
  fontSize: 11,
 }
});

export default App;
