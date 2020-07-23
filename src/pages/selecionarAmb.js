// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button, Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import Input from '../components/input';
import grupos from '../funcoes/separarGruposAlfa';

const selecionarAmbientes = ({route,navigation}) => {
  // Pegando os dados de navegação
  const {diasSemana} = route.params;
  const {horario}= route.params;

  var i = 0; // variável de controle de grupo (grupo i)
  var ambientesSel = []; // Armazena os dados (grupo e ambiente) dos ambientes selecionados
  const itemLista = grupos.map((grupo) => {
      var j =0; // variável de controle do ambiente dentro de um grupo (ambiente j do grupo i)
      var letra = grupo[0].nome.substring(0,1); 
      var qtdAmb = grupo.length - 1;
      var posicao;
      const item = grupo.map((ambiente) => {
        const [selecionado, setSelecionado] = useState(false);
        if(selecionado){
          var urlSelecionado = require('./../images/icons/ambSel.png');
          var elemento = {grupo:0,ambiente:0}
          elemento.grupo= i;
          elemento.ambiente = j;
          ambientesSel.push(elemento);
        } else {
          var urlSelecionado = require('./../images/icons/ambNaoSel.png');
          for(var z=0;z<ambientesSel.length;z++){
            if(ambientesSel[z].grupo == i && ambientesSel[z].grupo == j){
              ambientesSel.splice(z,1);
            }
          }
        }
        j = j + 1; // Para saber qual posição dentro do grupo
        posicao = posicaoAmbiente(ambiente.id,qtdAmb);
        return (
          <View style={[indicador(ambiente.cor,posicao),styles.listaAmb]} key={ambiente.id}>
            <TouchableWithoutFeedback   onPress={() => {setSelecionado(!selecionado);}}>
              <Image source={urlSelecionado} style={{left: 30}, {top: 12}} ></Image>
             </TouchableWithoutFeedback>
            <Text style={styles.text}>{ambiente.ehFavorito}{ambiente.nome} </Text>  
          </View>
              )
      }) // Terminou o primeiro map
      i = i+1; 
      return(
        <SafeAreaView key={letra} >
          {/* <Text style={styles.letra}>{ambientesSel.length}</Text> */}
          <Text style={styles.letra}>{letra}</Text>
          <View style={styles.linha}>
            {item}                 
          </View>
        </SafeAreaView>
            ) 
          }) // Terminou o segundo map     
       return(
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
            <TouchableWithoutFeedback onPress={() => {}}>
           <Image style={styles.fecharModal} source={require("./../images/icons/fecharModal.png")}></Image>
            </TouchableWithoutFeedback>
            <View style={{marginBottom:30}}> 
              <Text style={styles.ambientes}> Ambientes</Text>
            </View>
            {/* <Input label="" placeholder="Buscar Ambiente..." /> */}
          {/* <GrupoAmbientes update={updateLista} ></GrupoAmbientes> */}
          {itemLista}
        </View>   
    </View>
    </ScrollView>
       )
          }

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
    // backgroundColor: "rgb(44,44,44)",
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
      right:"8%",
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.364,
      color: "#FFFFFF",
    },
     // Estilização da Lista:
 linha:{
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
  borderRadius: 12,
  width:"90%",
  alignSelf:"center",
  marginTop:52,
 },
text: {
  color: "#FFFFFF",
  fontSize: 17,
  position: "absolute",
  height: 24,
  left: 8,
  top: 12,
  marginLeft:48,// 56 - 8 = 48
  lineHeight: 22,
  letterSpacing: -0.408, 
},
letra:{
  color:"#FFFFFF",
  fontWeight: "600",
  fontSize: 17,
  lineHeight: 22,
  position: "absolute",
  width: 10,
  height: 24,
  left: "5%",
  marginTop:18,
},
listaAmb:{
  height: 48,
  paddingLeft:15,
  width:343,
}

  
})


// Estilos Dinâmicos
  // Identificando a posição do ambiente na lista:
  const posicaoAmbiente = function(id,qtdTotal){
    var posicao;
    if(id <qtdTotal){
      if(id==="0"){
        posicao = "inicial";
      } else{
        posicao = "meio";
      }
    } else {
      if(qtdTotal===0){
        posicao = "unico"
      } else{
        posicao = "final"
      }
    }
    return posicao
  }

var indicador = function(myColor, tipo) {
  if(tipo=='inicial'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderTopStartRadius:12,
    }
  };
  if(tipo=='meio'){
    return {
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
    }
  };
  if(tipo=='final'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
    }
  }
  if(tipo=='unico'){
    return {
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      borderTopStartRadius:12,
    }
  }  
}

  export default selecionarAmbientes;