// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text,TextInput,Button} from 'react-native';
import Header from '../components/header'
// import DateTimePicker from '@react-native-community/datetimepicker';
import TimePicker from 'react-native-simple-time-picker';
// Simulando os dados

// Componente lista de Automações
const criarGatilho = ({navigation}) => {
const [selectedHours, setselectedHours] = useState(0);
const [selectedMinutes, setselectedMinutes] = useState(0);

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
              <View style={styles.container}>
                <Text>{selectedHours}hr:{selectedMinutes}min</Text>
                <TimePicker
                  selectedHours={selectedHours}
                  //initial Hourse value
                  selectedMinutes={selectedMinutes}
                  //initial Minutes value
                  onChange={(hours, minutes) => {setselectedHours(hours);setselectedMinutes(minutes);}}
                />
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
  container: {
    position:"absolute",
    top:"50%",
    // flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    marginLeft:50,
    marginRight:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

  export default criarGatilho;