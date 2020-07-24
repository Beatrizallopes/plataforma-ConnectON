// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import grupos from '../funcoes/separarGruposAlfa';

const criarGatilho2 = ({route,navigation}) => {
  const {diasSemana} = route.params;
  const {horario}= route.params;
  const{ambientesSel} = route.params;
return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
                <Image  style={styles.iconeVoltar} source={require('./../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
                 <Text style={styles.voltar}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => alert(diasSemana)}>
                  <Text style={styles.seguinte}> Seguinte </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.titulo}>
                Novo Gatilho
              </Text>
              <Text style={styles.quando}>Selecione os ambientes {ambientesSel.length} </Text>
              <Text style={styles.explicação}>Selecione os ambientes que sua automação irá controlar.</Text>
              {/* <TouchableWithoutFeedback onPress={() => {setmodalSelecionarAmb(true);}}> */}
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Selecionar Ambientes",{horario:horario,diasSemana:diasSemana,ambientesSel:ambientesSel})}>
                <View style={[styles.botaoCriação,{backgroundColor:"rgba(214, 96, 117, 0.3)",}]}>
                  <Text style={[styles.textoBotao,{color:"#D66075"}]}>  <Image source={require('./../images/icons/selecionarAmbientes.png')}></Image>  Selecionar ambientes</Text>
                </View>
              </TouchableWithoutFeedback>
              <ListaAmbSel lista={ambientesSel}></ListaAmbSel>
          </View>
        </View> 
      </Modal> 
    </ScrollView>
  )
}
const ListaAmbSel = ({lista}) =>{
  if(lista.length>0){
    var ambienteSelecionado = lista.map((ambiente) => { 
      var nomeAmb = grupos[ambiente.grupo][ambiente.ambiente].nome;
      return(
        <View>
          <Text style={{color:"white",fontSize:17}}>{nomeAmb}</Text>
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

// Componente grupos de ambientes
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
  titulo:{
    position:"absolute",
    color:"white",
    fontSize: 17,
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.374,
    top:"5%",
    marginHorizontal:15,
  },
  seguinte:{
    position:"absolute",
    top:"5%",
    color: "#D66075",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  voltar:{
    position:"absolute",
    top:"5%",
    color: "#D66075",
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
    position:"relative",
    width: 343,
    height:56,
    display:"flex",
    flexDirection:"column",
    paddingVertical:8,
    paddingHorizontal:32,
    top:"32%",
    backgroundColor:"rgba(86, 138, 234, 0.3)",
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
      color:"#568AEA", 
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
     // Estilização da Lista:
 linha:{
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
  borderRadius: 12,
  width:"90%",
  alignSelf:"center",
  marginTop:52,
 },
text: {
  color: "#FFFFFF",
  fontSize: 17,
  position: "absolute",
  height: 24,
  left: 8,
  top: 12,
  marginLeft:48,// 56 - 8 = 48
  lineHeight: 22,
  letterSpacing: -0.408, 
},
letra:{
  color:"#FFFFFF",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
  position: "absolute",
  width: 10,
  height: 24,
  left: "5%",
  marginTop:18,
},
listaAmb:{
  height: 48,
  paddingLeft:15,
  width:343,
}

  
})


// Estilos Dinâmicos
  // Identificando a posição do ambiente na lista:
  const posicaoAmbiente = function(id,qtdTotal){
    var posicao;
    if(id <qtdTotal){
      if(id==="0"){
        posicao = "inicial";
      } else{
        posicao = "meio";
      }
    } else {
      if(qtdTotal===0){
        posicao = "unico"
      } else{
        posicao = "final"
      }
    }
    return posicao
  }

var indicador = function(myColor, tipo) {
  if(tipo=='inicial'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderTopStartRadius:12,
    }
  };
  if(tipo=='meio'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
    }
  };
  if(tipo=='final'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
    }
  }
  if(tipo=='unico'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      borderTopStartRadius:12,
    }
  }  
}

  export default criarGatilho2;