// List of required imports import React,{useState}   from 'react';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';
import grupos from '../../funcoes/separarGruposAlfa';

// MAIN COMPONENT: creatingAuto2
const creatingAuto2= ({route,navigation}) => {
  const {automation} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
          <View style={styles.centeredView}>
            <View style={styles.selectAmbModal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation",{automation:automation})}>
                  <Image  style={styles.backIcon} source={require('./../../images/icons/voltarAutomação.png')}/>
                </TouchableWithoutFeedback>
                <Text style={styles.back}> Voltar  </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 3",{automation:automation})}>
                    <Text style={styles.next}> Seguinte </Text>
                </TouchableWithoutFeedback> 
                <Text style={styles.title}> Nova Automação</Text>
                <Text style={styles.when}>Selecione os ambientes </Text>
                <Text style={[showText(automation.roomsSel),styles.instruction]}>Selecione os ambientes que sua automação irá controlar.</Text>
                <View style={{position:"absolute",top:"35%"}}>
                  <ListSelRooms list={automation.roomsSel}></ListSelRooms>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Select Automation Rooms",{automation:automation})}>
                  <View style={[buttonPosition(automation.roomsSel),styles.buttonCreate]}>
                    <Text style={[styles.buttonText,{color:"#568AEA"}]}>
                      <Image source={require('./../../images/icons/selecionarAmbientesAuto.png')}></Image>  
                        Selecionar ambientes
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
          </View> 
        </Modal> 
      </ScrollView>
    )
  }
 // Component ListSelRooms: renders the list of the rooms that were selected for the automation
const ListSelRooms = ({list}) =>{
  if(list.length>0){
    var x = 0;
    var selectedRoom = list.map((room) => { 
      var roomName = grupos[room.group][room.room].nome;
      var color =  grupos[room.group][room.room].cor;
      var position = roomPosition(x,list.length-1);
      x = x + 1;
      return(
        <View key={room.id} style={[indicator(color,position),styles.roomsList]}>
          <Text style={styles.text}>{roomName}</Text>
        </View>
      )
    })
  } else{
    var selectedRoom = (
      <View> 

      </View>
    )
  }
  return selectedRoom;
}

// Styling the componentes
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  selectAmbModal: {
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
  buttonCreate: {
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
  // Rooms's list
  text: {
    color: "#FFFFFF",
    fontSize: 17,
    position: "absolute",
    height: 24,
    left: 8,
    top: 12,
    marginLeft:48,// 56 - 8 = 48
    lineHeight: 22,
    letterSpacing: -0.408, 
  },
  roomsList:{
    backgroundColor: "rgb(44,44,44)",
    height: 48,
    paddingLeft:15,
    width:343,
  } 
})
// Dynamic Styles
// Function: roomPosition(id, totalQty) = identifies the position of the room in the list
  const roomPosition = function(id,totalQty){
    var position;
    if(id < totalQty){
      if(id === 0){
        position = "inicial";
      } else{
        position = "meio";
      }
    } else {
      if(totalQty === 0){
        position = "unico"
      } else{
        position = "final"
      }
    }
    return position
  }
// Function: indicator(myColor, type): identifies the color of the room and use in the indicator
var indicator = function(myColor, type) {
  if(type=='inicial'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderTopStartRadius:12,
      borderTopEndRadius:12,
    }
  };
  if(type=='meio'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
    }
  };
  if(type=='final'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      borderBottomEndRadius:12,
    }
  }
  if(type=='unico'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      borderBottomEndRadius:12,
      borderTopEndRadius:12,
      borderTopStartRadius:12,
      
    }
  }  
}
// Function showText(list): makes the instruction desappear when there is at least one room selected
var showText = function(list){
  if(list.length>0){
    return {
      opacity:0,
      height:0,
    }}
    else{
      return{
        opacity:100,
      }      
    }
}
// Function: buttonPosition(list): adjusts the position of the button if there is at least one room selected
 var buttonPosition = function(list){
  if(list.length>0){
    return {
      position:"relative",
      top:"22%",
    }}
    else{
      return{
        position:"relative",
        top:"32%",
      }      
    }
 }

  export default creatingAuto2;