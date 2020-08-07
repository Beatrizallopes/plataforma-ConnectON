// List of required imports
import React, { useState }  from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from '../style/modalStyle';
import {listStyle} from '../style/listStyle'
// Simulating the database
var devicesList = [
  {name:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"1", temperature: 24, speed:3},
  {name:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"2", temperature:17,speed:2},
  {name:"Ar-Condicionado Split Hi Wall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"3", temperature:18,speed:2},
  {name:"Teste Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"4", temperature: 24, speed:3},
  {name:"Ar-Condicionado Teste Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"5", temperature:17,speed:2},
  {name:"Ar-Condicionado Split TesteWall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"6", temperature:18,speed:2},
]

// MAIN CONPONENT: addDevices
const addDevicesRoom = ({route,navigation}) => {
  const {room} = route.params;
  const newDevices = [];
  // Devices List component:
  const DeviceList = ({devicesList})=> {
    const item = devicesList.map((device)=>{
      const [clicked,setClicked] = useState(false);
      var alreadySel = false;
      var z = 0; // variável para identificar em que posição de room.devices o device está
      // Verifiying if the room it's already selected
      for(var m=0 ; m < newDevices.length; m++){
        if(newDevices[m].name == device.name){
            alreadySel = true;
            z = m;
        }   
      }
      if(clicked){ // it was clicked
        if(alreadySel){
          newDevices.splice(z,1);
          var urlCheckBox = require('./../images/icons/ambNaoSel.png');
        } else {
          newDevices.push(device); // it was clicked but it isn't on the list
          alreadySel = true;
          var urlCheckBox = require('./../images/icons/ambSel.png');
        }        
      } else { // it was not clicked
        if(alreadySel){
          var urlCheckBox = require('./../images/icons/ambSel.png');
        } else {
          var urlCheckBox = require('./../images/icons/ambNaoSel.png');
        }
      }
    z = z + 1;
    var brand = device.brand.toLowerCase();
         var logo = require('./../images/logomarcasDispositivos/sansung.png');
// Rendering each device
        return(
          <View style={[listStyle.device,{width:"47%"}]} key={device.cod}>
            <View style={{flexDirection:"row", top:"8%",left:"8%"}}>
                <Image  source={logo} style={{marginRight:"20%"}}/>
                <TouchableWithoutFeedback   onPress={() => {setClicked(!clicked);}}>
                    <Image source={urlCheckBox} style={{position:"relative",top:"-2%",right:"50%"}}></Image>
                </TouchableWithoutFeedback>
            </View>
            <Text style={listStyle.deviceName}>{device.name} </Text>
            <Text style={listStyle.deviceModel}>{device.model}</Text>  
          </View>
        )
      })
      return item;
          };
  return(
  <ScrollView>
    <Modal animationType="slide" transparent={true} visible={true} >
          <View style={modalStyle.selectModal}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{room:room}) }>
                <Image  style={modalStyle.leftIcon} source={require('./../images/icons/backIcon.png')}/>
              </TouchableWithoutFeedback>
              <Text style={[modalStyle.textSupLeft,modalStyle.colorText]}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{room:room, newDevices:newDevices})}>
                  <Text style={[modalStyle.textSupRight,modalStyle.colorText]}> OK </Text>
              </TouchableWithoutFeedback> 
              <Text style={modalStyle.title}> Adicionar Dispositivo</Text>
            <View style={{marginBottom:30}}> 
                <Text style={[modalStyle.titleSelectModal,{fontSize:15,marginTop:"10%",fontWeight: "600"}]}> Disponíveis para você</Text>
            </View>
            <View style={[listStyle.devicesView,{top:"12%",left:"0%"}]}>
              <DeviceList devicesList = {devicesList}></DeviceList>
            </View>
          </View>   
    </Modal> 
  </ScrollView>
  )}


  export default addDevicesRoom;