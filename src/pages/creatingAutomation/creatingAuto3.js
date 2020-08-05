// List of required imports
import React   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import modalStyle from './../../style/modalStyle'
// MAIN CONPONENT: creatingAuto3
const creatingAuto3 = ({route,navigation}) => {
  const {automation} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 2",{automation:automation})}>
                  <Image  style={modalStyle.leftIcon} source={require('./../../images/icons/voltarAutomação.png')}/>
                </TouchableWithoutFeedback>
                <Text style={[modalStyle.textSupLeft,modalStyle.colorTextAuto]}> Voltar  </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 4",{automation:automation})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorTextAuto]}> Seguinte </Text>
                </TouchableWithoutFeedback> 
                <Text style={modalStyle.title}> Nova Automação </Text>
                <Text style={modalStyle.subtitle}>Ações </Text>
                <Text style={modalStyle.instructions}>Crie ações a serem executadas</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Choose Actions Automation",{automation:automation})}>
                  <View style={[modalStyle.button,styles.positionButton,modalStyle.colorButtonAuto]}>
                    <Text style={modalStyle.buttonText,modalStyle.colorTextAuto}> 
                    <Image source={require('./../../images/icons/escolherAçõesAuto.png')}></Image>  Escolher ações</Text>
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

  export default creatingAuto3;