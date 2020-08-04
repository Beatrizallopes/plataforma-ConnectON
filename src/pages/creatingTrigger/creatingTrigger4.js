// List of required imports
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback,TextInput,Switch} from 'react-native';

// MAIN COMPONENT: creatingTrigger4
const creatingTrigger4= ({route,navigation}) => {
  const {trigger} = route.params;
  const [value, onChangeText] = React.useState(trigger.name);
  trigger.name = value;

return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Create Trigger 3",{trigger:trigger})}>
                <Image  style={styles.backIcon} source={require('./../../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
              <Text style={styles.back}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Automations")}} >
                  <Text style={styles.next}> Concluir </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.title}> Novo Gatilho </Text>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>NOME DO GATILHO </Text>
                <TextInput style={styles.searchInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                ></TextInput>
              </View>
          </View>
        </View> 
      </Modal> 
    </ScrollView>
  )
}
// Styling the components
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modal: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    alignItems: "center", 
  },
  title:{
    position:"absolute",
    color:"white",
    fontSize: 17,
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.374,
    top:"5%",
    marginHorizontal:15,
  },
  next:{
    position:"absolute",
    top:"5%",
    color: "#D66075",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  back:{
    position:"absolute",
    top:"5%",
    color: "#D66075",
    fontWeight: "600",
    fontSize: 17,
    left:"10%",
    lineHeight: 22,
  },
  backIcon:{
    position: "absolute", 
    top: "5%",
    left:"5%"
  },
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
  instructions:{
    width: 343,
    height: 40,
    left: "2%",
    top: "33%",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "rgba(255, 255, 255, 0.55)"
  }

  })

  export default creatingTrigger4;