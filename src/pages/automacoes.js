// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View} from 'react-native';
import Header from '../components/header'
import AutomacaoCard from '../components/cardAutomação'

// Simulando os dados
var listaAutomacoes = [
  {tipo: "Automação",nome:"Expediente",horario:"08:00 as 18:00",proxEvento:"00:17:34",mensagem:"Encerrará em breve",cod:"1"},
  {tipo: "Gatilho",nome:"Hora Extra",horario:" ",proxEvento:"Sábado, 08:00 as 18:00",mensagem:"Daqui a 3 dias",cod:"2"},
  {tipo: "Automação",nome:"Intervalo",horario:"12:00 as 14:00 ",proxEvento:"Segunda, 12:00 as 14:00",mensagem:"Daqui a 5 dias",cod:"3"},
]
// Componente lista de Automações
class ListaAuto extends React.Component {
  render() {
    const itemD = listaAutomacoes.map((automacao)=>{
      return(
        <View key={automacao.cod}>
        <AutomacaoCard tipo={automacao.tipo} nome={automacao.nome} horario={automacao.horario} proxEvento={automacao.proxEvento} mensagem={automacao.mensagem}></AutomacaoCard>
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
