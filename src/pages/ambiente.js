// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image,Modal, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback,TouchableHighlight,} from 'react-native';
import listaAmbientes from "../dados";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import grupos from "../funcoes/separarGruposAlfa";
// Alguns dados utilizados para "simular" o banco de dados ///////////////////////////////////////////////////////////////////////////////////

var listaAutomacoes = [
  {nome:"Expediente",horario:"08:00 as 18:00",proxEvento:"00:17:34",mensagem:"Encerrará em breve",cod:"1"},
  {nome:"Hora Extra",horario:" ",proxEvento:"Sábado, 08:00 as 18:00",mensagem:"Daqui a 3 dias",cod:"2"},
  {nome:"Intervalo",horario:"12:00 as 14:00 ",proxEvento:"Segunda, 12:00 as 14:00",mensagem:"Daqui a 5 dias",cod:"3"},
]
var listaDispositivos = [
  {nome:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", marca:"Sansung", modelo:"AR18NVFPCWKNAZ", cod:"1", temperatura: "24", velocidade:3},
  {nome:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", marca:"Sansung", modelo:"S4-W12JA31A", cod:"2", temperatura:"17",velocidade:2},
]
var ambiente = listaAmbientes[0];


// Componentes que farão parte da Página /////////////////////////////////////////////////////////////////////////////////////////////////////////
// Componente Lista de Automações
class ListaAuto extends React.Component {
  render() {
    const itemD = listaAutomacoes.map((automacao)=>{
      return(
        <View style={styles.automação} key={automacao.cod}>
          <Text style={styles.automaçãoNome}>{automacao.nome}</Text>
          <Text style={styles.automaçãoHorario}>{automacao.horario}</Text>
          <Text style={styles.automaçãoProxEv}>{automacao.proxEvento}</Text>
          <Text style={styles.automaçãoMensagem}>{automacao.mensagem}</Text>
         </View>
      )
    })
    return itemD;
        }
        }
// Componente Lista de Dispositivos
  const ListaDispo = ()=> {
  const item = listaDispositivos.map((dispositivo)=>{
  const [modalVisible, setModalVisible] = useState(false);
  var marca = dispositivo.marca.toLowerCase();
      // var src = '../images/logomarcasDispositivos/'+ marca + '.png';
      // var srcLogo = src.toString();
      // var srcLogo = '../images/logomarcasDispositivos/sansung.png';
      // var buscaImagem = require(srcLogo);
      // Não estou conseguindo pegar as variáveis e utilizar no require: https://github.com/facebook/react-native/issues/6391
       var buscaImagem = require('../images/logomarcasDispositivos/sansung.png');
      return(
        <View style={styles.dispositivo} key={dispositivo.cod}>
          <Image  source={buscaImagem} style={{left: "5%",top:"9%"}}/>
        <TouchableWithoutFeedback  onPress={() => {setModalVisible(true);}}>
        <Text style={styles.dispositivoNome}>{dispositivo.nome} </Text>
        </TouchableWithoutFeedback>
        
        <Text style={styles.dispositivoModelo}>{dispositivo.modelo}</Text>  
      {/* Controle*/}
        <Modal animationType="slide" transparent={true} visible={modalVisible} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.controleTitulo}>Controle Remoto</Text>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible);}}>
              <Image style={styles.closeButton} source={require('../images/controle/fecharControle.png')}/> 
            </TouchableWithoutFeedback> 
            <Text style={styles.controleNome}>{dispositivo.nome}</Text>
            <Text style={styles.controleModelo}>{dispositivo.modelo}</Text>
            <Image source={require('../images/controle/ligaDesliga.png')} style={{position:"relative",top:"15%"}}/> 
            <View style={{top:"20%",left:16, flex: 1,flexDirection:"row",flexWrap:"wrap",}}>
             <View style={styles.controleTemperatura}>
              <Text style={{color:" rgba(255, 255, 255, 0.5)",fontSize:13}}>Temperatura</Text>
              <View style={styles.visorTemperatura}>
               <Text style={styles.valorTemperatura}>{dispositivo.temperatura}ºC</Text>
              </View>           
            </View>
            <Image style={{top:0,right:"18%"}} source={require('../images/controle/divisorControle.png')}/> 
            <View>
              <Text style={{color:" rgba(255, 255, 255, 0.5)",fontSize:13}} >Velocidade do Vento</Text>
              <View style={styles.visorVelocidade}>
                <Image style={{top:"20%",marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/> 
                <Image style={{top:"20%",marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/> 
                <Image style={{top:"20%"}} source={require('../images/controle/ventoVelocidade.png')}/> 
              </View> 
            </View>
          </View>
          </View>
        </View>
      </Modal>

        </View>
      )
    })
    return item;
        }

// Componente referente à página Ambiente (que utiliza os componentes criados anteriormente) /////////////////////////////////////////////////
const Ambiente = ({route,navigation}) => {  
 
  const {ambienteSelecionado} = route.params;
  const {grupoSelecionado} = route.params;
  const {codAmbiente}=route.params;
  ambiente = grupos[grupoSelecionado][ambienteSelecionado]; 
  //  ambiente = grupos[0][0];
   // ambiente = listaAmbientes[ambienteSelecionado]; 
  // const Ambiente = ({navigation}) => {
  return (
   <ScrollView style={styles.body}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Ambientes") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.ambientes}> Ambientes  </Text>
        <TouchableWithoutFeedback onPress={() => alert("Editar Ambiente")}>
         <Text style={styles.editar}> Editar </Text>
        </TouchableWithoutFeedback> 
     </View> 
      <Text style={styles.titulo}>
           {ambiente.nome}
      </Text>  
      <Text style={styles.notificações}>
          Notificações 
      </Text>
      <TouchableWithoutFeedback onPress={() => alert("Notificações")}>
        <Image style={{position:"absolute",marginRight: 4,right:"8%",top:"22%"}} source={require('./../images/icons/setaDireitaTransp.png')}/>
      </TouchableWithoutFeedback>

      {/* Automações */}
      <View style={styles.automaçõesView}>
        <Text style={{color: "white",fontSize: 17,fontStyle:"normal",fontWeight: "600"}}> Automações</Text>
        <ScrollView style={styles.listaAutomações} horizontal={true}>
          <ListaAuto></ListaAuto>
        </ScrollView>
      </View>

      {/* Dispositivos */}
      <Text style={styles.dispositivosTitulo}> Dispositivos </Text>
      <View style={styles.dispositivosView}>
        <ListaDispo></ListaDispo>
        {/* Adicionar dispositivo: */}
        <View style={styles.dispositivo}>
          <TouchableWithoutFeedback onPress={() => alert("Adicionar dispositivo!")}>
            <Image  style={{position: "absolute", top:8, left:8}} source={require('./../images/icons/adicionarCirculo.png')}/>
          </TouchableWithoutFeedback>
          <Text style={{position:"relative", color: "white",fontSize: 15, left: "4.76%", right:"4.76%", top: "77%", letterSpacing: -0.24}}>Adicionar dispositivo</Text>
        </View> 
      </View>

   </ScrollView>
  );
};


// Estilização dos componentes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
 titulo:{
   color:ambiente.cor,
   fontSize: 34,
   fontFamily: "Barlow",
   fontStyle: "normal",
   fontWeight: "bold",
   lineHeight: 41,
   letterSpacing: 0.374,
   left: 16,
   right: 16,
   top:10,
   marginBottom:18,
 },
 body: {
   flex:1,
   backgroundColor: "#000000",
 },
 icone:{
  width: 24,
  height: 24,
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 editar:{
  position: "absolute",
  right: 22,
  top: "20%",
  color: "#F18929",
  width: 44,
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 Addbutton:{
   backgroundColor:"red",
 },
 ambientes:{
  position: "absolute",
  left: 24,
  top: "55%",
  color: "#F18929",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
 },
 notificações:{
  height:48,
  padding: 12,
  width:"90%",
  left: 16,
  backgroundColor: "rgba(255, 255, 255,0.13)",
  borderRadius: 10,
  fontSize: 17,
  letterSpacing: -0.408,
  color: "#FFFFFF",
  marginTop:"10%",
 },
 automaçõesView:{
   left:16,
   marginTop:"8%",
  
 },
 listaAutomações:{
   width:"100%",
   height:149, 
  },
  automação:{
    width: 248,
    height: 126,
    backgroundColor: "rgba(255, 255, 255,0.13)",
    borderRadius: 12,
    left: 4,
    marginEnd:8,
    marginTop:23,
  },
  automaçãoNome: {
    color: "white",
    fontSize: 17,
    fontStyle:"normal",
    fontWeight: "600",
    left: 8,
    top: 8,
    lineHeight: 22
  },
  automaçãoHorario:{
    color: ambiente.cor,
    fontSize: 11,
    fontStyle:"normal",
    fontWeight: "normal",
    left: 8, 
    top: 8
  },
  automaçãoProxEv:{
    color: "white",
    fontSize: 15,
    fontStyle:"normal",
    fontWeight: "normal", 
    left: 8, 
    top: 45,
    letterSpacing: -0.24,
    lineHeight: 20
  },
  automaçãoMensagem:{
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 11,fontStyle:"normal",
    fontWeight: "normal", 
    left: 8, 
    top: 48,
    lineHeight: 13},
  dispositivosTitulo:{
    color: "white",
    fontSize: 17,
    fontStyle:"normal",
    fontWeight: "600",
    left:16,
    marginTop:"8%",
    marginBottom:17,
  },
  dispositivosView:{
    left:16, 
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
  },
  dispositivo:{
    //  width: 168,
    width:"45%",
    height: 126,
    backgroundColor: "rgba(255, 255, 255,0.13)",
    borderRadius: 12,
    left: 4,
    marginEnd:8,
    marginTop:8,
    flexDirection:"column",
    },
  dispositivoNome:{
    position:"relative",
    color: "white",
    fontSize: 13,
    fontStyle:"normal",
    fontWeight: "600",
    left: "4.76%", 
    right:"4.76%", 
    top: "20%",
    lineHeight: 18,
    height: 54,
    width:"90%", 
    letterSpacing: -0.078
  },
  dispositivoModelo: {
    top: "25%",
    left: "4.76%",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 11,
    lineHeight:13,
    fontStyle:"normal",
    fontWeight: "normal",
    },

// Estilo Controle 
    centeredView: {
      flex: 1,
      justifyContent:"flex-end",
      alignItems: "center",
    },
    modalView: {
      height:"55%",
      width:"100%",
      margin: 20,
      backgroundColor:  "#2c2c2c",
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
      elevation: 5
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
    controleNome:{
      position:"relative",
      color: "#FFFFFF",
      fontSize: 20,
      fontStyle:"normal",
      fontWeight: "600", 
      right:"6%", 
      top: 29,
      lineHeight: 25,
      height: 50,
      letterSpacing: 0.38
    },
    controleModelo: {
      height: 13,
      right: "45%",
      top: "10%",
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 11,
      lineHeight:13,
      fontStyle:"normal",
      fontWeight: "normal",
      },
    controleTemperatura: {
      width:"50%",
    },
    visorTemperatura:{
      height:45,
      width:127,
      paddingHorizontal:22,
      paddingVertical:3,
      backgroundColor:"rgba(241, 137, 41, 0.15)",
      borderRadius:16,
      top:"10%",
      right:"15%",   
    },
    valorTemperatura:{
      fontSize: 34,
      lineHeight: 41,
      letterSpacing: 0.374,
      color: "#F18929",
    },
    visorVelocidade:{
      height:45,
      width:127,
      paddingHorizontal:22,
      paddingVertical:10,
      backgroundColor:"rgba(241, 137, 41, 0.15)",
      borderRadius:16,
      top:"10%",   
      flexDirection:"row",
      flexWrap:"wrap",
    },


})

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Ambiente


