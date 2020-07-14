// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text,TextInput} from 'react-native';
import Header from '../components/header'

// Simulando os dados

// Componente lista de Automações
const criarGatilho = ({navigation}) => {
  return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalCriar}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
                <Image  style={styles.iconeVoltar} source={require('./../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => alert("Voltar")}>
                 <Text style={styles.voltar}> Voltar  </Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => alert("Seguinte")}>
                  <Text style={styles.seguinte}> Seguinte </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.titulo}>
                Novo Gatilho
              </Text>

              <Text style={styles.quando}>Quando</Text> 
          </View>
    </View>
  </Modal> 
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
    // alignItens:"center",
  },
  modalCriar: {
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
    // marginBottom:18,
    // left:"38%"
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
  }
})

  export default criarGatilho;