// Importações necessárias
import React,{useState, useEffect}   from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Modal,TouchableWithoutFeedback} from 'react-native';

// Simulando o banco de dados
var listaDispositivos = [
  {nome:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", marca:"Sansung", modelo:"AR18NVFPCWKNAZ", cod:"1", temperatura: 24, velocidade:3},
  {nome:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", marca:"Sansung", modelo:"S4-W12JA31A", cod:"2", temperatura:17,velocidade:2},
  {nome:"Ar-Condicionado Split Hi Wall LG  Inverter ", marca:"Sansung", modelo:"S4-W12JA31B", cod:"3", temperatura:18,velocidade:2},
]
//
const addDispositivos = ({route,navigation}) => {
  // Pegando os dados de navegação
  const {ambiente} = route.params; 
       return(
        <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} >
            <View style={styles.modalSelecionarAmb}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Criar Ambiente",{ambiente:ambiente})}>
                <Image style={styles.fecharModal} source={require("./../../images/icons/fecharModal.png")}></Image>
              </TouchableWithoutFeedback>
              <View style={{marginVertical:25,flexDirection:"column",left:"5%"}}> 
                <Text style={styles.titulo}> Dispositivos</Text>
                <Text style={[styles.titulo,{fontSize:22,marginTop:"8%"}]}> Instalados Recentemente</Text>
              </View>
              <View style={styles.dispositivosView}>
                <ListaDispo listaDispositivos = {listaDispositivos}></ListaDispo>
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
       var buscaImagem = require('../../images/logomarcasDispositivos/sansung.png');
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

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "#000000",
  },
    modalSelecionarAmb: {
      height:"100%",
      width:"100%",
      backgroundColor: "rgb(44,44,44)", 
    },
    fecharModal:{
      position:"absolute",
      top:"4%",
      right:"6%",
      backgroundColor:"rgba(255, 255, 255, 0.13);",
      borderRadius:20
    },
    titulo:{
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.364,
      color: "#FFFFFF",
    },
    dispositivosView:{
      left:16, 
      flex: 1,
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
  })

  export default addDispositivos;