// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react';
import { StyleSheet, View, Text,  Image,Modal, TouchableWithoutFeedback,} from 'react-native';
// Alguns dados utilizados para "simular" o banco de dados ///////////////////////////////////////////////////////////////////////////////////

var listaDispositivos = [
  {nome:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", marca:"Sansung", modelo:"AR18NVFPCWKNAZ", cod:"1", temperatura: "24", velocidade:3},
  {nome:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", marca:"Sansung", modelo:"S4-W12JA31A", cod:"2", temperatura:"17",velocidade:2},
]



// Componentes que farão parte da Página /////////////////////////////////////////////////////////////////////////////////////////////////////////

// Componente Lista de Dispositivos
const Controle = ()=> {
  var dispositivo = listaDispositivos[0];
  const [modalVisible, setModalVisible] = useState(false);
  return(
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
      </Modal>)
        }

// Estilização dos componentes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
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
export default Controle


