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
            <View style={{flexDirection:"row"}}>
             <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
               <Image  style={{position: "absolute", top: "5%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
             </TouchableWithoutFeedback>
           <Text style={styles.voltar}> Voltar  </Text>
           <TouchableWithoutFeedback onPress={() => alert("oi")}>
             <Text style={styles.seguinte}> Seguinte </Text>
           </TouchableWithoutFeedback> 
      <Text style={styles.titulo}>
           Novo Gatilho
      </Text> 
      </View>
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
  },
  modalCriar: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    // padding: "9%",
    alignItems: "center", 
    //display:"flex",
  },
  titulo:{
    color:"white",
    fontSize: 17,
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.374,
    left: 16,
    right: 16,
    top:10,
    marginBottom:18,
  },
  seguinte:{
  position:"relative",
  top:"0%",
   left: "40%",
   color: "#D66075",
   fontWeight: "600",
   fontSize: 17,
  },
  voltar:{
    position:"relative",
    top:"0%",
    right: "40%",
    color: "#D66075",
    fontWeight: "600",
   fontSize: 17,
   lineHeight: 22,
  },
})

  export default criarGatilho;