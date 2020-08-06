// List of required imports
import React,{useState}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback,TextInput,Switch} from 'react-native';
import modalStyle from './../../style/modalStyle'

// MAIN COMPONENT: creatingAuto4
const creatingAuto4= ({route,navigation}) => {
  const {automation} = route.params;
  const [value, onChangeText] = React.useState(automation.name);
  const [isEnabled, setIsEnabled] = useState(false);
  automation.name = value;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  automation.persistent = isEnabled;

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
          <View style={modalStyle.modal}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Automation 3",{automation:automation})}>
                <Image  style={modalStyle.leftIcon} source={require('./../../images/icons/voltarAutomação.png')}/>
              </TouchableWithoutFeedback>
              <Text style={[modalStyle.textSupLeft,modalStyle.colorTextAuto]}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Automations")}} >
                  <Text style={[modalStyle.textSupRight,modalStyle.colorTextAuto]}> Concluir </Text>
              </TouchableWithoutFeedback> 
              <Text style={modalStyle.title}> Nova Automação </Text>
              <View style={styles.input}>
                <Text style={modalStyle.inputLabel}>NOME DO GATILHO </Text>
                <TextInput style={modalStyle.inputBox}
                onChangeText={text => onChangeText(text)}
                value={value}
                ></TextInput>
              </View>
              <Text style={[styles.textSeg,styles.inputLabel]}>SEGURANÇA</Text>
              <View style={styles.selectFunc}>
                <Image style={{top:"20%",left:"5%"}} source={require('./../../images/icons/funcionamentoForçado.png')}></Image>
                <Text style={{bottom:"25%",left:"15%",color:"white",fontSize:17}}> Funcionamento Forçado</Text>
                <Switch style = {{bottom:"75%",right:"10%"}}
                  trackColor={{ false: "#767577", true: "#568AEA" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  // ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
               />
              </View>
              <Text style={[modalStyle.instructions,styles.positionInstructions]}>Se um usuário desligar um equipamento, ele será ligado novamente.
               <TouchableWithoutFeedback onPress={() => {alert("Saiba mais")}}><Text style={{color: "#568AEA",fontWeight:"bold"}}>Saiba mais.</Text></TouchableWithoutFeedback>
              </Text>
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
  textSeg:{
    position:"absolute",
    top:"25%",
    left:"10%",
  },
  selectFunc:{
    width:"88%",
    height:48,
    top:"30%",
    left:"2%",
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
    borderRadius: 8,
  },
  positionInstructions:{
    position:"relative",
    left: "2%",
    top: "33%",
  }

  })

  export default creatingAuto4;