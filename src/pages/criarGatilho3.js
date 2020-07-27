// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';

const criarGatilho3 = ({route,navigation}) => {
  const {gatilho} = route.params;

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Gatilho 2",{gatilho:gatilho})}>
                <Image  style={styles.iconeVoltar} source={require('./../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
                 <Text style={styles.voltar}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Gatilho 4",{gatilho:gatilho})}>
                  <Text style={styles.seguinte}> Seguinte </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.titulo}>
                Novo Gatilho
              </Text>
              <Text style={styles.quando}>Ações </Text>
              <Text style={styles.explicação}>Crie ações a serem executadas</Text>
              <View style={{position:"absolute",top:"45%"}}>
              </View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Escolher Ações",{gatilho:gatilho})}>
                <View style={[styles.botaoCriação,{backgroundColor:"rgba(214, 96, 117, 0.3)",}]}>
                  <Text style={[styles.textoBotao,{color:"#D66075"}]}>  <Image source={require('./../images/icons/escolherAções.png')}></Image>  Escolher ações</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        </View> 
      </Modal> 
    </ScrollView>
  )
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
    top:"32%",
    width: 343,
    height:56,
    paddingVertical:8,
    paddingHorizontal:32,
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
  })

  export default criarGatilho3;