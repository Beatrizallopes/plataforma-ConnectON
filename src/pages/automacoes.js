// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View} from 'react-native';
import Header from '../components/header'
import AutomacaoCard from '../components/cardAutomação'
import listaAutomacoesOrd from '../funcoes/listarAutomações';
// Simulando os dados

// Componente lista de Automações
class ListaAuto extends React.Component {
  render() {
    const itemD = listaAutomacoesOrd.map((automacao)=>{
      return(
        <View key={automacao.cod}>
        <AutomacaoCard tipo={automacao.tipo} nome={automacao.nome} proxEvento={automacao.tempoRestante} mensagem={automacao.mensagem} ambientes={automacao.ambientes}></AutomacaoCard>
        </View>
      )
    })
    return itemD;
        }
        }
// Página Automações
const Automacoes = () => {
  return (
    <ScrollView style={styles.body}>
    <Header titulo="Automações"></Header>
    <ListaAuto></ListaAuto>
    <View style={{height:20}}></View>  
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
