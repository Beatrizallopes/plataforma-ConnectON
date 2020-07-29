// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback,SafeAreaView,useWindowDimensions } from 'react-native';
import listaAmbientes from '../dados';
import Week from '../components/week'
import ListaAmb from '../components/listaAmbientes';

const Automação = ({route,navigation}) => { 
  const windowHeight = useWindowDimensions().height; 
  const {automação} = route.params;
  var texto = automação.horario;
  var ambientes = identificaAmbientes(automação.ambientes)
  if(automação.tipo == "Automação"){
    var horario = automação.horario.split("/");
    texto = horario[0] + " às " + horario[1]
  }
  // Gambiarra para o problema do ScrollView, para visualizar o problema basta tirar o View logo depois do ScrollView
  var qtdAmbientes = automação.ambientes.length;
  var padding = 50;
  if(qtdAmbientes>5){
    padding = (qtdAmbientes-5)*50;
  }
  return (
    
  <ScrollView  style={styles.body}  >
  <View style={{ paddingBottom: padding}}>
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
      <TouchableWithoutFeedback>
        <View style={styles.botãoAddAmb}>
          <Image style={{alignSelf:"center",left:"60%"}} source={require('../images/icons/addAmbiente.png')}></Image>
          <Text style={styles.textoBotãoAmb}>Adicionar ambientes</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{top:"10%",left:"6%"}}>
          <ListaAmb lista={ambientes}></ListaAmb>
      </View>
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
  botãoAddAmb:{
    width:"80%",
    height:"7%",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 32,
    position:"relative",
    top: "12%",
    right:"1%",
    backgroundColor: "rgba(241, 137, 41, 0.3)",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 16,
    textAlign:"center",
  },
  textoBotãoAmb:{
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#F18929",
    alignSelf:"center",
    marginLeft:10,
    left:"70%"
  }
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


