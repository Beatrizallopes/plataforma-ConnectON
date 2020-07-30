// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TouchableWithoutFeedback,Modal,TextInput } from 'react-native';
import listaAmbientes from '../dados';
import Week from '../components/week'
import ListaAmb from '../components/listaAmbientes';

// Simulando a senha do usuário
const senha = "1234";

// Componente referente à página Automação
const Automação = ({route,navigation}) => { 
  const {automação} = route.params;
  const [modalDesabilitar,setmodalDesabilitar] = useState(false);
  var modal = false;
  const [habilitado,sethabilitado] = useState(automação.habilitado);
  automação.habilitado = habilitado;
  const [value, onChangeText] = React.useState("Sua senha");
  const [opção,setopção] = useState("0");
  var teste = automação.habilitado.toString()
  // Opções de desabilitar
  var opção1 = false// Desativar por tempo indeterminado
  var opção2 = false // Ativar novamente após 8 horas
  var opção3 = false // Ativar novamente após 24 horas
  if(opção == "1"){
    opção1 = true;
    opção2 = false;
    opção3 = false;
  }
  if(opção == "2"){
    opção1 = false;
    opção2 = true;
    opção3 = false;
  }
  if(opção == "3"){
    opção1 = false;
    opção2 = false;
    opção3 = true;
  }
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
// Função de desabilitar automação
const desabilitar = function(opção,senhaInput){
  var desabilitou = true;
  if(senhaInput == senha){
    desabilitou = false
  } else {
    alert("A senha está incorreta!")
  }
  sethabilitado(desabilitou);
}
// Componente do botão Habilitar/Desabilitar
const BotãoHab = function({habilitou}){
  if(habilitou){
    return(
      <TouchableWithoutFeedback onPress={() => setmodalDesabilitar(true)}>
          <Text style={[styles.desabilitar,{color: "#FE453B",}]}> Desabilitar </Text>
        </TouchableWithoutFeedback> 
    )
  }
  else{
    return(
      <TouchableWithoutFeedback onPress={() => sethabilitado(true)}>
          <Text style={[styles.desabilitar,{color:"#F18929"}]}> Habilitar </Text>
      </TouchableWithoutFeedback> 
    )
  }
}
//
  return (   
  <ScrollView  style={styles.body}  >
  <View style={{ paddingBottom: padding,flexDirection:"column"}}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Automações") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.automações}> Automações </Text>
        <BotãoHab habilitou={habilitado}></BotãoHab>
     </View>  
      <Text style={styles.titulo}>{automação.nome}</Text>  
      <View style={escurecer(automação.habilitado)}>
          <View style={styles.detalhes}>
              <Text style={styles.automaçãoProxEv}>{automação.tempoRestante}</Text>
              <Text style={styles.automaçãoMensagem}>{automação.mensagem}:</Text>
              <Text style={styles.automaçãoHorário}>{texto}</Text>
              <Week daysAuto={automação.dias}></Week>
          </View>
          <Text style={styles.ambientes}> Ambientes</Text>
          {/* Lista de Ambientes */}
          <View style={{left:"6%"}}>
              <ListaAmb lista={ambientes}></ListaAmb>
          </View>
              {/* Botão Adicionar Ambientes */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Adicionar Ambientes",{automação:automação})}>
              <View style={[styles.botãoAddAmb,sumirBotão(automação.habilitado)]}>
                <Image style={{alignSelf:"center",left:"60%"}} source={require('../images/icons/addAmbiente.png')}></Image>
                <Text style={styles.textoBotãoAmb}>Adicionar ambientes</Text>
              </View>
          </TouchableWithoutFeedback>
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
                <TouchableWithoutFeedback onPress={()=> setopção("1")}>
                    <Text style={[styles.opçõesModal,opçãoEscolhida(opção1)]}>Desativar por tempo indeterminado</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> setopção("2")}>
                  <Text style={[styles.opçõesModal,opçãoEscolhida(opção2)]}>Ativar novamente após 8 horas</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> setopção("3")}>
                    <Text style={[styles.opçõesModal,{borderBottomColor: "rgba(255, 255, 255, 0.12)"},opçãoEscolhida(opção3)]}>Ativar novamente após 24 horas</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.confirmeSenha}>CONFIRME SUA SENHA</Text>
                <TextInput style={styles.inputSenha}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    ></TextInput>
                <View style={{flexDirection:"row",left:"20%"}}>
                  <TouchableWithoutFeedback onPress={()=> setmodalDesabilitar(false)}> 
                    <Text style={[styles.opçãoInf,{borderRightWidth:1,borderRightColor:"rgba(255, 255, 255, 0.12)",paddingRight:"7%"}]}>Cancelar</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={()=> desabilitar(opção,value)}>
                    <Text style={styles.opçãoInf}>Desabilitar</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </Modal>
          {/*  Fim do Modal de desabilitar*/}
      </View>
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
  marginTop:"4%",
  left: "6%",
  width: 343,
  height: 154,
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
  borderRadius:  14,
 },
 ambientes:{
   marginTop:"4%",
   left: "6%",
   color:"white",
   fontSize:17,
   fontWeight:"600",
   lineHeight:22,
   marginBottom:20,
 },
 automaçãoProxEv:{
  position:"relative",
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
    height:50,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 32,
    position:"relative",
    left: "-2%",
    width: 343,
    backgroundColor: "rgba(241, 137, 41, 0.3)",
    borderRadius: 12,
    alignSelf: "center",
    textAlign:"center",
    marginTop:"5%",
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
    height:"68%",
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
    paddingHorizontal:12,
    paddingVertical:4,
    marginHorizontal:16,
    marginBottom:10,
  },
  confirmeSenha:{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize:13,
    top:"23%",
    right:"35%",
    // borderTopWidth: 1,
    // borderTopColor: "rgba(255, 255, 255, 0.12)"
  },
  inputSenha:{
    top:"30%",
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
    
  },
  opçãoInf:{
    top:"35%",
    marginRight:"7%",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#F18929",
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
// Função para vizualização da opção de desabilitar escolhida
const opçãoEscolhida = function(status){
  if(status){
    return{
      color: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: 8,
    }
   } else {
      return{
        color: "rgba(255, 255, 255, 0.6)",
      }
    }
}
// Função que escurece a tela quando a automação/gatilho está desabilitado
const escurecer = function(estaHabilitado){
  if(estaHabilitado){
    return {
      opacity:1,
    }
  } else {
    return{
      opacity: 0.4,
    }
  }
}
// Função que faz o botão de adicionar ambientes sumir
const sumirBotão = function(estaHabilitado){
  if(!estaHabilitado){
    return{
      opacity:0,
    }
  }
}


// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Automação;


