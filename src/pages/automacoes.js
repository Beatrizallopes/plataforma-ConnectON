// Importações necessárias
import React,{useState}   from 'react';
import { StyleSheet, ScrollView,View, Modal,TouchableWithoutFeedback,Image,Text,TextInput} from 'react-native';
import Header from '../components/header'
import AutomacaoCard from '../components/cardAutomação'
import listaAutomacoesOrd from '../funcoes/listarAutomações';
// Simulando os dados

// Componente lista de Automações
class ListaAuto extends React.Component {
  render() {
    const itemA = listaAutomacoesOrd.map((automacao)=>{
      return(
        <View key={automacao.cod}>
        <AutomacaoCard tipo={automacao.tipo} nome={automacao.nome} proxEvento={automacao.tempoRestante} mensagem={automacao.mensagem} ambientes={automacao.ambientes}></AutomacaoCard>
        </View>
      )
    })
    return itemA;
        }
        }

// Componente tipoCriação dentro do Modal de criação

const TipoCriacao = () => {
  return (
    <View>
    <View style={styles.caixa}>
      <Image style={styles.iconeImagem} source={require('./../images/automacoes.png')}></Image>
      <Text style={styles.explicativo}>Crie uma automação que é executada durante um período com início e fim determinado. </Text>
      <TouchableWithoutFeedback onPress={() => alert("Criar Automação")}>
      <View style={styles.botaoCriação}>
        <Text style={styles.textoBotao}> Criar Automação</Text>
      </View> 
      </TouchableWithoutFeedback>
    </View>

    <View style={styles.caixa}>
    <Image style={styles.iconeImagem} source={require('./../images/gatilhos.png')}></Image>
    <Text style={styles.explicativo}>Crie um gatilho para executar uma tarefa uma única vez quando chegar o momento </Text>
    <TouchableWithoutFeedback onPress={() => alert("Criar Gatilho")}>
    <View style={[styles.botaoCriação,{backgroundColor:"rgba(214, 96, 117, 0.3)",}]}>
      <Text style={[styles.textoBotao,{color:"#D66075"}]}> Criar Gatilho</Text>
    </View>
    </TouchableWithoutFeedback>
  </View>
  </View>
  )
}
// Página Automações
const Automacoes = () => {
  const [modalCriar, setmodalCriar] = useState(false);
  return (
    <ScrollView style={styles.body}>
    {/* <Header titulo="Automações"></Header> */}
    <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => {setmodalCriar(true);}}>
                    <Image  style={styles.iconeEsq} source={require('./../images/icons/adicionar.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
                    <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/more.png')}/>
                </TouchableWithoutFeedback>
            </View> 
            <Text style={styles.titulo}>
            Automações
            </Text>
    <ListaAuto></ListaAuto>
    <View style={{height:20}}></View>
    {/* Modal de criação de ambiente */}
    <Modal animationType="slide" transparent={true} visible={modalCriar} >
        <View style={styles.centeredView}>
          <View style={styles.modalCriar}>
            <TouchableWithoutFeedback onPress={() => {setmodalCriar(!modalCriar);}}>
              <Text style={styles.botoesSuperior}> Cancelar  </Text>
            </TouchableWithoutFeedback>
            <TipoCriacao></TipoCriacao>
        </View>
    </View>
  </Modal>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
  // Header
  header:{
    height: 54,// 54 + 24 = 78
   },
iconeEsq:{
    position: "absolute",
    right: 22,
    top: 54
},
iconeDir:{
    position: "absolute",
    right: 66,
    top: 54
},
titulo:{
    color:"white",
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
  // Modal de criação
  modalCriar: {
    height:"100%",
    width:"100%",
    backgroundColor: "#000000",
    padding: "9%",
    alignItems: "center", 
    //display:"flex",

  },
  botoesSuperior:{
    position: "absolute",
    left:"5%",
    top: "8%",
    color: "#F18929",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
  },
  caixa:{
    display:"flex",
    flexDirection:"column",
    padding:0,
    position:"relative",
    width:370,
    height:225,
    top:"10%",
    backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #000000",
    borderRadius:18,
    margin:16,
    alignItems:"center"
  },
  iconeImagem:{
    top:15
  },
  explicativo:{
    width:"95%",
    position: "relative",
    right: "2.33%",
    top: "15%",
    bottom: "34.26%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#FFFFFF",
  },
  botaoCriação: {
  width:"95%",
  height:56,
  display:"flex",
  flexDirection:"column",
  paddingVertical:8,
  paddingHorizontal:32,
  position:"relative",
  top:"20%",
  backgroundColor:"rgba(86, 138, 234, 0.3)",
  borderRadius:12,
  alignItems:"center"
  },
  textoBotao: {
    top:"20%",
    fontSize:17,
    fontWeight:"600",
    lineHeight:22,
    letterSpacing: -0.408,
    color:"#568AEA"
  }
});


export default Automacoes;
