// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback,SafeAreaView} from 'react-native';
import listaAmbientes from '../dados';
import Week from '../components/week'
import ListaAmb from '../components/listaAmbientes';

const Automação = ({route,navigation}) => {  
  const {automação} = route.params;
  var texto = automação.horario;
  var ambientes = identificaAmbientes(automação.ambientes)
  if(automação.tipo == "Automação"){
    var horario = automação.horario.split("/");
    texto = horario[0] + " às " + horario[1]
  }
  return (
    
  // <ScrollView contentContainerStyle={{flexGrow:1}} style={styles.body} horizontal={false}>
  <ScrollView  style={{flex:1,backgroundColor: "#000000"}} >
  <View style={{ paddingBottom: 100 }}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.automações}> Automações  </Text>
        <TouchableWithoutFeedback>
          <Text style={styles.desabilitar}> Desabilitar </Text>
        </TouchableWithoutFeedback> 
     </View>  
      <Text style={styles.titulo}>{automação.nome}</Text>  
      <View style={styles.detalhes}>
          <Text style={styles.automaçãoProxEv}>{automação.tempoRestante}</Text>
          <Text style={styles.automaçãoMensagem}>{automação.mensagem}:</Text>
          <Text style={styles.automaçãoHorário}>{texto}</Text>
          <Week daysAuto={automação.dias}></Week>
      </View>
      <Text style={styles.ambientes}> Ambientes</Text>
      <View style={{top:"10%",left:"6%"}}>
          <ListaAmb lista={ambientes}></ListaAmb>
      </View>
   </View>
   {/* <View style={{height:20}}></View> */}
   </ScrollView>

  );
};

// Estilização dos componentes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  titulo:{
   left: "6%",
   top:"2%",
   color:"white",
   fontSize: 34,
   fontFamily: "Barlow",
   fontWeight: "bold",
   lineHeight: 41,
   letterSpacing: 0.374,
   marginBottom:18,
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 desabilitar:{
  position: "absolute",
  right: 24,
  top: "55%",
  color: "#FE453B",
  fontWeight: "600",
  fontSize: 17,
 },
 automações:{
  left: 24,
  top: "55%",
  color: "#F18929",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 detalhes:{
  position:"relative",
  top:"4%",
  left: "6%",
  width: 343,
  height: 154,
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
  borderRadius:  14,
 },
 ambientes:{
   top:"8%",
   left: "6%",
   color:"white",
   fontSize:17,
   fontWeight:"600",
   lineHeight:22,
   
 },
 automaçãoProxEv:{
  position:"relative",
  // width:128,
  fontFamily: "Barlow",
  color: "#FFFFFF",
  fontSize: 11,
  fontWeight:"normal",
  left: "4%", 
  top: "25%",
  fontSize:34,
  lineHeight:41,
  letterSpacing:0.374,
  alignSelf:"flex-start",
  },
  automaçãoMensagem:{
    position:"absolute",
    height:22,
    left:"4%",
    top:"10%",
    color: "rgba(255, 255, 255, 0.44)",
    fontSize: 17,
    fontStyle:"normal",
    fontWeight: "normal", 
    lineHeight: 22,
    alignSelf:"flex-start"
  },
  automaçãoHorário:{
    position:"absolute",
    height:20,
    left:"4%",
    top:"55%",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#FFFFFF",
  },
})
// Função para pegar info sobre os ambientes
const identificaAmbientes = function(lista){
var ambientes = [];
for(var i=0;i<listaAmbientes.length;i++){
  for(var j=0;j<lista.length;j++){
    if(listaAmbientes[i].nome == lista[j]){
      ambientes.push(listaAmbientes[i])
    } 
  }
}
return ambientes;
}
// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Automação;


