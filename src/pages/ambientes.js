import React  from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';

const Ambientes = () => {
  return (
   <ScrollView style={styles.body}>
        <Text style={styles.titulo}>
           Ambientes
        </Text>
        <TextInput style={styles.campoPesquisa}>
         Placeholder Text
        </TextInput>    
   </ScrollView>
  );
};

const styles = StyleSheet.create({
 titulo:{
   color:"white",
   fontSize: 34,
   fontFamily: "Barlow",
   fontStyle: "normal",
   fontWeight: "bold",
   lineHeight: 41,
   letterSpacing: 0.374,
   left: 16,
   right: 16,
   top:10,
 },
 body: {
   flex:1,
   backgroundColor: "#000000",
 },
 campoPesquisa:{
  padding: 10,
  width: 343,
  left: 16,
  top: 18,
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  borderRadius: 10,
  fontSize: 17,
  letterSpacing: -0.408,
  color: "rgba(255, 255, 255, 0.3)",
 },
});

export default Ambientes;
