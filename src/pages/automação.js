// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback} from 'react-native';
import listaAmbientes from '../dados';
import Week from '../components/week'

// Alguns dados utilizados para "simular" o banco de dados ///////////////////////////////////////////////////////////////////////////////////


// Componente referente à página Ambiente (que utiliza os componentes criados anteriormente) /////////////////////////////////////////////////
const Automação = ({route,navigation}) => {  
  const {automação} = route.params;
  var horario = automação.horario.split("/");
  return (
   <View style={styles.body}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.automações}> Automações  </Text>
        <TouchableWithoutFeedback>
          <Text style={styles.desabilitar}> Desabilitar </Text>
        </TouchableWithoutFeedback> 
     </View>  
      <Text style={styles.titulo}>
           {automação.nome}
      </Text>  
      <View style={styles.detalhes}>
      <Text style={styles.automaçãoProxEv}>{automação.tempoRestante}</Text>
      <Text style={styles.automaçãoMensagem}>{automação.mensagem}:</Text>
  <Text style={styles.automaçãoHorário}>{horario[0]} às {horario[1]}</Text>
      <Week daysAuto={automação.dias}></Week>
      </View>
       <Text style={styles.ambientes}> Ambientes</Text>
   </View>
  );
};

// Componente de exibição de dias da semana

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

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Automação;


