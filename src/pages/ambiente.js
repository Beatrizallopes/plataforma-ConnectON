import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import listaAmbientes from "../dados";
// import listaAutomacoes from "../dados";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
var listaAutomacoes = [
  {nome:"Expediente",horario:"08:00 as 18:00",proxEvento:"00:17:34",mensagem:"Encerrará em breve",cod:"1"},
  {nome:"Hora Extra",horario:" ",proxEvento:"Sábado, 08:00 as 18:00",mensagem:"Daqui a 3 dias",cod:"2"}
]
var ambiente = listaAmbientes[0];
const Ambiente = ({navigation}) => {
  return (
   <ScrollView style={styles.body}>

     <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() =>navigation.navigate("Ambientes") }>
      <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
      </TouchableWithoutFeedback>
      <Text style={styles.ambientes}> Ambientes </Text>

      <TouchableWithoutFeedback onPress={() => alert("Editar Ambiente")}>
      <Text style={styles.editar}> Editar </Text>
      </TouchableWithoutFeedback>

     </View> 
     {/* Fim do Header */}

      <Text style={styles.titulo}>
           {ambiente.nome}
      </Text>  

      <Text style={styles.notificações}>
          Notificações 
      </Text>
      <TouchableWithoutFeedback onPress={() => alert("Notificações")}>
        <Image style={{position:"absolute",marginRight: 4,right:"8%",top:"39%"}} source={require('./../images/icons/setaDireitaTransp.png')}/>
      </TouchableWithoutFeedback>
      {/* Automações */}
      <View style={styles.automaçõesView}>

      <Text style={{color: "white",fontSize: 17,fontStyle:"normal",fontWeight: "600"}}> Automações
      </Text>
      <ScrollView style={styles.listaAutomações} horizontal={true}>
        <ListaAuto></ListaAuto>
      </ScrollView>

      </View>
      {/* Dispositivos */}
      <View>
        <Text> Dispositivos </Text>
      </View>
   </ScrollView>
  );
};
// Criando o componente Lista de Automações
class ListaAuto extends React.Component {
  render() {
    const item = listaAutomacoes.map((automacao)=>{
      return(
        <View style={styles.automação} key={automacao.cod}>
          <Text style={{color: "white",fontSize: 17,fontStyle:"normal",fontWeight: "600", left: 8, top: 8}}>{automacao.nome}</Text>
          <Text style={{color: "white",fontSize: 17,fontStyle:"normal",fontWeight: "600", left: 8, top: 8}}>{automacao.nome}</Text>
        </View>
      )
    })
    return item;
        }
        }

// Estilização dos componentes 
const styles = StyleSheet.create({
 titulo:{
   color:ambiente.cor,
   fontSize: 34,
   fontFamily: "Barlow",
   fontStyle: "normal",
   fontWeight: "bold",
   lineHeight: 41,
   letterSpacing: 0.374,
   left: 16,
   right: 16,
   top:10,
   marginBottom:18,
 },
 body: {
   flex:1,
   backgroundColor: "#000000",
 },

 icone:{
  width: 24,
  height: 24,
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 editar:{
  position: "absolute",
  right: 22,
  top: "20%",
  color: "#F18929",
  width: 44,
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 Addbutton:{
   backgroundColor:"red",
 },
 ambientes:{
  position: "absolute",
  left: 24,
  top: "55%",
  color: "#F18929",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 notificações:{
  height:48,
  padding: 12,
  width:"90%",
  left: 16,
  backgroundColor: "rgba(255, 255, 255,0.13)",
  borderRadius: 10,
  fontSize: 17,
  letterSpacing: -0.408,
  color: "#FFFFFF",
  marginTop:"10%",
 },
 automaçõesView:{
   left:16,
   marginTop:"8%",
  
 },
 listaAutomações:{
   width:"100%",
   height:149, 
  },
  automação:{
  width: 248,
  height: 126,
  backgroundColor: "rgba(255, 255, 255,0.13)",
  borderRadius: 12,
  left: 4,
  marginEnd:8,
  marginTop:23,
  }

})

export default Ambiente


