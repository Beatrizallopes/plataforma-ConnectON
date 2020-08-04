// List of required imports
import React   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';

// MAIN CONPONENT: creatingAuto3
const creatingAuto3 = ({route,navigation}) => {
  const {automation} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
          <View style={styles.centeredView}>
            <View style={styles.modalSelectRoom}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 2",{automation:automation})}>
                  <Image  style={styles.backIcon} source={require('./../../images/icons/voltarAutomação.png')}/>
                </TouchableWithoutFeedback>
                <Text style={styles.back}> Voltar  </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 4",{automation:automation})}>
                    <Text style={styles.next}> Seguinte </Text>
                </TouchableWithoutFeedback> 
                <Text style={styles.title}> Nova Automação </Text>
                <Text style={styles.when}>Ações </Text>
                <Text style={styles.instruction}>Crie ações a serem executadas</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Choose Actions Automation",{automation:automation})}>
                  <View style={[styles.createButton]}>
                    <Text style={[styles.buttonText,{color:"#568AEA"}]}> 
                    <Image source={require('./../../images/icons/escolherAçõesAuto.png')}></Image>  Escolher ações</Text>
                  </View>
                </TouchableWithoutFeedback>
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
  modalSelectRoom: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    alignItems: "center", 
  },
  title:{
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
  next:{
    position:"absolute",
    top:"5%",
    color: "#568AEA",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  back:{
    position:"absolute",
    top:"5%",
    color: "#568AEA",
    fontWeight: "600",
    fontSize: 17,
    left:"10%",
    lineHeight: 22,
  },
  backIcon:{
    position: "absolute", 
    top: "5%",
    left:"5%"
  },
  when:{
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.352,
    color: "#FFFFFF",
    position:"absolute",
    top:"15%",
    left:"10%"
  },
  instruction:{
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
  createButton: {
    position:"relative",
    top:"32%",
    width: 343,
    height:56,
    paddingVertical:8,
    paddingHorizontal:32,
    backgroundColor:"rgba(26, 41, 70, 1)",
    borderRadius:12,
    alignItems:"center",
    justifyContent:"center"
    },
    buttonText: {
      display:"flex",
      flexDirection:"row",
      fontSize:17,
      fontWeight:"600",
      lineHeight:22,
      letterSpacing: -0.408,
      color:"#568AEA", 
    },
  })

  export default creatingAuto3;