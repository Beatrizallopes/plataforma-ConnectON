// List of required imports 
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback,Modal,TextInput } from 'react-native';
import listaAmbientes from '../dados';
import Week from '../components/week'
import RoomsList from '../components/roomsList';

// Simulating the user password
const password = "1234";

// MAIN COMPONENT: Automation
const Automation = ({route,navigation}) => { 
// Declaring the variables used in this component
  const {automation} = route.params;
  const [deactivateModal,setdeactivateModal] = useState(false); // variables that stores and sets the state of the modal used do deactivate the automation/trigger
  var modal = false;
  const [active,setactive] = useState(automation.active); // variable that stores the state of automation/trigger (active or not)
  automation.active = active;
  const [value, onChangeText] = React.useState("Sua senha"); // stores the value of the password input
  const [option,setoption] = useState("0"); // stores the value of the option that the user clicks

  // Options: types of the ways the user can deactivate the automation/trigger
  var option1 = false// Deactivate for unlimited time
  var option2 = false // Activate again after 8 hours
  var option3 = false // Activate again after 24 hours
  // If the user chooses one option, the other two are set to false, while the chosen one is set to true
  if(option == "1"){
    option1 = true;
    option2 = false;
    option3 = false;
  }
  if(option == "2"){
    option1 = false;
    option2 = true;
    option3 = false;
  }
  if(option == "3"){
    option1 = false;
    option2 = false;
    option3 = true;
  }
  var text = automation.schedule;
  var rooms = identifyRooms(automation.rooms)
  if(automation.type === "Automação"){
    var schedule = automation.schedule.split("/");
    text = schedule[0] + " às " + schedule[1]
  }
  // FIXME: I did this cause I am having problems using ScrollView in this component
  var qtyRooms = automation.rooms.length;
  var padding = 50;
  if(qtyRooms>4){
    padding = (qtyRooms-4)*50;
  }
  // Function: deativate(option, passwordInput)
const deactivate = function(option,passwordInput){
  var deactivated = true;
  if(passwordInput === password){
    deactivated = false
  } else {
    alert("A password está incorreta!")
  }
  setactive(deactivated);
}
// Component ActivateButton(activated): activate the automation/trigger 
const ActivateButton = function({activated}){
  if(activated){
    return(
      <TouchableWithoutFeedback onPress={() => setdeactivateModal(true)}>
          <Text style={[styles.deactivate,{color: "#FE453B",}]}> Desabilitar </Text>
        </TouchableWithoutFeedback> 
    )
  }
  else{
    return(
      <TouchableWithoutFeedback onPress={() => setactive(true)}>
          <Text style={[styles.deactivate,{color:"#F18929"}]}> Habilitar </Text>
      </TouchableWithoutFeedback> 
    )
  }
}
// Rendering the main component:
  return (   
  <ScrollView  style={styles.body}  >
  <View style={{ paddingBottom: padding,flexDirection:"column"}}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Automations") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.automations}> Automações </Text>
        <ActivateButton activated={active}></ActivateButton>
     </View>  
      <Text style={styles.title}>{automation.name}</Text>  
      <View style={darken(automation.active)}>
          <View style={styles.details}>
              <Text style={styles.automationNextEv}>{automation.timeLeft}</Text>
              <Text style={styles.automationMessage}>{automation.message}:</Text>
              <Text style={styles.automationSchedule}>{text}</Text>
              <Week daysAuto={automation.days}></Week>
          </View>
          <Text style={styles.rooms}> Ambientes</Text>
          {/* List of rooms registered in this automation/trigger */}
          <View style={{left:"6%"}}>
              <RoomsList list={rooms}></RoomsList>
          </View>
              {/*Button to add rooms*/}
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Add Rooms",{automation:automation})}>
              <View style={[styles.addRoomButton,buttonVisibility(automation.active)]}>
                <Image style={{alignSelf:"center",left:"60%"}} source={require('../images/icons/addAmbiente.png')}></Image>
                <Text style={styles.textButtonAdd}>Adicionar ambientes</Text>
              </View>
          </TouchableWithoutFeedback>
          {/*  Deactivate modal*/}
          <Modal animationType="slide" transparent={true} visible={deactivateModal} >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Desabilitar</Text>
                {/* Button to close the modal*/}
                <TouchableWithoutFeedback onPress={() => { setdeactivateModal(!deactivateModal);}}>
                  <Image style={styles.closeButton} source={require('../images/icons/fecharModal1.png')}/> 
                </TouchableWithoutFeedback> 
                <Text style={styles.question} >Por quanto tempo você quer desabilitar <Text style={{fontWeight:"bold"}}>{automation.name}</Text>?</Text>
                <TouchableWithoutFeedback onPress={()=> setoption("1")}>
                    <Text style={[styles.optionsModal,choosedOption(option1)]}>Desativar por tempo indeterminado</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> setoption("2")}>
                  <Text style={[styles.optionsModal,choosedOption(option2)]}>Ativar novamente após 8 horas</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> setoption("3")}>
                    <Text style={[styles.optionsModal,{borderBottomColor: "rgba(255, 255, 255, 0.12)"},choosedOption(option3)]}>Ativar novamente após 24 horas</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.confirmPassword}>CONFIRME SUA SENHA</Text>
                <TextInput style={styles.passwordInput}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    ></TextInput>
                <View style={{flexDirection:"row",left:"20%"}}>
                  <TouchableWithoutFeedback onPress={()=> setdeactivateModal(false)}> 
                    <Text style={[styles.optionInf,{borderRightWidth:1,borderRightColor:"rgba(255, 255, 255, 0.12)",paddingRight:"7%"}]}>Cancelar</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={()=> deactivate(option,value)}>
                    <Text style={styles.optionInf}>Desabilitar</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </Modal>
          {/* End of the desativate modal */}
      </View>
      </View>
   </ScrollView>

  );

};

