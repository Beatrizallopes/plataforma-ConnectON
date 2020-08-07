// Required Imports
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from '../../style/modalStyle';
import {listStyle} from '../../style/listStyle';

// Simulating the database
var devicesList = [
  {name:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"1", temperature: 24, speed:3},
  {name:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"2", temperature:17,speed:2},
  {name:"Ar-Condicionado Split Hi Wall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"3", temperature:18,speed:2},
  {name:"Teste Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"4", temperature: 24, speed:3},
  {name:"Ar-Condicionado Teste Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"5", temperature:17,speed:2},
  {name:"Ar-Condicionado Split TesteWall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"6", temperature:18,speed:2},
]
//
const addDevices = ({route,navigation}) => {
  const {room} = route.params; 

// DeviceList component:
  const DeviceList = ({devicesList})=> {
    const item = devicesList.map((device)=>{
      const [clicked,setClicked] = useState(false);
      var alreadySel = false;
      var z = 0; // variável para identificar em que posição de room.devices o device está
      // Verifiying if the room it's already selected
      for(var m=0 ; m < room.devices.length; m++){
        if(room.devices[m].name == device.name){
            alreadySel = true;
            z = m;
        }   
      }
      if(clicked){ // it was clicked
        if(alreadySel){
          room.devices.splice(z,1);
          var urlCheckBox = require('./../../images/icons/ambNaoSel.png');
        } else {
          room.devices.push(device); // it was clicked but it isn't on the list
          var urlCheckBox = require('./../../images/icons/ambSel.png');
        }        
      } else { // it was not clicked
        if(alreadySel){
          var urlCheckBox = require('./../../images/icons/ambSel.png');
        } else {
          var urlCheckBox = require('./../../images/icons/ambNaoSel.png');
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
            <Text style={listStyle.deviceName}>{device.name} </Text>
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