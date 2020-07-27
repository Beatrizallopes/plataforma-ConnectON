// Importações necessárias
import React  from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';
import Input from './../../components/input';

const escolherAçõesAuto = ({route,navigation}) => {

  const {automação} = route.params;

  return(
  <ScrollView>
    <Modal animationType="slide" transparent={true} visible={true} >
      <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Automação 3",{automação:automação})}>
                <Image style={styles.fecharModal} source={require("./../../images/icons/fecharModal.png")}></Image>
            </TouchableWithoutFeedback>
            <View style={{marginBottom:30}}> 
                <Text style={styles.ambientes}> Ações</Text>
            </View>
            <View style={{width:"110%"}}>
              <Input label="" placeholder="Buscar Ações..." /> 
              </View>
          </View>   
          </View>
    </Modal>
  </ScrollView>
  )
    }

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modalSelecionarAmb: {
    height:"100%",
    width:"100%",
    backgroundColor: "rgb(44,44,44)",
    padding: "9%",
    alignItems: "center", 
  },
  fecharModal:{
    position:"absolute",
    top:"4%",
    right:"6%",
    backgroundColor:"rgba(255, 255, 255, 0.13);",
    borderRadius:20
  },
  ambientes:{
    position:"absolute",
    top:"5%",
    right:"25%",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.364,
    color: "#FFFFFF",
  }, 
})

  export default escolherAçõesAuto;