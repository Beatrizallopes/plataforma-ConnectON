// List of required imports 
import React, { useState }  from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import groupsFav from '../funcoes/filtrarFavoritos';
import groupsFav from '../funcoes/showFavorites';
import Input from '../components/input';

// Component GroupRooms: component that renders all of the groups of rooms that are registered in the database
 const GroupRooms = () => {
// List of variables used in GroupRooms
  const navigation = useNavigation();
  var countGroups = 0;
// Mapping the component groups (simulating the database) that stores all the rooms into groups divided by it's first letter
  const listItem = groupsFav.map((group) => {
      var letter = group[0].name.substring(0,1); 
      var qtRooms = group.length - 1; // stores the quantity of rooms inside the group
      var groupNumber = countGroups; //  stores the position of the group in the groups array
      var position; // stores the position of the room inside the group
      countGroups = countGroups + 1; 
// Mapping the component group:
      const item = group.map((room) => {
        const [favorite, setfavorite] = useState(room.ehFavorito); // state of the room: favorite or not. At first uses the initial state of the room
        position = roomPosition(room.id,qtRooms); 
// Changing the favorite icon based on if the room it's favorited or not:
        var iconFavoriteURL =  require('./../images/icons/naoFavorito.png');      
        if (favorite) { 
          iconFavoriteURL = require('./../images/icons/favorito.png');
        }
// Now, rendering the each room:
        return (
          <View style={[indicator(room.color,position),styles.roomList]} key={room.id}>
              <TouchableWithoutFeedback onPress={() => {setfavorite(!favorite);}}>
                  <Image source={iconFavoriteURL} style={{left: 30}, {top: 12}} ></Image>
              </TouchableWithoutFeedback>
              <Text style={styles.text}>{room.name}</Text> 
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Ambiente',{grupoSelecionado:groupNumber,ambienteSelecionado:room.id,codAmbiente:room.cod})}>             
                  <Text style={styles.infoQuantity}>{room.qtyMod} 
                      <Image style={{borderWidth:10,borderColor:"red"}} source={require('./../images/icons/setaDireita.png')}/>         
                  </Text>
              </TouchableWithoutFeedback> 
          </View>
              )})
// Now, rendering each group of rooms:
      return (
        <SafeAreaView key={letter} >
            <Text style={styles.letter}>{letter}</Text>
            <View style={styles.line}>{item}</View>
        </SafeAreaView>
            )})
// Now, rendering the entire list of groups:
    return listItem
          }     
// MAIN COMPONENT: Rooms 
const FavoriteRooms = ({navigation}) => {
  const room = {name:"Ambiente",dispositivos:[],color:""};
// Rendering the Rooms's page:
  return (
   <ScrollView style={styles.body}>
      <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Ambiente",{ambiente:room})}>
              <Image  style={styles.iconLeft} source={require('./../images/icons/addRoom.png')}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
              <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/moreInfo.png')}/>
          </TouchableWithoutFeedback>
      </View> 
      <Text style={styles.title}> Ambientes </Text>
          <Input label="" placeholder="Buscar Ambiente..." />
          <View style={styles.switchFav}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Rooms')}> 
                  <Text style={styles.switchAll}>Todos</Text>
              </TouchableWithoutFeedback>
              <Text style={styles.switchFavorites}>Favoritos</Text>
          </View>       
          <GroupRooms></GroupRooms>
          <View style={{height:20}}></View>      
   </ScrollView>
  );
};
// Functions used in this code:
// Function roomPosition(room,qtyTotal): returns the type of position that the room is placed in the group
var roomPosition = function roomPosition(room,qtyTotal) {
  var position;
  if(room < qtyTotal) {
    if(room == "0") {
      position = "first";
    } else {
      position = "inBetween";
    }
  } else {
    if(qtyTotal == 0) {
      position = "unique";
    } else {
      position = "last";
    }
  }
  return position;
}
// Function indicator(myColor,position): returns the style of the component that represents the room, based on it's position and color
var indicator = function(myColor, position) {
  if(position ==='first'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderTopStartRadius:12,
    }
  };

  if(position ==='inBetween'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
    }
  };

  if(position ==='last'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
    }
  }

  if(position=='unique'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      borderTopStartRadius:12,
    }
  } 

}

// Styling the components:
const styles = StyleSheet.create({
 body: {
   flex:1,
   backgroundColor: "#000000",
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
iconLeft:{
  position: "absolute",
  right: 22,
  top: 54
},
title:{
  color:"white",
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
// Groups's style:
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
infoQuantity: {
  textAlign: "right",
  color: "rgba(235, 235, 245, 0.6)",
  marginHorizontal:10,
  bottom:"40%",
  padding:0,
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
// Switch's style:
switchFav:{
  width:"90%",
  height: 32,
  left: 16,
  backgroundColor:"rgba(255, 255, 255, 0.1)",
  borderRadius: 8,
  marginTop:12,
},
switchAll:{
  height: 32,
  width: "50%",
  borderRadius: 8,
  fontSize: 12,
  lineHeight: 16,
  textAlign: "center",
  textAlignVertical:"center",
  color: "#FFFFFF",
},
switchFavorites:{
  left:"50%",
  width: "50%",
  fontSize: 12,
  lineHeight: 16,
  textAlign: "center",
  textAlignVertical:"center",
  color: "#FFFFFF",
  top:"-95%",
  backgroundColor:"rgba(255, 255, 255, 0.1)",
  height: 32,
  borderRadius: 8,
},
roomList:{
  height: 48,
  paddingLeft:15,
}
});

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default FavoriteRooms

