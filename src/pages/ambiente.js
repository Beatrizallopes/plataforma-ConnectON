// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import listaAmbientes from "../dados";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

// Alguns dados utilizados para "simular" o banco de dados ///////////////////////////////////////////////////////////////////////////////////

var listaAutomacoes = [
  {nome:"Expediente",horario:"08:00 as 18:00",proxEvento:"00:17:34",mensagem:"Encerrará em breve",cod:"1"},
  {nome:"Hora Extra",horario:" ",proxEvento:"Sábado, 08:00 as 18:00",mensagem:"Daqui a 3 dias",cod:"2"},
  {nome:"Intervalo",horario:"12:00 as 14:00 ",proxEvento:"Segunda, 12:00 as 14:00",mensagem:"Daqui a 5 dias",cod:"3"},
]
var listaDispositivos = [
  {nome:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", marca:"Sansung", modelo:"AR18NVFPCWKNAZ", cod:"1"},
  {nome:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", marca:"Sansung", modelo:"S4-W12JA31A", cod:"2"},
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
class ListaDispo extends React.Component {
  render() {
    const item = listaDispositivos.map((dispositivo)=>{
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
        <Text style={styles.dispositivoNome}>{dispositivo.nome} </Text>
        <Text style={styles.dispositivoModelo}>{dispositivo.modelo}</Text>      
        </View>
      )
    })
    return item;
        }
        }

// Componente referente à página Ambiente (que utiliza os componentes criados anteriormente) /////////////////////////////////////////////////
const Ambiente = ({route,navigation}) => {  
  const {ambienteSelecionado} = route.params;
   ambiente = listaAmbientes[ambienteSelecionado]; 
  // const Ambiente = ({navigation}) => {
  return (
   <ScrollView style={styles.body}>
     <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Ambientes") }>
          <Image  style={{position: "absolute", top: "55%"}} source={require('./../images/icons/setaLaranjaEsq.png')}/>
        </TouchableWithoutFeedback>
        <Text style={styles.ambientes}> Ambientes </Text>
        <TouchableWithoutFeedback onPress={() => alert("Editar Ambiente")}>
         <Text style={styles.editar}> Editar </Text>
        </TouchableWithoutFeedback> 
     </View> 
      {/* Fim do header */}
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
    }

})

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Ambiente


