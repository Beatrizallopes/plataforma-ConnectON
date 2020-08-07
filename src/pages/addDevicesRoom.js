// List of required imports
import React  from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from '../style/modalStyle';


// MAIN CONPONENT: addDevices
const addDevicesRoom = ({route,navigation}) => {
  const {room} = route.params;
  const newDevices = [];
  return(
  <ScrollView>
    <Modal animationType="slide" transparent={true} visible={true} >
          <View style={modalStyle.selectModal}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{room:room}) }>
                <Image  style={modalStyle.leftIcon} source={require('./../images/icons/backIcon.png')}/>
              </TouchableWithoutFeedback>
              <Text style={[modalStyle.textSupLeft,modalStyle.colorText]}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{trigger:trigger,newDevices:newDevices})}>
                  <Text style={[modalStyle.textSupRight,modalStyle.colorText]}> OK </Text>
              </TouchableWithoutFeedback> 
              <Text style={modalStyle.title}> Adicionar Dispositivo</Text>
            <View style={{marginBottom:30}}> 
                <Text style={[modalStyle.titleSelectModal,{fontSize:15,marginTop:"10%",fontWeight: "600"}]}> Disponíveis para você</Text>
            </View>
          </View>   
    </Modal> 
  </ScrollView>
  )
    }


  export default addDevicesRoom;