// List of required imports
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from './../../style/modalStyle'

// MAIN CONPONENT: creatingRoom()
const creatingRoom = ({route,navigation}) => {
  const {room} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} > 
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Rooms")}>
                  <Text style={[modalStyle.textSupLeft,modalStyle.colorText]}> Cancelar  </Text>               
                 </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Room 2",{room:room})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorTextDeactivated]}> Próximo </Text>
                </TouchableWithoutFeedback> 
                <Text style={modalStyle.subtitle}>Novo Ambiente  </Text>
                <Text style={[showText(room.devices),modalStyle.instructions]}>Adicione dispositivos para controlar ou executar tarefas automatizadas.</Text>  
                <View style={styles.devicesView}>
                    <DeviceList list = {room.devices}></DeviceList>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Add Devices",{room:room})}>
                    <View style={[modalStyle.button,modalStyle.colorButton,styles.buttonPosition]}>
                      <Text style={modalStyle.buttonText,modalStyle.colorText}> 
                      <Image source={require('./../../images/icons/add.png')}></Image>  Adicionar dispositivos
                      </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal> 
      </ScrollView>
    )
  }
 // Component: DeviceList: list the devices that are registered in the room
   const DeviceList = ({list})=> {
    const item = list.map((device)=>{
    var brand = device.brand.toLowerCase();
         var logo = require('./../../images/logomarcasDispositivos/sansung.png');
        return(
          <View style={styles.device} key={device.cod}>
            <View style={{flexDirection:"row", top:"8%",left:"8%"}}>
            <Image  source={logo} style={{marginRight:"20%"}}/>
            </View>
              <Text style={styles.deviceName}>{device.name} </Text>
            <Text style={styles.deviceModel}>{device.model}</Text>  
          </View>
        )
      })
      return item;
          }
// Styling the components 
const styles = StyleSheet.create({
  buttonPosition:{
    position:"absolute",
    top:"32%",
  },
  devicesView:{
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
    left:"6%", 
    top: "20%",
    lineHeight: 18,
    height: 54,
    width:"90%", 
    letterSpacing: -0.078
  },
  deviceModel: {
    top: "23%",
    left: "6%",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 11,
    lineHeight:13,
    fontStyle:"normal",
    fontWeight: "normal",
    },
    
})
// Dynamic Styles
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

// Exporting the main component
  export default creatingRoom;