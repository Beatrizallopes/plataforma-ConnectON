// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,} from 'react-native';
import Header from '../components/header'


// Página Automações
const Automacoes = () => {
  return (
    <ScrollView style={styles.body}>
    <Header titulo="Automações"></Header>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
});


export default Automacoes;
