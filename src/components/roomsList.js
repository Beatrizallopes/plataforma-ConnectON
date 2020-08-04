// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import grupos from '../funcoes/separarGruposAlfa';

// Componente Input
const RoomsList = ({list}) =>{
  if(list.length>0){
    var x = 0;
    var selectedRoom = list.map((room) => {
      // var element = groupRoom(room); 
      var roomName = room.nome;
      var color =  room.cor;
      var position = roomPosition(x,list.length-1);
      x = x + 1;
      var key = room.id + "/" +  Math.random();
      return(
        <View key={key} style={[indicator(color,position),styles.roomsList]}>
          <Text style={styles.text}>{roomName}</Text>
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
// Functions:
// Function groupRoom(room) = returns an object with the number of the group and room of the room
const groupRoom = (room) => {
  var g = 0;
  var r = 0;
  for (i = 0; i < grupos.length; i++){
    for( j =0; j < grupos[i].length; j++){
        if(grupos[i][j].nome == room.name){
          g = i;
          r = j;
        }
    }
  }
  return {group:g,room:r}
}
// Estilo do componente
const styles = StyleSheet.create({
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
// Exportando o componente
export default RoomsList;

