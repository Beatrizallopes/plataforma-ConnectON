// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback,TextInput,KeyboardAvoidingView} from 'react-native';

const criarAutomação4 = ({route,navigation}) => {
  const {automação} = route.params;
  const [value, onChangeText] = React.useState(automação.nome);
  automação.nome = value;
  // Código apenas para debugar
  var ambientes = "";
  for(var i=0;i<automação.ambientesSel.length;i++){
    ambientes = ambientes + "/G: " + automação.ambientesSel[i].grupo + " A: " + automação.ambientesSel[i].ambiente;
  }
  var texto = "Nome: " + automação.nome + "/HorárioInicio: " + automação.horarioInicio + "/HorárioFim: " + automação.horarioFim + "/Dias: " + automação.diasSemana + "/Ambientes: " + ambientes;
  //
return(
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Automação 3",{automação:automação})}>
                <Image  style={styles.iconeVoltar} source={require('./../../images/icons/voltarGatilho.png')}/>
              </TouchableWithoutFeedback>
              <Text style={styles.voltar}> Voltar  </Text>
              <TouchableWithoutFeedback onPress={() => {alert(texto);navigation.navigate("Automações")}} >
                  <Text style={styles.seguinte}> Concluir </Text>
              </TouchableWithoutFeedback> 
              <Text style={styles.titulo}>
                Nova Automação
              </Text>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>NOME DO GATILHO </Text>
                <TextInput style={styles.campoPesquisa}
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
// Componente grupos de ambientes
const styles = StyleSheet.create({

  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  modalSelecionarAmb: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    alignItems: "center", 
  },
  titulo:{
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
  seguinte:{
    position:"absolute",
    top:"5%",
    color: "#D66075",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  voltar:{
    position:"absolute",
    top:"5%",
    color: "#D66075",
    fontWeight: "600",
    fontSize: 17,
    left:"10%",
    lineHeight: 22,
  },
  iconeVoltar:{
    position: "absolute", 
    top: "5%",
    left:"5%"
  },
  input:{
    position:'absolute',
    top:"12%",
    left:"10%",
    width:"82%"
  },
  campoPesquisa:{
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

  export default criarAutomação4;