// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,  Modal,TouchableWithoutFeedback} from 'react-native';

const criarAmbiente = ({route,navigation}) => {
  const {ambiente} = route.params;
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
          
            <View style={styles.modalSelecionarAmb}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Ambientes")}>
                <Text style={styles.cancelar}> Cancelar  </Text>               
                 </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Ambiente 2",{ambiente:ambiente})}>
                    <Text style={styles.proximo}> Próximo </Text>
                </TouchableWithoutFeedback> 
                <View style={{flexDirection:"column",top:"12%",left:10}}>
                <Text style={styles.quando}>Novo Ambiente  </Text>
                <Text style={[showText(ambiente.dispositivos),styles.explicação]}>Adicione dispositivos para controlar ou executar tarefas automatizadas.</Text>  
                <View style={styles.dispositivosView}>
                  <ListaDispo listaDispositivos = {ambiente.dispositivos}></ListaDispo>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Adicionar dispositivos",{ambiente:ambiente})}>
                  <View style={styles.botaoCriação}>
                    <Text style={[styles.textoBotao,{color:"#F18929"}]}> <Image source={require('./../../images/icons/addAmbiente.png')}></Image>  Adicionar dispositivos</Text>
                  </View>
                </TouchableWithoutFeedback>
                </View>
            </View>
        </Modal> 
      </ScrollView>
    )
  }
   // Componente Lista de Dispositivos
   const ListaDispo = ({listaDispositivos})=> {
    const item = listaDispositivos.map((dispositivo)=>{
    var marca = dispositivo.marca.toLowerCase();
         var buscaImagem = require('./../../images/logomarcasDispositivos/sansung.png');
        return(
          <View style={styles.dispositivo} key={dispositivo.cod}>
            <View style={{flexDirection:"row", top:"8%",left:"8%"}}>
            <Image  source={buscaImagem} style={{marginRight:"20%"}}/>
            </View>
              <Text style={styles.dispositivoNome}>{dispositivo.nome} </Text>
            <Text style={styles.dispositivoModelo}>{dispositivo.modelo}</Text>  
          </View>
        )
      })
      return item;
          }
 
// Estilização 
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
  proximo:{
    position:"absolute",
    top:"5%",
    color: "rgba(255, 255, 255, 0.3)",
    fontWeight: "600",
    fontSize: 17,
    right:"5%",
  },
  cancelar:{
    position:"absolute",
    top:"5%",
    color: "#F18929",
    fontWeight: "600",
    fontSize: 17,
    left:"8%",
    lineHeight: 22,
  },
  iconeVoltar:{
    position: "absolute", 
    top: "5%",
    left:"5%"
  },
  quando:{
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.352,
    color: "#FFFFFF",
    position:"absolute",
  },
  explicação:{
    marginTop:"10%",
    width: 343,
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "rgba(255, 255, 255, 0.55)",
  },
  botaoCriação: {
    marginTop:"5%",
    width: 343,
    height:56,
    paddingVertical:8,
    paddingHorizontal:32,
    backgroundColor:"rgba(241, 137, 41, 0.3)",
    borderRadius:12,
    alignItems:"center",
    justifyContent:"center"
    },
    textoBotao: {
      display:"flex",
      flexDirection:"row",
      fontSize:17,
      fontWeight:"600",
      lineHeight:22,
      letterSpacing: -0.408,
      color:"#F18929",       
    },
    dispositivosView:{
      flexDirection:"row",
      flexWrap:"wrap",
    },
    dispositivo:{
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
      left:"6%", 
      top: "20%",
      lineHeight: 18,
      height: 54,
      width:"90%", 
      letterSpacing: -0.078
    },
    dispositivoModelo: {
      top: "23%",
      left: "6%",
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 11,
      lineHeight:13,
      fontStyle:"normal",
      fontWeight: "normal",
      },
    
})
// Estilos Dinâmicos

var showText = function(lista){
  if(lista.length>0){
    return {
      opacity:0,
      height:0,
    }}
    else{
      return{
        opacity:100,
      }      
    }
}

  export default criarAmbiente;