// List of required imports 
import React, { useState }  from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/input';
import {listStyle,indicator,roomPosition} from './../style/listStyle'; 
import groups from '../funcoes/splitingGroups';

// Component GroupRooms: component that renders all of the groups of rooms that are registered in the database
 const GroupRooms = () => {
// List of variables used in GroupRooms
  const navigation = useNavigation();
  var countGroups = 0;
// Mapping the component groups (simulating the database) that stores all the rooms into groups divided by it's first letter
  const listItem = groups.map((group) => {
      var letter = group[0].name.substring(0,1); 
      var qtRooms = group.length - 1; // stores the quantity of rooms inside the group
      var groupNumber = countGroups; //  stores the position of the group in the groups array
      var newDevices = [];
      var position; // stores the position of the room inside the group
      countGroups = countGroups + 1; 
// Mapping the component group:
      const item = group.map((room) => {
        const [favorite, setfavorite] = useState(room.isFavorite); // state of the room: favorite or not. At first uses the initial state of the room
        position = roomPosition(room.id,qtRooms); 
// Changing the favorite icon based on if the room it's favorited or not:
        var iconFavoriteURL =  require('./../images/icons/naoFavorito.png');      
        if (favorite) { 
          iconFavoriteURL = require('./../images/icons/favorito.png');
        }
// Now, rendering the each room:
        return (
          <View style={[indicator(room.color,position),listStyle.roomList]} key={room.id}>
              <TouchableWithoutFeedback onPress={() => {setfavorite(!favorite);}}>
                  <Image source={iconFavoriteURL} style={{left: 30}, {top: 12}} ></Image>
              </TouchableWithoutFeedback>
              <Text style={listStyle.name}>{room.isFavorite}{room.name}</Text> 
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Room',{selectedGroup:groupNumber,selectedRoom:room.id,roomCod:room.cod})}>             
                  <Text style={styles.infoQuantity}>{room.qtyMod} 
                      <Image style={{borderWidth:10,borderColor:"red"}} source={require('./../images/icons/setaDireita.png')}/>         
                  </Text>
              </TouchableWithoutFeedback> 
          </View>
              )})
// Now, rendering each group of rooms:
      return (
        <SafeAreaView key={letter} >
            <Text style={listStyle.groupLetter}>{letter}</Text>
            <View style={listStyle.room}>{item}</View>
        </SafeAreaView>
            )})
// Now, rendering the entire list of groups:
    return listItem
          }     
// MAIN COMPONENT: Rooms 
const Rooms = ({navigation}) => {
  const room = {name:"Ambiente",devices:[],color:"#D36D4B"};
// Rendering the Rooms's page:
  return (
   <ScrollView style={styles.body}>
      <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Room",{room:room})} width="24">
              <Image  style={styles.iconLeft} source={require('./../images/icons/addRoom.png')}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
              <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/moreInfo.png')}/>
          </TouchableWithoutFeedback>
      </View> 
      <Text style={styles.title}> Ambientes </Text>
          <Input label="" placeholder="Buscar Ambiente..." />
          <View style={styles.switchFav}>
              <Text style={styles.switchAll}>Todos</Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Favorite Rooms')}> 
                  <Text style={styles.switchFavorites}>Favoritos</Text>
              </TouchableWithoutFeedback>
          </View>       
          <GroupRooms></GroupRooms>
          <View style={{height:20}}></View>      
   </ScrollView>
  );
};
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
infoQuantity: {
  textAlign: "right",
  color: "rgba(235, 235, 245, 0.6)",
  bottom:"40%",
  padding:0,
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
  backgroundColor:"rgba(255, 255, 255, 0.1)",
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
  color: "#FFFFFF",
  top:"-75%",
},
roomList:{
  height: 48,
  paddingLeft:15,
}
});

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Rooms

