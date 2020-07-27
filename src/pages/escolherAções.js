// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button, Modal, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import Input from '../components/input';
import grupos from '../funcoes/separarGruposAlfa';

const escolherAções = ({route,navigation}) => {
  // Pegando os dados de navegação
  const {diasSemana} = route.params;
  const {horario}= route.params;
  const {ambientesSel} = route.params;
  const acoesSel = [];
  var i = 0; // variável de controle de grupo (grupo i)
  const itemLista = grupos.map((grupo) => {
      var j =0; // variável de controle do ambiente dentro de um grupo (ambiente j do grupo i)
      var letra = grupo[0].nome.substring(0,1); 
      var qtdAmb = grupo.length - 1;
      var posicao;
      const item = grupo.map((ambiente) => {
        var jaSel = false;
        var z = 0; // variável para identificar em que posição de ambientesSel o ambiente está
        // Verificando se o ambiente já está na lista
        for(var m=0;m<ambientesSel.length;m++){
          if(ambientesSel[m].grupo == i && ambientesSel[m].ambiente == j){
              jaSel = true;
              z = m;
          }   
        }
        const [selecionado, setSelecionado] = useState(jaSel);
        // Se o ambiente está selecionado ou já está na lista
        if(selecionado){
          var urlSelecionado = require('./../images/icons/ambSel.png');
          if(!selecionado){
            var urlSelecionado = require('./../images/icons/ambNaoSel.png');
          }
          if(!jaSel){
            var elemento = {grupo:0,ambiente:0}
            elemento.grupo= i;
            elemento.ambiente = j;
            elemento.id = ("g"+i+"a"+j).toString();
            ambientesSel.push(elemento);
          }        
        } else {
          var urlSelecionado = require('./../images/icons/ambNaoSel.png');
          if(jaSel){
            ambientesSel.splice(z,1);
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
          <Text style={styles.letra}>{letra}</Text>
          <View style={styles.linha}>
            {item}                 
          </View>
        </SafeAreaView>
            ) 
          }) // Terminou o segundo map   
       return(
        <ScrollView>
       <Modal animationType="slide" transparent={true} visible={true} >
        <View style={styles.centeredView}>
          <View style={styles.modalSelecionarAmb}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Gatilho 3",{horario:horario,diasSemana:diasSemana,ambientesSel:ambientesSel,acoesSel:acoesSel})}>
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
      right:"8%",
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.364,
      color: "#FFFFFF",
    }, 
})

  export default escolherAções;