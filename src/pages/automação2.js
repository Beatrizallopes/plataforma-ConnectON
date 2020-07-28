// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text,TextInput,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Automação = ({route,navigation}) => {
const {automação} = route.params;


return(
    <ScrollView style={styles.body}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
                <Image  style={styles.iconeVoltar} source={require('./../images/icons/setaLaranjaEsq.png')}/>
              </TouchableWithoutFeedback>
                 <Text style={styles.voltar}> Automações  </Text>
                 <TouchableWithoutFeedback>
          <Text style={styles.desabilitar}> Desabilitar </Text>
        </TouchableWithoutFeedback> 
              <Text style={styles.titulo}>
                {automação.nome}
              </Text>
    </ScrollView>
  )
}
//
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  desabilitar:{
    position: "absolute",
    right: 24,
    top: "55%",
    color: "#FE453B",
    fontWeight: "600",
    fontSize: 17,
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
    color: "#568AEA",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  voltar:{
    position:"absolute",
    top:"5%",
    color: "#568AEA",
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
  horarioButton:{  
    top:"25%",   
    width: 343,
    height:49,
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
    borderRadius:12,
    marginBottom:10,
  },
  textoHorario:{
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#FFFFFF",
   
  },
  iconeHorario:{
     position:"relative",
     left:"90%",
     bottom:"60%"
  },
  repete:{
    position:"absolute",
    top:"48%",
    left:"10%",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.078,
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.5)",
  },
  dayPicker:{
    position:"relative",
    top:"35%",
    left:"2%",
    height:45,
    width: "80%",
    flexDirection:"row",
    flex: 1,
  },
})
// Funções


  export default Automação;