// Styling the components
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  title:{
   left: "6%",
   top:"2%",
   color:"white",
   fontSize: 34,
   fontFamily: "Barlow",
   fontWeight: "bold",
   lineHeight: 41,
   letterSpacing: 0.374,
   marginBottom:18,
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 deactivate:{
  position: "absolute",
  right: 24,
  top: "55%",
  fontWeight: "600",
  fontSize: 17,
 },
 automations:{
  left: 24,
  top: "55%",
  color: "#F18929",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 details:{
  position:"relative",
  marginTop:"4%",
  left: "6%",
  width: 343,
  height: 154,
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
  borderRadius:  14,
 },
 rooms:{
   marginTop:"4%",
   left: "6%",
   color:"white",
   fontSize:17,
   fontWeight:"600",
   lineHeight:22,
   marginBottom:20,
 },
 automationNextEv:{
  position:"relative",
  fontFamily: "Barlow",
  color: "#FFFFFF",
  fontSize: 11,
  fontWeight:"normal",
  left: "4%", 
  top: "25%",
  fontSize:34,
  lineHeight:41,
  letterSpacing:0.374,
  alignSelf:"flex-start",
  },
  automationMessage:{
    position:"absolute",
    height:22,
    left:"4%",
    top:"10%",
    color: "rgba(255, 255, 255, 0.44)",
    fontSize: 17,
    fontStyle:"normal",
    fontWeight: "normal", 
    lineHeight: 22,
    alignSelf:"flex-start"
  },
  automationSchedule:{
    position:"absolute",
    height:20,
    left:"4%",
    top:"55%",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#FFFFFF",
  },
  addRoomButton:{
    height:50,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 32,
    position:"relative",
    left: "-2%",
    width: 343,
    backgroundColor: "rgba(241, 137, 41, 0.3)",
    borderRadius: 12,
    alignSelf: "center",
    textAlign:"center",
    marginTop:"5%",
  },
  textButtonAdd:{
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#F18929",
    alignSelf:"center",
    marginLeft:10,
    left:"70%"
  },
  //Modal's Style:
  centeredView: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems: "center",
  },
  modalView: {
    height:"68%",
    width:"100%",
    margin: 20,
    backgroundColor:  "rgba(70, 70, 70, 0.95)",
    borderTopStartRadius:12,
    borderTopEndRadius:12,
    padding: "9%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position:"absolute",
    right: 14,
    top: 22,
  },
  modalTitle:{
    position: "absolute",
    height: 34,
    left: 16,
    top: 22,// 5+17 = 22
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.364,
    color: "#FFFFFF",
  },
  question:{
    top:"15%",
    right:"8%",
    width:323,
    fontSize: 17,
    lineHeight: 22, 
    letterSpacing: -0.408,
    color: "#FFFFFF",
    paddingBottom:20,
    borderBottomColor: "rgba(255, 255, 255, 0.12)",
    borderBottomWidth: 1,
  },
  optionsModal:{
    top:"20%",
    right:"8%",
    width:323,
    fontSize: 17,
    lineHeight: 22, 
    letterSpacing: -0.408,
    paddingHorizontal:12,
    paddingVertical:4,
    marginHorizontal:16,
    marginBottom:10,
  },
  confirmPassword:{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize:13,
    top:"23%",
    right:"35%",
  },
  passwordInput:{
    top:"30%",
    right:"6%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical:12,
    width: 343,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    borderRadius: 10,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.3)"
    
  },
  optionInf:{
    top:"35%",
    marginRight:"7%",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#F18929",
  }
})

// Functions:
// Function indentifyRooms(list) = identify the rooms in the string
const identifyRooms = function(list){
var rooms = [];
for(var i=0;i<listaAmbientes.length;i++){
  for(var j=0;j<list.length;j++){
    if(listaAmbientes[i].name == list[j]){
      rooms.push(listaAmbientes[i])
    } 
  }
}
return rooms;
}
// Function: choosedOption(status): change the style of the option based on if it is choosed or not
const choosedOption = function(status){
  if(status){
    return{
      color: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 8,
    }
   } else {
      return{
        color: "rgba(255, 255, 255, 0.6)",
      }
    }
}
// Function: darken(isActive): darkens the screen if the automation/trigger is deactivated
const darken = function(isActive){
  if(isActive){
    return {
      opacity:1,
    }
  } else {
    return{
      opacity: 0.4,
    }
  }
}
// Function: buttonVisibility(isActive): makes the add rooms button invisible of the automation/trigger is deactivated
const buttonVisibility = function(isActive){
  if(!isActive){
    return{
      opacity:0,
    }
  }
}
// Exporting the main component 
export default Automation;


