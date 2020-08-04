// List of required imports 
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Modal, TouchableWithoutFeedback} from 'react-native';
import listaRooms from "../dados";
import grupos from "../funcoes/separarGruposAlfa";
import CardAuto from "../components/automationCardDisp"

// Simulating the data from a database
var automationList = [
  {name:"Expediente", schedule:"08:00 as 18:00", nextEvent:"00:17:34", message:"Encerrará em breve", cod:"1"},
  {name:"Hora Extra", schedule:" ", nextEvent:"Sábado, 08:00 as 18:00", message:"Daqui a 3 dias", cod:"2"},
  {name:"Intervalo", schedule:"12:00 as 14:00 ", nextEvent:"Segunda, 12:00 as 14:00", message:"Daqui a 5 dias", cod:"3"},
]
var devicesList = [
  {name:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"1", temperature: 24, speed:3},
  {name:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"2", temperature:17,speed:2},
  {name:"Ar-Condicionado Split Hi Wall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"3", temperature:18,speed:2},
]
 var room = listaRooms[0];

// Component AutomationList: renders the list of automations/triggers registered in the room
const AutomationList = () => {
// Mapping the automations inside the room's automation list 
  const autoItem = automationList.map((automation)=>{
    return(
      <View key={automation.cod}>
      <CardAuto name={automation.name} schedule={automation.schedule} nextEvent={automation.nextEvent} message={automation.message}></CardAuto>
      </View>
    )}) 
// Rendering the mapped itens:
    return autoItem
}
// Component DeviceList: renders the list of devices registered in the room 
  const DeviceList = ()=> {
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
  const {roomCod}=route.params;
  room = grupos[selectedGroup][selectedRoom]; 
// Rendering the main component
  return (
   <ScrollView style={styles.body}>
      <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Rooms") }>
              <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
          </TouchableWithoutFeedback>
          <Text style={styles.rooms}> Rooms  </Text>
          <TouchableWithoutFeedback onPress={() => {seteditModal(true);}}>
            <Text style={styles.edit}> Editar </Text>
          </TouchableWithoutFeedback> 
     </View> 
      <Text style={styles.title}> {room.name} </Text>  
      <Text style={styles.notifications}> Notificações </Text>
      <TouchableWithoutFeedback onPress={() => alert("Notificações")}>
        <Image style={{position:"absolute",marginRight: 4,right:"8%",top:"22%"}} source={require('./../images/icons/setaDireitaTransp.png')}/>
      </TouchableWithoutFeedback>
{/* Automation/Triggers area */}
      <View style={styles.automationsView}>
          <Text style={{color: "white",fontSize: 17,fontStyle:"normal",fontWeight: "600"}}> Automações</Text>
          <ScrollView style={styles.automationsList} horizontal={true}>
              <AutomationList></AutomationList>
              <View style={{height:20}}></View>      
          </ScrollView>
      </View>
{/* Devices area*/}
      <Text style={styles.devicesTitle}> Dispositivos </Text>
      <View style={styles.devicesView}>
          <DeviceList></DeviceList>
          {/*  Button add device: */}
          <View style={styles.device}>
             <TouchableWithoutFeedback onPress={() => alert("Adicionar device!")}>
                 <Image  style={{position: "absolute", top:8, left:8}} source={require('./../images/icons/adicionarCirculo.png')}/>
             </TouchableWithoutFeedback>
             <Text style={{position:"relative", color: "white",fontSize: 15, left: "4.76%", right:"4.76%", top: "77%", letterSpacing: -0.24}}>Adicionar dispositivo</Text>
          </View> 
      </View>
 {/* The code below is the modal that opens when the user wants to edit the room. It is the Edit Modal. */}
      <Modal animationType="slide" transparent={true} visible={editModal} >
          <View style={styles.centeredView}>
              <View style={styles.editModal}>
                  <TouchableWithoutFeedback onPress={() => { seteditModal(!editModal);}}>
                      <Text style={styles.superiorButtons}> Cancelar  </Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={() => alert("Salvar Alterações")}>
                      <Text style={[styles.superiorButtons,{left:"90%"}]}> Confirmar </Text>
                  </TouchableWithoutFeedback>
                  <Text style={styles.inputLabel}>NOME DO AMBIENTE</Text>
                  <TextInput style={styles.inputName}></TextInput>
              </View>
           </View>
       </Modal>
{/* Edit's modal ending */}
   </ScrollView>
  );
};

// Styling the components:
const styles = StyleSheet.create({
 title:{
   color:room.cor,
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
  color: "#F18929",
  width: 44,
  fontWeight: "600",
  fontSize: 17,
 },
 rooms:{
  left: 24,
  top: "55%",
  color: "#F18929",
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
  marginTop:"10%",
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
    color: "white",
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
    color: "white",
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
    backgroundColor:  "#2c2c2c",
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
    color: "#F18929",
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
// Edit's modal
editModal: {
  height:"100%",
  width:"100%",
  margin: 20,
  backgroundColor:  "#1c1c1c",
  padding: "9%",
  alignItems: "center",
  shadowColor: "#000",
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
inputLabel:{
  fontSize: 13,
  color:"rgba(255, 255, 255, 0.5)",
  top:"10%",
  right:"35%"
},
inputName:{
  position:"absolute",
  width: "110%",
  height: 42,
  left: 16,
  top: "21%", 
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  borderRadius: 10,
},
})
// Exporting the main component
export default Room


