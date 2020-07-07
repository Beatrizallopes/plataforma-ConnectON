// Importações necessárias
import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image,Modal, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback,TouchableHighlight,} from 'react-native';

// Componente Input
const Controle = function({dispositivo,visivel}){
  const [modalVisible, setModalVisible] = useState(visivel);
  const [temperatura, setTemperatura] = useState(dispositivo.temperatura);
    return(
          <View>
            <Text style={styles.controleNome}>{dispositivo.nome}</Text>
            <Text style={styles.controleModelo}>{dispositivo.modelo}</Text>
          {/* Botão de Ligar/Desligar o dispositivo */}
           <Image source={require('../images/controle/ligaDesliga.png')} style={{position:"relative",top:"15%"}}/> 
         {/* Outros botões: */}
           <View style={{top:"20%",left:16, flex: 1,flexDirection:"row",flexWrap:"wrap",}}>

           {/* Temperatura */}
            <View style={styles.controleTemperatura}>
              <Text style={{color:" rgba(255, 255, 255, 0.5)",fontSize:13}}>Temperatura</Text>
              <View style={styles.visor}>
                <Text style={styles.valorTemperatura}>{temperatura}ºC</Text>
              </View>   

            <View style={styles.botoes}>
              <TouchableWithoutFeedback onPress={() => { setTemperatura(temperatura + 1);} }>
                 <Image source={require('../images/controle/aumentaTemp.png')}/>
              </TouchableWithoutFeedback>               
              <Image style={{marginHorizontal:5}} source={require('../images/controle/divisorBotoes.png')}/>
              <TouchableWithoutFeedback onPress={() => { setTemperatura(temperatura - 1);} }>
                <Image source={require('../images/controle/diminuiTemp.png')}/>
              </TouchableWithoutFeedback>
            </View> 

          </View> 
          {/* fim de outros botões */}

          <Image style={{top:0,right:"18%"}} source={require('../images/controle/divisorControle.png')}/> 

          {/* Velocidade do Vento */}
          <View>
            <Text style={{color:" rgba(255, 255, 255, 0.5)",fontSize:13}} >Velocidade do Vento</Text>
            <View style={[styles.visor,{paddingVertical:10,flexDirection:"row", right:"0%"}]}>
             <Image style={{marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/>
             <Image style={{marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/>
             <Image style={{marginEnd:"8%"}} source={require('../images/controle/ventoVelocidade.png')}/>
           </View>

            <View style={[styles.botoes,{top:"18%",right:"2%",}]}>
            <Image source={require('../images/controle/aumentaVelocidade.png')}/>
              <Image style={{marginHorizontal:5}} source={require('../images/controle/divisorBotoes.png')}/>
              <Image source={require('../images/controle/diminuiVelocidade.png')}/>
            </View>

          </View>
          {/* Fim Velocidade do Vento */}
          </View>
          </View>
        )
}
// Estilo do componente
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
  right: "42%",
  top: "12%",
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: 11,
  lineHeight:13,
  fontStyle:"normal",
  fontWeight: "normal",
  },
controleTemperatura: {
  width:"50%",
},
visor:{
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
botoes:{
  height:40,
  width:137,
  padding:4,
  backgroundColor:"rgba(255, 255, 255, 0.1)",
  borderRadius:100,
  top:"12%",
  right:"22%", 
  flexDirection:"row",
  flexWrap:"wrap",
},

})

// Exportando o componente
export default Controle

