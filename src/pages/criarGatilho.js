// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text,TextInput,Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const criarGatilho = ({navigation}) => {
const [isPickerVisible, setDatePickerVisibility] = useState(false);

const showPicker = () => {
  setDatePickerVisibility(true);
};

const hidePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  console.warn("A date has been picked: ", date);
  hidePicker();
};

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
              <View style={styles.horarioButton} >               
                <Text style={styles.textoHorario}> Horário </Text>
                <TouchableWithoutFeedback onPress={showPicker}>
                <Image style={styles.iconeHorario} source={require('./../images/icons/setaAbaixoTransp.png')}></Image>
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
    position:"relative",
    top:"25%",
    left:"5%",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#FFFFFF",
    flexDirection:"column",
  },
  iconeHorario:{
     position:"relative",
     left:"90%",
     bottom:"20%"
  }
})

  export default criarGatilho;