// List of required imports
import React,{useState}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback,TextInput,Switch} from 'react-native';
import modalStyle from './../style/modalStyle'

// MAIN COMPONENT: notificationsRoom
const notificationsRoom= ({route,navigation}) => {
  const {room} = route.params;
  const [automationsEnable, setAutomationsEnable] = useState(false);
  const [errorsEnable, setErrorsEnable] = useState(false);
  const [silentModeEnable, setSilentModeEnable] = useState(false);

  const toggleAuto = () => setAutomationsEnable(previousState => !previousState);
  const toggleErrors = () => setErrorsEnable(previousState => !previousState);
  const toggleSilentMode = () => setSilentModeEnable(previousState => !previousState);

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
          <View style={modalStyle.modal}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{room:room})}>
                <Image  style={modalStyle.leftIcon} source={require('./../images/icons/backIcon.png')}/>
              </TouchableWithoutFeedback>
              <Text style={[modalStyle.textSupLeft,modalStyle.colorText]}> {room.nome} </Text>
              <Text style={[modalStyle.titleSelectModal, {left:"10%", top:"10%"}]}>Notificações</Text>
              <View style={styles.selectFunc}>
                  <Text style={{color:"white",fontSize:17,top:"18%",left:"5%"}}> Automações</Text>
                  <Switch style = {{bottom:"30%",right:"8%"}}
                    trackColor={{ false: "#767577", true: "#2EC754" }}
                    thumbColor={automationsEnable ? "#f4f3f4" : "#f4f3f4"}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleAuto}
                    value={automationsEnable}
                />
              </View>
              <Text style={[modalStyle.instructions,styles.positionInstructions]}> Alerta quando as automações deste ambiente forem iniciadas, finalizadas ou desativadas.</Text>
          
              <View style={styles.selectFunc}>
                  <Text style={{color:"white",fontSize:17,top:"18%",left:"5%"}}> Erros</Text>
                  <Switch style = {{bottom:"30%",right:"8%"}}
                    trackColor={{ false: "#767577", true: "#2EC754" }}
                    thumbColor={errorsEnable ? "#f4f3f4" : "#f4f3f4"}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleErrors}
                    value={errorsEnable}
                />
              </View>
              <Text style={[modalStyle.instructions,styles.positionInstructions]}> Você receberá um alerta quando algum aparelho deste ambiente não estiver funcionando normalmente. </Text>

              <View style={styles.selectFunc}>
                  <Text style={{color:"white",fontSize:17,top:"18%",left:"5%"}}> Silenciar</Text>
                  <Switch style = {{bottom:"30%",right:"8%"}}
                    trackColor={{ false: "#767577", true: "#2EC754" }}
                    thumbColor={silentModeEnable ? "#f4f3f4" : "#f4f3f4"}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSilentMode}
                    value={silentModeEnable}
                />
              </View>
              <Text style={[modalStyle.instructions,styles.positionInstructions]}> Quando silenciadas, não serão enviadas notificações por push. </Text>

          </View>
      </Modal> 
    </ScrollView>
  )
}
// Styling the components
const styles = StyleSheet.create({
  selectFunc:{
    width:"88%",
    height:48,
    top:"20%",
    left:"2%",
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
    borderRadius: 8,
  },
  positionInstructions:{
    position:"relative",
    left: "0%",
    top: "22%",
    textAlign:"left",
    marginBottom:40,
  }

  })

  export default notificationsRoom;