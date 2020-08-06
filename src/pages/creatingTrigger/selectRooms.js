// List of required imports 
import React,{useState}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import Input from '../../components/input';
import grupos from '../../funcoes/separarGruposAlfa';
import modalStyle from './../../style/modalStyle';
import {listStyle,indicator,roomPosition} from './../../style/listStyle'; 

// MAIN COMPONENT: selectRoomsTrig
const selectRoomsTrig = ({route,navigation}) => {
  const {trigger} = route.params;
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
        for(var m=0;m<trigger.roomsSel.length;m++){
          if(trigger.roomsSel[m].group == i && trigger.roomsSel[m].room == j){
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
            trigger.roomsSel.push(element);
          }        
        } else {
          var urlCheckbox = require('./../../images/icons/ambNaoSel.png');
          if(alreadySel){
            trigger.roomsSel.splice(z,1);
          }
        }
        j = j + 1; // Incrementing the room number
        position = roomPosition(room.id,qtyRoom);
// Now, rendering the list of rooms inside a letter group, this is what item returns:
        return (
          <View style={[indicator(room.cor,position),listStyle.roomList]} key={room.id}>
            <TouchableWithoutFeedback   onPress={() => {setSelected(!selected);}}>
              <Image source={urlCheckbox} style={{left: 30}, {top: 12}} ></Image>
             </TouchableWithoutFeedback>
            <Text style={listStyle.name}>{room.nome} </Text>  
          </View>
              )
      })
      i = i+1; // incrementing the group number
// Now, rendering the list of groups, this is what itemGroups returns:
      return(
        <SafeAreaView key={letter} >
          <Text style={listStyle.groupLetter}>{letter}</Text>
          <View style={listStyle.room}>
            {item}                 
          </View>
        </SafeAreaView>
            ) 
          }) 
// Now, lets render the entire componente 
       return(
        <ScrollView>
           <Modal animationType="slide" transparent={true} visible={true} >
                <View style={modalStyle.selectModal}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 2",{trigger:trigger})}>
                        <Image style={modalStyle.closeButton} source={require("./../../images/icons/fecharModal.png")}></Image>
                    </TouchableWithoutFeedback>
                    <View style={{marginBottom:30}}> 
                        <Text style={modalStyle.titleSelectModal}> Ambientes</Text>
                    </View>
                    <View style={{width:"110%"}}>
                        <Input label="" placeholder="Buscar Ambiente..." /> 
                    </View>
                    {itemGroups}
                </View>   
          </Modal>
        </ScrollView>
       )
   }


  export default selectRoomsTrig;