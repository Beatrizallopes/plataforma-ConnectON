// List of required imports
import React  from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import Input from '../../components/input';
import modalStyle from './../../style/modalStyle';


// MAIN CONPONENT: chooseActionsTrig
const chooseActionsTrig = ({route,navigation}) => {
  const {trigger} = route.params;
  return(
  <ScrollView>
    <Modal animationType="slide" transparent={true} visible={true} >
          <View style={modalStyle.selectModal}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 3",{trigger:trigger})}>
                <Image style={modalStyle.closeButton} source={require("./../../images/icons/fecharModal.png")}></Image>
            </TouchableWithoutFeedback>
            <View style={{marginBottom:30}}> 
                <Text style={modalStyle.titleSelectModal}> Ações</Text>
            </View>
            <View style={{width:"110%"}}>
              <Input label="" placeholder="Buscar Ações..." /> 
              </View>
          </View>   
    </Modal> 
  </ScrollView>
  )
    }


  export default chooseActionsTrig;