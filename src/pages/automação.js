// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback} from 'react-native';
import listaAmbientes from "../dados";
import grupos from "../funcoes/separarGruposAlfa";

// Alguns dados utilizados para "simular" o banco de dados ///////////////////////////////////////////////////////////////////////////////////


// Componente referente à página Ambiente (que utiliza os componentes criados anteriormente) /////////////////////////////////////////////////
const Automação = ({route,navigation}) => {  
  const {automação} = route.params;
  return (
   <ScrollView style={styles.body}>
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
      </View>
      
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
   top:"20%",
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
  top:"20%",
  left: "6%",
  display: "flex",
  flexDirection: "column",
  padding: 0,
  width: 343,
  height: 154,
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
  borderRadius:  14,
 }
})

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Automação;


