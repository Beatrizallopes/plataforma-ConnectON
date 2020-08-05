// List of required imports
import React   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import modalStyle from '../../style/modalStyle';

// MAIN CONPONENT: creatingTrigger3
const creatingTrigger3 = ({route,navigation}) => {
  const {trigger} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 2",{trigger:trigger})}>
                  <Image  style={modalStyle.leftIcon} source={require('./../../images/icons/voltarGatilho.png')}/>
                </TouchableWithoutFeedback>
                <Text style={[modalStyle.textSupLeft,modalStyle.colorTextTrigger]}> Voltar  </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 4",{trigger:trigger})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorTextTrigger]}> Seguinte </Text>
                </TouchableWithoutFeedback> 
                <Text style={modalStyle.title}> Novo Gatilho </Text>
                <Text style={modalStyle.subtitle}>Ações </Text>
                <Text style={[modalStyle.instructions]}>Crie ações a serem executadas</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Choose Trigger Actions",{trigger:trigger})}>
                  <View style={[modalStyle.button,styles.positionButton]}>
                    <Text style={modalStyle.buttonText,modalStyle.colorTextTrigger}> 
                    <Image source={require('./../../images/icons/escolherAções.png')}></Image>  Escolher ações</Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal> 
      </ScrollView>
    )
  }
 
// Styling the components
const styles = StyleSheet.create({
    positionButton: {
    position:"relative",
    top:"32%",
    },
  })

  export default creatingTrigger3;