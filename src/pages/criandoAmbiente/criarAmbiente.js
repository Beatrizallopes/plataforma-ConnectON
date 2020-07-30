// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';

const criarAmbiente = ({navigation}) => {
  const ambiente = {nome:"",dispositivos:[],cor:""}
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
          <View style={styles.centeredView}>
            <View style={styles.modalSelecionarAmb}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Ambientes")}>
                <Text style={styles.voltar}> Cancelar  </Text>               
                 </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Ambiente 2",{ambiente:ambiente})}>
                    <Text style={styles.seguinte}> Próximo </Text>
                </TouchableWithoutFeedback> 
                <Text style={styles.quando}>Novo Ambiente </Text>
                <Text style={[showText(ambiente.dispositivos),styles.explicação]}>Adicione dispositivos para controlar ou executar tarefas automatizadas.</Text>
                {/* <View style={{position:"absolute",top:"35%"}}>
                  <ListaAmbSel lista={automação.ambientesSel}></ListaAmbSel>
                </View> */}
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Selecionar Dispositivos",{ambiente:ambiente})}>
                  <View style={[posicaoBotao(ambiente.dispositivos),styles.botaoCriação]}>
                    <Text style={[styles.textoBotao,{color:"#F18929"}]}>  <Image source={require('./../../images/icons/selecionarAmbientesAuto.png')}></Image>  Adicionar dispositivos</Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
          </View> 
        </Modal> 
      </ScrollView>
    )
  }
// Componente correspondente à lista de ambientes
const ListaAmbSel = ({lista}) =>{
  if(lista.length>0){
    var x = 0;
    var ambienteSelecionado = lista.map((ambiente) => { 
      var nomeAmb = grupos[ambiente.grupo][ambiente.ambiente].nome;
      var cor =  grupos[ambiente.grupo][ambiente.ambiente].cor;
      var posicao = posicaoAmbiente(x,lista.length-1);
      x = x +1;
      return(
        <View key={ambiente.id} style={[indicador(cor,posicao),styles.listaAmb]}>
          <Text style={styles.text}>{nomeAmb}</Text>
        </View>
      )
    })
  } else{
    var ambienteSelecionado = (
      <View>       
      </View>
    )
  }
  return ambienteSelecionado;
}
 
// Estilização 
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modalSelecionarAmb: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    alignItems: "center", 
  },
  seguinte:{
    position:"absolute",
    top:"5%",
    color: "#F18929",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  voltar:{
    position:"absolute",
    top:"5%",
    color: "#F18929",
    fontWeight: "600",
    fontSize: 17,
    left:"10%",
    lineHeight: 22,
  },
  iconeVoltar:{
    position: "absolute", 
    top: "5%",
    left:"5%"
  },
  quando:{
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.352,
    color: "#FFFFFF",
    position:"absolute",
    top:"15%",
    left:"10%"
  },
  explicação:{
    position:"absolute",
    width: 343,
    top:"22%",
    left:"10%",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.55)",
  },
  botaoCriação: {
    width: 343,
    height:56,
    paddingVertical:8,
    paddingHorizontal:32,
    backgroundColor:"rgba(241, 137, 41, 0.3)",
    borderRadius:12,
    alignItems:"center",
    justifyContent:"center"
    },
    textoBotao: {
      display:"flex",
      flexDirection:"row",
      fontSize:17,
      fontWeight:"600",
      lineHeight:22,
      letterSpacing: -0.408,
      color:"#F18929",       
    },
    ambientes:{
      position:"absolute",
      top:"5%",
      right:"8%",
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.364,
      color: "#FFFFFF",
    },
    
})
// Estilos Dinâmicos

var showText = function(lista){
  if(lista.length>0){
    return {
      opacity:0,
      height:0,
    }}
    else{
      return{
        opacity:100,
      }      
    }
}
 var posicaoBotao = function(lista){
  if(lista.length>0){
    return {
      position:"relative",
      top:"22%",
    }}
    else{
      return{
        position:"relative",
        top:"32%",
      }      
    }
 }

  export default criarAmbiente;