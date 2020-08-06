// List of required imports import React,{useState}   from 'react';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';
import grupos from '../../funcoes/separarGruposAlfa';
import modalStyle from '../../style/modalStyle';
import {listStyle,indicator,roomPosition} from './../../style/listStyle'; 

// MAIN COMPONENT: creatingTrigger2
const creatingTrigger2= ({route,navigation}) => {
  const {trigger} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger",{trigger:trigger})}>
                  <Image  style={modalStyle.leftIcon} source={require('./../../images/icons/voltarGatilho.png')}/>
                </TouchableWithoutFeedback>
                <Text style={[modalStyle.textSupLeft,modalStyle.colorTextTrigger]}> Voltar  </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 3",{trigger:trigger})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorTextTrigger]}> Seguinte </Text>
                </TouchableWithoutFeedback> 
                <Text style={modalStyle.title}> Novo Gatilho</Text>
                <Text style={modalStyle.subtitle}>Selecione os ambientes </Text>
                <Text style={[showText(trigger.roomsSel),modalStyle.instructions]}>Selecione os ambientes que seu gatilho irá controlar.</Text>
                <View style={{position:"absolute",top:"35%"}}>
                  <ListSelRooms list={trigger.roomsSel}></ListSelRooms>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Select Trigger Rooms",{trigger:trigger})}>
                  <View style={[buttonPosition(trigger.roomsSel),modalStyle.button,modalStyle.colorButtonTrigger]}>
                    <Text style={[modalStyle.buttonText,modalStyle.colorTextTrigger]}>
                      <Image source={require('./../../images/icons/selecionarAmbientes.png')}></Image>  Selecionar ambientes </Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal> 
      </ScrollView>
    )
  }
 // Component ListSelRooms: renders the list of the rooms that were selected for the trigger
const ListSelRooms = ({list}) =>{
  if(list.length>0){
    var x = 0;
    var selectedRoom = list.map((room) => { 
      var roomName = grupos[room.group][room.room].nome;
      var color =  grupos[room.group][room.room].cor;
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

// Styling the Room's List
const styles = StyleSheet.create({
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

  export default creatingTrigger2;