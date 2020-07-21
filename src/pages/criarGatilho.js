// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text,TextInput,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const criarGatilho = ({navigation}) => {
  // Variáveis para o Horário Picker
const [isPickerVisible, setDatePickerVisibility] = useState(false);
const [hora,escolheuHora] = useState("00:00")

const showPicker = () => {
  setDatePickerVisibility(true);
};

const hidePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  hidePicker();
  escolheuHora(date.toLocaleTimeString().slice(0, -3));
  
};
// Variáveis para o Dayweek Picker
const diasSemana = [0,0,0,0,0,0,0]
const [domingo, clicouDomingo] = useState(false);
const [segunda, clicouSegunda] = useState(false);
const [terca, clicouTerca] = useState(false);
const [quarta, clicouQuarta] = useState(false);
const [quinta, clicouQuinta] = useState(false);
const [sexta, clicouSexta] = useState(false);
const [sabado, clicouSabado] = useState(false);

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalCriar}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
                <Image  style={styles.iconeVoltar} source={require('./../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
                 <Text style={styles.voltar}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => alert("Seguinte")}>
                  <Text style={styles.seguinte}> Seguinte </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.titulo}>
                Novo Gatilho
              </Text>
              <Text style={styles.quando}>Quando</Text>
              {/* Picker de horário */}
              <View style={styles.horarioButton} >               
                <Text style={[styles.textoHorario,{position:"relative",top:"25%",left:"5%",}]}> Horário </Text>
                <Text style={[styles.textoHorario,{bottom:"20%",left:"75%",}]}>{hora}</Text>
                <TouchableWithoutFeedback onPress={showPicker}>
                <Image style={styles.iconeHorario} source={require('../images/icons/setaAbaixoTransp.png')}></Image>
              </TouchableWithoutFeedback>
              </View>
              <DateTimePickerModal
                isVisible={isPickerVisible}
                 mode="time"
                 onConfirm={handleConfirm}
                 onCancel={hidePicker}
                 display="spinner"
                 is24Hour={true}
               />
               {/* Picker de dias*/}
               <Text style={styles.repete}>Repete</Text> 
               <View style={styles.dayPicker}> 
               
               <TouchableWithoutFeedback  onPress={() => {clicouDomingo(!domingo);}}>            
                  <View style={trocarEstilo(domingo)}>
                    <Image  source={require('./../images/dayWeekPicker/d.png')}></Image>
                  </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback  onPress={() => {clicouSegunda(!segunda);}}>
               <View style={trocarEstilo(segunda)}>
                  <Image  source={require('./../images/dayWeekPicker/s.png')}></Image>
               </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback  onPress={() => {clicouTerca(!terca);}}>
                  <View style={trocarEstilo(terca)}> 
                    <Image source={require('./../images/dayWeekPicker/t.png')}></Image> 
                  </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback  onPress={() => {clicouQuarta(!quarta);}}>
                  <View style={trocarEstilo(quarta)}>
                    <Image source={require('./../images/dayWeekPicker/q.png')}></Image> 
                  </View>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback  onPress={() => {clicouQuinta(!quinta);}}>
                  <View style={trocarEstilo(quinta)}>
                    <Image source={require('./../images/dayWeekPicker/q.png')}></Image>
                  </View> 
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback  onPress={() => {clicouSexta(!sexta);}}>
                  <View style={trocarEstilo(sexta)}>
                    <Image  source={require('./../images/dayWeekPicker/s.png')}></Image> 
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback  onPress={() => {clicouSabado(!sabado);}}>
                  <View style={trocarEstilo(sabado)}>
                    <Image source={require('./../images/dayWeekPicker/s.png')}></Image> 
                  </View>
              </TouchableWithoutFeedback>
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
  },
  horarioButton:{  
    top:"25%",   
    width: 343,
    height:49,
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
    borderRadius:12,
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
    top:"35%",
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
    top:"30%",
    left:"2%",
    height:45,
    width: "80%",
    flexDirection:"row",
    // flexWrap:"wrap",
    flex: 1,
  },
})
// Funções

const trocarEstilo = function(status){
  if(status){
    return{
      position:"relative",
      top:"25%",
      right:"4%",
      width: 40,
      height: 40,
      backgroundColor: "#D66075",
      borderRadius: 100,
      alignContent:"center",
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal:5,
      }
  } else {
    return {
      position:"relative",
      top:"30%",
      marginEnd:40, 
    }
  }
}
  export default criarGatilho;