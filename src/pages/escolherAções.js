// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button, Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import Input from '../components/input';
import grupos from '../funcoes/separarGruposAlfa';
import criarGatilho from './criarGatilho1';

const escolherAções = ({route,navigation}) => {
  // Pegando os dados de navegação
  const {gatilho} = route.params;
       return(
        <ScrollView>
       <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Gatilho 3",{gatilho:gatilho})}>
           <Image style={styles.fecharModal} source={require("./../images/icons/fecharModal.png")}></Image>
            </TouchableWithoutFeedback>
            <View style={{marginBottom:30}}> 
              <Text style={styles.ambientes}> Ações</Text>
            </View>
            <View style={{width:"110%"}}>
            <Input label="" placeholder="Buscar Ações..." /> 
            </View>
          {/* {itemLista} */}
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

  export default escolherAções;