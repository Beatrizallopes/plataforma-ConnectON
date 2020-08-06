// List of required imports
import React,{useState}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput,  Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from './../../style/modalStyle'

// MAIN CONPONENT: creatingRoom2()
const creatingRoom2 = ({route,navigation}) => {
  const {room} = route.params;
  const [value, onChangeText] = React.useState(room.name);
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} > 
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Rooms")}>
                  <Text style={[modalStyle.textSupLeft,modalStyle.colorText]}> Cancelar  </Text>               
                 </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Room 2",{room:room})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorTextDeactivated]}> Próximo </Text>
                </TouchableWithoutFeedback> 
                <Text style={modalStyle.title}>Novo Ambiente  </Text>
                <View style={styles.input}>
                <Text style={modalStyle.inputLabel}>NOME DO AMBIENTE </Text>
                <TextInput style={modalStyle.inputBox}
                onChangeText={text => onChangeText(text)}
                value={value}
                ></TextInput>
              </View>
            </View>
        </Modal> 
      </ScrollView>
    )
  }
 
// Styling the components 
const styles = StyleSheet.create({
  buttonPosition:{
    position:"absolute",
    top:"32%",
  },
  input:{
    position:'absolute',
    top:"12%",
    left:"8%",
    width:"88%"
  },
})


// Exporting the main component
  export default creatingRoom2;