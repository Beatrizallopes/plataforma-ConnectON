// List of required imports 
import React,{useState}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import Input from '../../components/input';
import grupos from '../../funcoes/separarGruposAlfa';

// MAIN COMPONENT: selectRoomsAuto
const selectRoomsAuto = ({route,navigation}) => {
  const {automation} = route.params;
  var i = 0; // variable of group control
  const itemGroups = grupos.map((group) => { // Mapping the groups inside the array
      var j =0; // variable to store de number of the room inside the group (room j of the room i)
      var letter = group[0].nome.substring(0,1); 
      var qtyRoom = group.length - 1;
      var position;
      const item = group.map((room) => { // Mapping the rooms inside the group
        var alreadySel = false;
        var z = 0; // indetify the position of the selected room 
// Checking if the room is already on the list
        for(var m=0;m<automation.roomsSel.length;m++){
          if(automation.roomsSel[m].group == i && automation.roomsSel[m].room == j){
              alreadySel = true;
              z = m;
          }   
        }
// FIXME: this logic is a bit wrong, even thought it works 
        const [selected, setSelected] = useState(alreadySel);
        if(selected){
          var urlCheckbox = require('./../../images/icons/ambSel.png');
          if(!selected){
            var urlCheckbox = require('./../../images/icons/ambNaoSel.png');
          }
          if(!alreadySel){
            var element = {group:0,room:0}
            element.group= i;
            element.room = j;
            element.id = ("g"+i+"a"+j).toString();
            automation.roomsSel.push(element);
          }        
        } else {
          var urlCheckbox = require('./../../images/icons/ambNaoSel.png');
          if(alreadySel){
            automation.roomsSel.splice(z,1);
          }
        }
        j = j + 1; // Incrementing the room number
        position = roomPosition(room.id,qtyRoom);
// Now, rendering the list of rooms inside a letter group, this is what item returns:
        return (
          <View style={[indicator(room.cor,position),styles.roomList]} key={room.id}>
            <TouchableWithoutFeedback   onPress={() => {setSelected(!selected);}}>
              <Image source={urlCheckbox} style={{left: 30}, {top: 12}} ></Image>
             </TouchableWithoutFeedback>
            <Text style={styles.text}>{room.ehFavorito}{room.nome} </Text>  
          </View>
              )
      })
      i = i+1; // incrementing the group number
// Now, rendering the list of groups, this is what itemGroups returns:
      return(
        <SafeAreaView key={letter} >
          <Text style={styles.letter}>{letter}</Text>
          <View style={styles.line}>
            {item}                 
          </View>
        </SafeAreaView>
            ) 
          }) 
// Now, lets render the entire componente 
       return(
        <ScrollView>
           <Modal animationType="slide" transparent={true} visible={true} >
              <View style={styles.centeredView}>
                <View style={styles.selectRoomsModal}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 2",{automation:automation})}>
                        <Image style={styles.closeButton} source={require("./../../images/icons/fecharModal.png")}></Image>
                    </TouchableWithoutFeedback>
                    <View style={{marginBottom:30}}> 
                        <Text style={styles.rooms}> Ambientes</Text>
                    </View>
                    <View style={{width:"110%"}}>
                        <Input label="" placeholder="Buscar Ambiente..." /> 
                    </View>
                    {itemGroups}
                </View>   
              </View>
          </Modal>
        </ScrollView>
       )
   }

// Styling the componentes
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
    selectRoomsModal: {
      height:"100%",
      width:"100%",
      backgroundColor: "rgb(44,44,44)",
      padding: "9%",
      alignItems: "center", 
    },
    closeButton:{
      position:"absolute",
      top:"4%",
      right:"6%",
      backgroundColor:"rgba(255, 255, 255, 0.13);",
      borderRadius:20
    },
    rooms:{
      position:"absolute",
      top:"5%",
      right:"8%",
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.364,
      color: "#FFFFFF",
    },
// Room's list
    line:{
      backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
      borderRadius: 12,
      width:"90%",
      alignSelf:"center",
      marginTop:52,
    },
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
    letter:{
      color:"#FFFFFF",
      fontWeight: "600",
      fontSize: 17,
      lineHeight: 22,
      position: "absolute",
      width: 10,
      height: 24,
      left: "5%",
      marginTop:18,
    },
    roomList:{
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

  export default selectRoomsAuto;