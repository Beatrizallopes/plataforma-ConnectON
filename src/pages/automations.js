// List of required imports 
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text} from 'react-native';
import AutomationCard from '../components/automationCard'
// import listaAutomationsOrd from '../funcoes/listarAutomações';
import automationsListOrd from '../funcoes/listingAutomations';
import { useNavigation } from '@react-navigation/native';

// Component Automation List
const AutomationList = () => {
  const navigation = useNavigation();
// Mapping the list of automations/triggers registered in the system
  const AutomationItem = automationsListOrd.map((automation)=>{
    return(
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Automação",{automation:automation})} key={automation.cod}>
          <View>
            <AutomationCard type={automation.type} name={automation.name} nextEvent={automation.timeLeft} message={automation.message} rooms={automation.rooms} roomsInfo = {automation.roomsInfo}></AutomationCard>
          </View>
      </TouchableWithoutFeedback>
    )
  });
  return AutomationItem;
}

// Component CreationType: this component offers 2 options of creation = Automation or Trigger
const CreationType = () => {
  const navigation = useNavigation();
  const trigger = {name:"Gatilho",schedule:"", daysWeek:[], roomsSel:[],actionsSel:[]}
  const automation = {name:"Automação",scheduleStart:"", scheduleEnd:"", daysWeek:[], roomsSel:[],actionsSel:[],persistent: false}
  
  return (
    <View>
      {/* Box 1: Create an automation */}
        <View style={styles.box}>
            <Image style={styles.imageIcon} source={require('./../images/automacoes.png')}></Image>
            <Text style={styles.explanation}>Crie uma automação que é executada durante um período com início e fim determinado. </Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation",{automation:automation})}>
                <View style={styles.creationButton}>
                    <Text style={styles.buttonText}> Criar Automação</Text>
                </View> 
            </TouchableWithoutFeedback>
        </View>
      {/* Box 2: Create a trigger */}
        <View style={styles.box}>
            <Image style={styles.imageIcon} source={require('./../images/gatilhos.png')}></Image>
            <Text style={styles.explanation}>Crie um trigger para executar uma tarefa uma única vez quando chegar o momento </Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger",{trigger:trigger})}>
                <View style={[styles.creationButton,{backgroundColor:"rgba(214, 96, 117, 0.3)",}]}>
                    <Text style={[styles.buttonText,{color:"#D66075"}]}> Criar Gatilho</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
  )
}

// MAIN CONPONENT - Component Automations: diplay all the automations and triggers that are registered in the system
const Automations = () => {
  const [createModal, setcreateModal] = useState(false);
  return (
    <ScrollView style={styles.body}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => {setcreateModal(true);}}>
                <Image  style={styles.iconLeft} source={require('./../images/icons/adicionar.png')}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
              <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/more.png')}/>
            </TouchableWithoutFeedback>
        </View> 
        <Text style={styles.title}> Automações</Text>
        <AutomationList></AutomationList>
        <View style={{height:20}}></View>
 {/* The code below is the modal that opens when the user clicks to create a new automation/trigger. Is the Create Modal. */}
        <Modal animationType="slide" transparent={true} visible={createModal} >
            <View style={styles.centeredView}>
                <View style={styles.createModal}>
                    <TouchableWithoutFeedback onPress={() => {setcreateModal(!createModal);}}>
                        <Text style={styles.superiorButtons}> Cancelar  </Text>
                    </TouchableWithoutFeedback>
                    <CreationType></CreationType>
                </View>
          </View>
        </Modal>  
    </ScrollView>
  );
};

// Styling the components
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  header:{
    height: 54,// 54 + 24 = 78
   },
  iconLeft:{
      position: "absolute",
      right: 22,
      top: 54
  },
  title:{
      color:"white",
      fontSize: 34,
      fontFamily: "Barlow",
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 41,
      letterSpacing: 0.374,
      left: 16,
      right: 16,
      top:10,
      marginBottom:18,
    },
// Create Modal
  createModal: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    padding: "9%",
    alignItems: "center", 
  },
  superiorButtons:{
    position: "absolute",
    left:"5%",
    top: "8%",
    color: "#F18929",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
  },
  box:{
    display:"flex",
    flexDirection:"column",
    padding:0,
    position:"relative",
    width:370,
    height:225,
    top:"10%",
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
    borderRadius:18,
    margin:16,
    alignItems:"center"
  },
  imageIcon:{
    top:15
  },
  explanation:{
    width:"95%",
    position: "relative",
    right: "2.33%",
    top: "15%",
    bottom: "34.26%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#FFFFFF",
  },
  creationButton: {
  width:"95%",
  height:56,
  display:"flex",
  flexDirection:"column",
  paddingVertical:8,
  paddingHorizontal:32,
  position:"relative",
  top:"20%",
  backgroundColor:"rgba(86, 138, 234, 0.3)",
  borderRadius:12,
  alignItems:"center"
  },
  buttonText: {
    top:"20%",
    fontSize:17,
    fontWeight:"600",
    lineHeight:22,
    letterSpacing: -0.408,
    color:"#568AEA"
  }
});

// Exporting the main component
export default Automations;
