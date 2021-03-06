// List of required imports import React,{useState}   from 'react';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';
import groups from '../../funcoes/splitingGroups';
import modalStyle from '../../style/modalStyle';
import {listStyle,indicator,roomPosition} from './../../style/listStyle'; 

// MAIN COMPONENT: creatingAuto2
const creatingAuto2= ({route,navigation}) => {
  const {automation} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation",{automation:automation})}>
                  <Image  style={modalStyle.leftIcon} source={require('./../../images/icons/voltarAutomação.png')}/>
                </TouchableWithoutFeedback>
                <Text style={[modalStyle.textSupLeft,modalStyle.colorTextAuto]}> Voltar  </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 3",{automation:automation})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorTextAuto]}> Seguinte </Text>
                </TouchableWithoutFeedback> 
                <Text style={modalStyle.title}> Nova Automação</Text>
                <Text style={modalStyle.subtitle}>Selecione os ambientes </Text>
                <Text style={[showText(automation.roomsSel),modalStyle.instructions]}>Selecione os ambientes que sua automação irá controlar.</Text>
                <View style={{position:"absolute",top:"35%"}}>
                  <ListSelRooms list={automation.roomsSel}></ListSelRooms>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Select Automation Rooms",{automation:automation})}>
                  <View style={[buttonPosition(automation.roomsSel),modalStyle.button,modalStyle.colorButtonAuto]}>
                    <Text style={[modalStyle.buttonText,modalStyle.colorTextAuto]}>
                      <Image source={require('./../../images/icons/selecionarAmbientesAuto.png')}></Image>  Selecionar ambientes</Text>
                  </View>
                </TouchableWithoutFeedback>
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
      var roomName = groups[room.group][room.room].name;
      var color =  groups[room.group][room.room].color;
      var position = roomPosition(x,list.length-1);
      x = x + 1;
      return(
        <View key={room.id} style={[indicator(color,position),listStyle.roomList,{backgroundColor: "rgb(44,44,44)"}]}>
          <Text style={listStyle.name}>{roomName}</Text>
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

// Dynamic Styles
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