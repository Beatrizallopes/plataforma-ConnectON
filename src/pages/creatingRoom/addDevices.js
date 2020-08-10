// Required Imports
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from '../../style/modalStyle';
import {listStyle} from '../../style/listStyle';
import {devicesList} from '../../data';

// MAIN COMPONENT: addDevices
const addDevices = ({route,navigation}) => {
  const {room} = route.params; 

// DeviceList component:
  const DeviceList = ({devicesList})=> {
    const item = devicesList.map((device)=>{
      var alreadySel = false;
      var z = 0; // variable to indetify the position of the device on room.devices
      // Verifiying if the room it's already selected
      for(var m=0; m < room.devices.length; m++){
        if(room.devices[m].name == device.name){
            alreadySel = true;
            z = m;
        }   
      }
      const [clicked,setClicked] = useState(alreadySel);
     if(alreadySel){
      var urlCheckBox = require('./../../images/icons/ambSel.png');
     } else {
      var urlCheckBox = require('./../../images/icons/ambNaoSel.png'); 
     }
     if(clicked){
      if(!alreadySel){
        room.devices.push(device);
        urlCheckBox = require('./../../images/icons/ambSel.png');
      }
     } else {
      if(alreadySel){     
        room.devices.splice(z,1);
        urlCheckBox = require('./../../images/icons/ambNaoSel.png');
      }
     }
     z = z + 1;
    var brand = device.brand.toLowerCase();
    var logo = require('./../../images/logomarcasDispositivos/sansung.png');
// Rendering each device
        return(
          <View style={listStyle.device} key={device.cod}>
            <View style={{flexDirection:"row", top:"8%",left:"8%"}}>
                <Image  source={logo} style={{marginRight:"20%"}}/>
                <TouchableWithoutFeedback   onPress={() => {setClicked(!clicked);}}>
                    <Image source={urlCheckBox} style={{top:"-2%"}}></Image>
                </TouchableWithoutFeedback>
            </View>
            <Text style={listStyle.deviceName}>{device.name}</Text>
            <Text style={listStyle.deviceModel}>{device.model}</Text>  
          </View>
        )
      })
      return item;
          }
// Now, rendering the main component
       return(
        <ScrollView>
          <Modal animationType="slide" transparent={true} visible={true} >
              <View style={[modalStyle.selectModal,{padding: "0%", alignItems: "baseline"}]}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Room",{room:room})}>
                  <Image style={modalStyle.closeButton} source={require("./../../images/icons/fecharModal.png")}></Image>
                </TouchableWithoutFeedback>
                <View style={{marginVertical:25,flexDirection:"column",left:"5%",width:"70%"}}> 
                  <Text style={styles.title}> Dispositivos </Text>
                  <Text style={[styles.title,{fontSize:22,marginTop:"8%"}]}> Instalados Recentemente</Text>
                </View>
                <View style={listStyle.devicesView}>
                  <DeviceList devicesList = {devicesList}></DeviceList>
                </View>
              </View>   
          </Modal>
       </ScrollView>
       )
  }
// Styling the components
const styles = StyleSheet.create({
    title:{
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.364,
      color: "#FFFFFF",
    },
  })

  export default addDevices;