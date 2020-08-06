import { StyleSheet } from 'react-native';

// Styling the modals
const listStyle = StyleSheet.create({
  // Colors used:

  // Room's list:
  roomList:{
    height: 48,
    paddingLeft:15,
    width:343,
  },
  room:{
      backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
      borderRadius: 12,
      width:"90%",
      alignSelf:"center",
      marginTop:52,
    },
  name: {
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
  groupLetter:{
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
});

// Dynamic Styles
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

// Function: roomPosition(id, totalQty) = identifies the position of the room in the list
const roomPosition = function(id,totalQty){
  var position;
  if(id < totalQty){
    if(id == 0){
      position = "inicial";
    } else{
      position = "meio";
    }
  } else {
    if(totalQty == 0){
      position = "unico"
    } else{
      position = "final"
    }
  }
  return position
}

 export {listStyle,indicator,roomPosition};