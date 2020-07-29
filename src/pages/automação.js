// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback,Modal,TextInput } from 'react-native';
import listaAmbientes from '../dados';
import Week from '../components/week'
import ListaAmb from '../components/listaAmbientes';

const Automação = ({route,navigation}) => { 
  const {automação} = route.params;
  const [modalDesabilitar,setmodalDesabilitar] = useState(false);
  var texto = automação.horario;
  var ambientes = identificaAmbientes(automação.ambientes)
  if(automação.tipo == "Automação"){
    var horario = automação.horario.split("/");
    texto = horario[0] + " às " + horario[1]
  }
  // Gambiarra para o problema do ScrollView, para visualizar o problema basta tirar o View logo depois do ScrollView
  var qtdAmbientes = automação.ambientes.length;
  var padding = 50;
  if(qtdAmbientes>4){
    padding = (qtdAmbientes-4)*50;
  }
  return (   
  <ScrollView  style={styles.body}  >
  <View style={{ paddingBottom: padding}}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.automações}> Automações  </Text>
        <TouchableWithoutFeedback onPress={() => setmodalDesabilitar(!modalDesabilitar)}>
          <Text style={styles.desabilitar}> Desabilitar </Text>
        </TouchableWithoutFeedback> 
     </View>  
      <Text style={styles.titulo}>{automação.nome}</Text>  
      <View style={styles.detalhes}>
          <Text style={styles.automaçãoProxEv}>{automação.tempoRestante}</Text>
          <Text style={styles.automaçãoMensagem}>{automação.mensagem}:</Text>
          <Text style={styles.automaçãoHorário}>{texto}</Text>
          <Week daysAuto={automação.dias}></Week>
      </View>
      <Text style={styles.ambientes}> Ambientes</Text>
      <TouchableWithoutFeedback>
        <View style={styles.botãoAddAmb}>
          <Image style={{alignSelf:"center",left:"60%"}} source={require('../images/icons/addAmbiente.png')}></Image>
          <Text style={styles.textoBotãoAmb}>Adicionar ambientes</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{top:"10%",left:"6%"}}>
          <ListaAmb lista={ambientes}></ListaAmb>
      </View>
      {/*  Modal de desabilitar*/}
      <Modal animationType="slide" transparent={true} visible={modalDesabilitar} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.controleTitulo}>Desabilitar</Text>
            {/* Botão de fechar o controle */}
            <TouchableWithoutFeedback onPress={() => { setmodalDesabilitar(!modalDesabilitar);}}>
              <Image style={styles.closeButton} source={require('../images/icons/fecharModal1.png')}/> 
            </TouchableWithoutFeedback> 
            <Text style={styles.perguntaModal} >Por quanto tempo você quer desabilitar <Text style={{fontWeight:"bold"}}>{automação.nome}</Text>?</Text>
            <Text style={styles.opçõesModal}>Desativar por tempo indeterminado</Text>
            <Text style={styles.opçõesModal}>Ativar novamente após 8 horas</Text>
            <Text style={[styles.opçõesModal,{borderBottomColor: "rgba(255, 255, 255, 0.12)",borderBottomWidth: 1,}]}>Ativar novamente após 24 horas</Text>
            <Text style={styles.confirmeSenha}>CONFIRME SUA SENHA</Text>
            <TextInput style={styles.inputSenha}>  <Image source={require('../images/icons/chaveSenha.png')}></Image>  Sua senha</TextInput>
          </View>
        </View>
      </Modal>
      {/*  Fim do Modal de desabilitar*/}
   </View>
   </ScrollView>

  );
};

// Estilização dos componentes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  titulo:{
   left: "6%",
   top:"2%",
   color:"white",
   fontSize: 34,
   fontFamily: "Barlow",
   fontWeight: "bold",
   lineHeight: 41,
   letterSpacing: 0.374,
   marginBottom:18,
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 desabilitar:{
  position: "absolute",
  right: 24,
  top: "55%",
  color: "#FE453B",
  fontWeight: "600",
  fontSize: 17,
 },
 automações:{
  left: 24,
  top: "55%",
  color: "#F18929",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 detalhes:{
  position:"relative",
  top:"4%",
  left: "6%",
  width: 343,
  height: 154,
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
  borderRadius:  14,
 },
 ambientes:{
   top:"8%",
   left: "6%",
   color:"white",
   fontSize:17,
   fontWeight:"600",
   lineHeight:22,
   
 },
 automaçãoProxEv:{
  position:"relative",
  // width:128,
  fontFamily: "Barlow",
  color: "#FFFFFF",
  fontSize: 11,
  fontWeight:"normal",
  left: "4%", 
  top: "25%",
  fontSize:34,
  lineHeight:41,
  letterSpacing:0.374,
  alignSelf:"flex-start",
  },
  automaçãoMensagem:{
    position:"absolute",
    height:22,
    left:"4%",
    top:"10%",
    color: "rgba(255, 255, 255, 0.44)",
    fontSize: 17,
    fontStyle:"normal",
    fontWeight: "normal", 
    lineHeight: 22,
    alignSelf:"flex-start"
  },
  automaçãoHorário:{
    position:"absolute",
    height:20,
    left:"4%",
    top:"55%",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#FFFFFF",
  },
  botãoAddAmb:{
    width:323,
    height:50,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 32,
    position:"relative",
    top: "12%",
    right:"2%",
    backgroundColor: "rgba(241, 137, 41, 0.3)",
    borderRadius: 12,
    alignSelf: "center",
    marginVertical: 16,
    textAlign:"center",
  },
  textoBotãoAmb:{
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#F18929",
    alignSelf:"center",
    marginLeft:10,
    left:"70%"
  },
  // Estilo do modal
  centeredView: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems: "center",
  },
  modalView: {
    height:"60%",
    width:"100%",
    margin: 20,
    backgroundColor:  "rgba(70, 70, 70, 0.95)",
    borderTopStartRadius:12,
    borderTopEndRadius:12,
    padding: "9%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position:"absolute",
    right: 14,
    top: 22,
  },
  controleTitulo:{
    position: "absolute",
    height: 34,
    left: 16,
    top: 22,// 5+17 = 22
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.364,
    color: "#FFFFFF",
  },
  perguntaModal:{
    top:"15%",
    right:"8%",
    width:323,
    fontSize: 17,
    lineHeight: 22, 
    letterSpacing: -0.408,
    color: "#FFFFFF",
    paddingBottom:20,
    borderBottomColor: "rgba(255, 255, 255, 0.12)",
    borderBottomWidth: 1,
  },
  opçõesModal:{
    top:"20%",
    right:"8%",
    width:323,
    fontSize: 17,
    lineHeight: 22, 
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.6)",
    paddingBottom:20,
  },
  confirmeSenha:{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize:13,
    top:"23%",
    right:"35%"
  },
  inputSenha:{
    top:"25%",
    right:"6%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical:12,
    width: 343,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    borderRadius: 10,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.3)"
    
  }
})
// Função para pegar info sobre os ambientes
const identificaAmbientes = function(lista){
var ambientes = [];
for(var i=0;i<listaAmbientes.length;i++){
  for(var j=0;j<lista.length;j++){
    if(listaAmbientes[i].nome == lista[j]){
      ambientes.push(listaAmbientes[i])
    } 
  }
}
return ambientes;
}
// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Automação;


