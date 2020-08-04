// List of required imports
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// MAIN COMPONENT - creatingAutomation: in this first page, the user chooses the interval of the automation
const creatingAutomation = ({route,navigation}) => {
const {automation} = route.params;

// Variables for the timePicker
const [isStartPickerVisible, setStartPickerVisibility] = useState(false);
const [isEndPickerVisible, setEndPickerVisibility] = useState(false);
const [startHour,chooseStartHour] = useState("00:00");
const [endHour,chooseEndHour] = useState("00:00");

// Functions for the timePicker
const handleConfirmStart= (date) => {
  setStartPickerVisibility(false);
  chooseStartHour(date.toLocaleTimeString().slice(0, -3)); 
};
const handleConfirmEnd = (date) => {
  setEndPickerVisibility(false);
  chooseEndHour(date.toLocaleTimeString().slice(0, -3)); 
};

// Variables for the dayPicker
const [sunday, clickedSunday] = useState(false);
const [monday, clickedMonday] = useState(false);
const [tuesday, clickedTuesday] = useState(false);
const [wednesday, clickedWednesday] = useState(false);
const [thursday, clickedThursday] = useState(false);
const [friday, clickedFriday] = useState(false);
const [saturday, clickedSaturday] = useState(false);

automation.daysWeek = [sunday,monday,tuesday,wednesday,thursday,friday,saturday];
automation.scheduleStart = startHour;
automation.scheduleEnd = endHour;

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalCreate}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Automations") }>
                <Image  style={styles.iconBack} source={require('./../../images/icons/voltarAutomação.png')}/>
              </TouchableWithoutFeedback>
              <Text style={styles.back}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 2",{automation:automation})}>
                  <Text style={styles.next}> Seguinte </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.title}> Nova Automação </Text>
              <Text style={styles.when}>Quando</Text>
              {/* Time Picker*/}
              
              {/* Start Schedule */}
              <View style={styles.scheduleButton} >               
                <Text style={[styles.scheduleText,{position:"relative",top:"25%",left:"5%",}]}> Horário de início </Text>
                <Text style={[styles.scheduleText,{bottom:"20%",left:"75%",}]}>{startHour}</Text>
                <TouchableWithoutFeedback onPress={() => {setStartPickerVisibility(true)}}>
                    <Image style={styles.scheduleIcon} source={require('./../../images/icons/setaAbaixoTransp.png')}></Image>
                </TouchableWithoutFeedback>
              </View>
              <DateTimePickerModal isVisible={isStartPickerVisible} mode="time" onConfirm={handleConfirmStart} onCancel={ () => {setStartPickerVisibility(false)}} display="spinner" is24Hour={true} />
               
               {/* End Schedule */}
               <View style={styles.scheduleButton} >               
                  <Text style={[styles.scheduleText,{position:"relative",top:"25%",left:"5%",}]}> Horário de Fim </Text>
                  <Text style={[styles.scheduleText,{bottom:"20%",left:"75%",}]}>{endHour}</Text>
                  <TouchableWithoutFeedback onPress={() => {setEndPickerVisibility(true)}}>
                      <Image style={styles.scheduleIcon} source={require('./../../images/icons/setaAbaixoTransp.png')}></Image>
                  </TouchableWithoutFeedback>
               </View>
              <DateTimePickerModal isVisible={isEndPickerVisible} mode="time" onConfirm={handleConfirmEnd} onCancel={() => setEndPickerVisibility(false)} display="spinner" is24Hour={true} />
              
               {/* DayPicker*/}
               <Text style={styles.repeats}>Repete</Text> 
               <View style={styles.dayPicker}> 
                <TouchableWithoutFeedback  onPress={() => {clickedSunday(!sunday);}}>            
                    <View style={changeStyle(sunday)}>
                      <Image  source={require('./../../images/dayWeekPicker/d.png')}></Image>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => {clickedMonday(!monday);}}>
                    <View style={changeStyle(monday)}>
                        <Image  source={require('./../../images/dayWeekPicker/s.png')}></Image>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => {clickedTuesday(!tuesday);}}>
                    <View style={changeStyle(tuesday)}> 
                      <Image source={require('./../../images/dayWeekPicker/t.png')}></Image> 
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => {clickedWednesday(!wednesday);}}>
                    <View style={changeStyle(wednesday)}>
                      <Image source={require('./../../images/dayWeekPicker/q.png')}></Image> 
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => {clickedThursday(!thursday);}}>
                    <View style={changeStyle(thursday)}>
                      <Image source={require('./../../images/dayWeekPicker/q.png')}></Image>
                    </View> 
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => {clickedFriday(!friday);}}>
                    <View style={changeStyle(friday)}>
                      <Image  source={require('./../../images/dayWeekPicker/s.png')}></Image> 
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => {clickedSaturday(!saturday);}}>
                    <View style={changeStyle(saturday)}>
                      <Image source={require('./../../images/dayWeekPicker/s.png')}></Image> 
                    </View>
                </TouchableWithoutFeedback>
               </View>
          </View>
        </View>
      </Modal> 
    </ScrollView>
  )
}

// Functions:
// Function changeStyle(status): change the style of the day in the picker based on if it is choosed or not
const changeStyle = function(status){
  if(status){
    return{
      position:"relative",
      top:"25%",
      right:"4%",
      width: 40,
      height: 40,
      backgroundColor: "#568AEA",
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

// Styling the components
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modalCreate: {
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
  iconBack:{
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
  scheduleButton:{  
    top:"25%",   
    width: 343,
    height:49,
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
    borderRadius:12,
    marginBottom:10,
  },
  scheduleText:{
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#FFFFFF",
   
  },
  scheduleIcon:{
     position:"relative",
     left:"90%",
     bottom:"60%"
  },
  repeats:{
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

  export default creatingAutomation;