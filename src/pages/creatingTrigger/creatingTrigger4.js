// List of required imports
import React  from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback,TextInput,Switch} from 'react-native';
import modalStyle from '../../style/modalStyle';

// MAIN COMPONENT: creatingTrigger4
const creatingTrigger4 = ({route,navigation}) => {
  const {trigger} = route.params;
  const [value, onChangeText] = React.useState(trigger.name);
  trigger.name = value;

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
          <View style={modalStyle.modal}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 3",{trigger:trigger})}>
                <Image  style={modalStyle.leftIcon} source={require('./../../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
              <Text style={[modalStyle.textSupLeft,modalStyle.colorTextTrigger]}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Automations")}} >
                  <Text style={[modalStyle.textSupRight,modalStyle.colorTextTrigger]}> Concluir </Text>
              </TouchableWithoutFeedback> 
              <Text style={modalStyle.title}> Novo Gatilho </Text>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>NOME DO GATILHO </Text>
                <TextInput style={styles.searchInput}
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
  input:{
    position:'absolute',
    top:"12%",
    left:"8%",
    width:"88%"
  },
  searchInput:{
    height:44,
    padding: 12,
    top:"20%",
    backgroundColor: "rgba(255, 255, 255,0.13)",
    borderRadius: 10,
    fontSize: 17,
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.3)",
       },
inputLabel:{
    fontSize: 13,
    color:"rgba(255, 255, 255, 0.5)",
},
  })

  export default creatingTrigger4;