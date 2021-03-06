// List of required imports 
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Modal, TouchableWithoutFeedback} from 'react-native';
// import groups from "../funcoes/separarGruposAlfa";
import CardAuto from "../components/automationCardDisp";
import groups from '../funcoes/splitingGroups';
import {automationsList} from './../data';

// Component AutomationList: renders the list of automations/triggers registered in the room
const AutomationList = () => {
// Mapping the automations inside the room's automation list 
  const autoItem = automationsList.map((automation)=>{
    return(
      <View key={automation.cod}>
      <CardAuto name={automation.name} schedule={automation.schedule} nextEvent={automation.nextEvent} message={automation.message}></CardAuto>
      </View>
    )}) 
// Rendering the mapped itens:
    return autoItem
}
// Component DeviceList: renders the list of devices registered in the room 
  const DeviceList = ({devicesList})=> {
// Mapping the devices in the room
    const item = devicesList.map((device)=>{
      const [modalVisible, setModalVisible] = useState(false);
      const [temperature, setTemperature] = useState(device.temperature);   
      var brand = device.brand.toLowerCase();
// FIXME: I can't use variables inside the require method: https://github.com/facebook/react-native/issues/6391
      var searchImage = require('../images/logomarcasDispositivos/sansung.png');
// Rendering the mapped itens:
      return(
        <View style={styles.device} key={device.cod}>
            <Image  source={searchImage} style={{left: "5%",top:"9%"}}/>
            <TouchableWithoutFeedback  onPress={() => {setModalVisible(true);}}>
                <Text style={styles.deviceName}> {device.name} </Text>
            </TouchableWithoutFeedback>
            <Text style={styles.deviceModel}> {device.model}</Text>  
 {/* The code below is the modal that opens when the user clicks on a device. Is the Remote Control Modal. */}
        <Modal animationType="slide" transparent={true} visible={modalVisible} >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.controlTitulo}>Controle Remoto</Text>
                    {/* Closing Button*/}
                    <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible);}}>
                        <Image style={styles.closeButton} source={require('../images/controle/fecharControle.png')}/> 
                    </TouchableWithoutFeedback> 
                    {/* Section of information about the control */}
                    <Text style={styles.controlName}>{device.name}</Text>
                    <Text style={styles.controlModel}>{device.model}</Text>
                    {/* ON/OFF Button*/}
                    <Image source={require('../images/controle/ligaDesliga.png')} style={{position:"relative",top:"15%"}}/> 
                    {/* Other buttons */}
                    <View style={{top:"20%",left:16, flex: 1,flexDirection:"row",flexWrap:"wrap",}}>
                    {/* Temperature Buttons  */}
                    <View style={styles.controlTemperature}>
                            <Text style={{color:" rgba(255, 255, 255, 0.5)",fontSize:13}}>Temperatura</Text>
                            <View style={styles.display}>
                                <Text style={styles.temperatureValue}>{temperature}ºC</Text>
                            </View>   
                            <View style={styles.buttons}>
                                <TouchableWithoutFeedback onPress={() => { setTemperature(temperature + 1);} }>
                                   <Image source={require('../images/controle/aumentaTemp.png')}/>
                                </TouchableWithoutFeedback>               
                                <Image style={{marginHorizontal:5}} source={require('../images/controle/divisorBotoes.png')}/>
                                <TouchableWithoutFeedback onPress={() => { setTemperature(temperature - 1);} }>
                                    <Image source={require('../images/controle/diminuiTemp.png')}/>
                                </TouchableWithoutFeedback>
                            </View>   
                     </View>
                    <Image style={{top:0,right:"18%"}} source={require('../images/controle/divisorControle.png')}/> 
                  {/* Wind's speed Buttons */}
                    <View>
                        <Text style={{color:" rgba(255, 255, 255, 0.5)",fontSize:13}} >Velocidade do Vento</Text>
                        <View style={[styles.display,{paddingVertical:10,flexDirection:"row", right:"0%"}]}>
                        <Image style={{marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/>
                        <Image style={{marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/>
                        <Image style={{marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/>
                    </View>              
                    <View style={[styles.buttons,{top:"18%",right:"2%",}]}>
                        <Image source={require('../images/controle/aumentaVelocidade.png')}/>
                        <Image style={{marginHorizontal:5}} source={require('../images/controle/divisorBotoes.png')}/>
                        <Image source={require('../images/controle/diminuiVelocidade.png')}/>
                    </View>
                 </View>
              </View>
            </View>
          </View>
      </Modal>
      {/* Control's modal ending */}
    </View>
      )})
    return item; 
        }

// MAIN COMPONENT - Component Room: used to diplay all the info about the room and control the devices inside it (using the control)
const Room = ({route,navigation}) => {  
  const [editModal, seteditModal] = useState(false);
  const {selectedRoom} = route.params;
  const {selectedGroup} = route.params;
  const {newDevices} = route.params;
  room = groups[selectedGroup][selectedRoom]; 
// Rendering the main component
  return (
   <ScrollView style={styles.body}>
      <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Rooms") }>
              <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/backIcon.png')}/>
          </TouchableWithoutFeedback>
          <Text style={styles.rooms}> Ambientes </Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Edit Room",{room:room})}>
            <Text style={styles.edit}> Editar </Text>
          </TouchableWithoutFeedback> 
     </View> 
      <Text style={[styles.title,roomColor(room.color)]}> {room.name} </Text>  
      <Text style={styles.notifications}> Notificações </Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Notifications Room",{room:room})}>
        <Image style={{position:"absolute",marginRight: 4,right:"8%",top:"20%"}} source={require('./../images/icons/setaDireitaTransp.png')}/>
      </TouchableWithoutFeedback>
{/* Automation/Triggers area */}
      <View style={styles.automationsView}>
          <Text style={{color: "#FFFFFF",fontSize: 17,fontStyle:"normal",fontWeight: "600"}}> Automações</Text>
          <ScrollView style={styles.automationsList} horizontal={true}>
              <AutomationList></AutomationList>
              <View style={{height:20}}></View>      
          </ScrollView>
      </View>
{/* Devices area*/}
      <Text style={styles.devicesTitle}> Dispositivos </Text>
      <View style={styles.devicesView}>
          <DeviceList devicesList = {room.devices}></DeviceList>
          {/*  Button add device: */}
          <View style={styles.device}>
             <TouchableWithoutFeedback onPress={() => navigation.navigate("Add Devices Room",{room:room})}>
                 <Image  style={{position: "absolute", top:8, left:8}} source={require('./../images/icons/adicionarCirculo.png')}/>
             </TouchableWithoutFeedback>
             <Text style={{position:"relative", color: "#FFFFFF",fontSize: 15, left: "4.76%", right:"4.76%", top: "77%", letterSpacing: -0.24}}>Adicionar dispositivo</Text>
          </View> 
      </View>
   </ScrollView>
  );
};
// Function: roomColor -> turns the color of the title of the page the same as the room's maker color.
const roomColor = function(markerColor){
  return{
    color:markerColor,
  }
}
// Styling the components:
const styles = StyleSheet.create({
 title:{
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
 body: {
   flex:1,
   backgroundColor: "#000000",
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 edit:{
  position: "absolute",
  right: 22,
  top: "20%",
  color: "#2EC754",
  width: 44,
  fontWeight: "600",
  fontSize: 17,
 },
 rooms:{
  left: 24,
  top: "55%",
  color: "#2EC754",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 notifications:{
  height:48,
  padding: 12,
  width:"90%",
  left: 16,
  backgroundColor: "rgba(255, 255, 255,0.13)",
  borderRadius: 10,
  fontSize: 17,
  letterSpacing: -0.408,
  color: "#FFFFFF",
  marginTop:"5%",
 },
 automationsView:{
   left:16,
   marginTop:"8%",
 },
 automationsList:{
   width:"100%",
   height:149, 
  },
  devicesTitle:{
    color: "#FFFFFF",
    fontSize: 17,
    fontStyle:"normal",
    fontWeight: "600",
    left:16,
    marginTop:"8%",
    marginBottom:17,
  },
  devicesView:{
    left:16, 
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
  },
  device:{
    width:"45%",
    height: 126,
    backgroundColor: "rgba(255, 255, 255,0.13)",
    borderRadius: 12,
    left: 4,
    marginEnd:8,
    marginTop:8,
    flexDirection:"column",
    },
  deviceName:{
    position:"relative",
    color: "#FFFFFF",
    fontSize: 13,
    fontStyle:"normal",
    fontWeight: "600",
    left: "4.76%", 
    right:"4.76%", 
    top: "20%",
    lineHeight: 18,
    height: 54,
    width:"90%", 
    letterSpacing: -0.078
  },
  deviceModel: {
    top: "25%",
    left: "4.76%",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 11,
    lineHeight:13,
    fontStyle:"normal",
    fontWeight: "normal",
    },
// Control's style
  centeredView: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems: "center",
  },
  modalView: {
    height:"55%",
    width:"100%",
    margin: 20,
    backgroundColor:  "rgba(255, 255, 255,0.13)",
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
    elevation: 5
  },
  closeButton: {
    position:"absolute",
    right: 14,
    top: 22,
  },
  controlTitulo:{
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
  controlName:{
    position:"relative",
    color: "#FFFFFF",
    fontSize: 20,
    fontStyle:"normal",
    fontWeight: "600", 
    right:"6%", 
    top: 29,
    lineHeight: 25,
    height: 50,
    letterSpacing: 0.38
  },
  controlModel: {
    height: 13,
    right: "42%",
    top: "12%",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 11,
    lineHeight:13,
    fontStyle:"normal",
    fontWeight: "normal",
    },
  controlTemperature: {
    width:"50%",
  },
  display:{
    height:45,
    width:127,
    paddingHorizontal:22,
    paddingVertical:3,
    backgroundColor:"rgba(241, 137, 41, 0.15)",
    borderRadius:16,
    top:"10%",
    right:"15%",   
  },
  temperatureValue:{
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.374,
    color: "#2EC754",
  },
  buttons:{
    height:40,
    width:137,
    padding:4,
    backgroundColor:"rgba(255, 255, 255, 0.1)",
    borderRadius:100,
    top:"12%",
    right:"22%", 
    flexDirection:"row",
    flexWrap:"wrap",
  },
})
// Exporting the main component
export default Room


