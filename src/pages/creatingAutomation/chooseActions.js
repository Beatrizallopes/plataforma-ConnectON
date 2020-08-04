// List of required imports
import React  from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import Input from '../../components/input';

// MAIN CONPONENT: chooseActionsAuto
const chooseActionsAuto = ({route,navigation}) => {
  const {automation} = route.params;
  return(
  <ScrollView>
    <Modal animationType="slide" transparent={true} visible={true} >
      <View style={styles.centeredView}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 3",{automation:automation})}>
                <Image style={styles.closeButton} source={require("./../../images/icons/fecharModal.png")}></Image>
            </TouchableWithoutFeedback>
            <View style={{marginBottom:30}}> 
                <Text style={styles.title}> Ações</Text>
            </View>
            <View style={{width:"110%"}}>
              <Input label="" placeholder="Buscar Ações..." /> 
              </View>
          </View>   
          </View>
    </Modal>
  </ScrollView>
  )
    }
// Styling the components

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modal: {
    height:"100%",
    width:"100%",
    backgroundColor: "rgb(44,44,44)",
    padding: "9%",
    alignItems: "center", 
  },
  closeButton:{
    position:"absolute",
    top:"4%",
    right:"6%",
    backgroundColor:"rgba(255, 255, 255, 0.13);",
    borderRadius:20
  },
  title:{
    position:"absolute",
    top:"5%",
    right:"25%",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.364,
    color: "#FFFFFF",
  }, 
})

  export default chooseActionsAuto;