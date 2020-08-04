// List of required imports
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';

// MAIN CONPONENT: creatingRoom()
const creatingRoom = ({route,navigation}) => {
  const {room} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} > 
            <View style={styles.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Rooms")}>
                  <Text style={styles.cancel}> Cancelar  </Text>               
                 </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Room 2",{room:room})}>
                    <Text style={styles.next}> Próximo </Text>
                </TouchableWithoutFeedback> 
                <View style={{flexDirection:"column",top:"12%",left:10}}>
                  <Text style={styles.when}>Novo Ambiente  </Text>
                  <Text style={[showText(room.devices),styles.instructions]}>Adicione dispositivos para controlar ou executar tarefas automatizadas.</Text>  
                <View style={styles.devicesView}>
                  <DeviceList list = {room.devices}></DeviceList>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Add Devices",{room:room})}>
                  <View style={styles.createButton}>
                    <Text style={[styles.buttonText,{color:"#F18929"}]}> <Image source={require('./../../images/icons/addAmbiente.png')}></Image>  Adicionar dispositivos</Text>
                  </View>
                </TouchableWithoutFeedback>
                </View>
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
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modal: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    alignItems: "center", 
  },
  next:{
    position:"absolute",
    top:"5%",
    color: "rgba(255, 255, 255, 0.3)",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  cancel:{
    position:"absolute",
    top:"5%",
    color: "#F18929",
    fontWeight: "600",
    fontSize: 17,
    left:"8%",
    lineHeight: 22,
  },
  when:{
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.352,
    color: "#FFFFFF",
    position:"absolute",
  },
  instructions:{
    marginTop:"10%",
    width: 343,
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.55)",
  },
  createButton: {
    marginTop:"5%",
    width: 343,
    height:56,
    paddingVertical:8,
    paddingHorizontal:32,
    backgroundColor:"rgba(241, 137, 41, 0.3)",
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
    color:"#F18929",       
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