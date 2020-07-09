// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// Componente Input
const AutomacaoCard = function({tipo,nome,proxEvento,mensagem,ambientes}){

  return(
        <View style={[styles.automação,tipoAuto(tipo)]}>
          <Text style={styles.automaçãoMensagem}>{mensagem}:</Text>
          <Text style={styles.automaçãoProxEv}>{proxEvento}</Text>
          <Text style={styles.automaçãoNome}>{nome}</Text>
          <Text style={styles.automaçãoAmbientes}>{ambientes}</Text>

       </View>
        )

}
// Estilo do componente
const styles = StyleSheet.create({
    automação:{
        width: "90%",
        height: 154,
        left: 16,
        top: 8,
        backgroundColor: "rgba(255, 255, 255,0.13)",
        borderRadius: 12,
        marginEnd:8,
        marginTop:23,
      },
    automaçãoNome: {
        position:"relative",
        left: "4%",
        top: "28%",
        height:20,
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
        letterSpacing:-0.24,
        lineHeight: 20
    },
    automaçãoHorario:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 11,
        left: 8, 
        top: 8
    },
    automaçãoProxEv:{
      position:"relative",
      // width:128,
      fontFamily: "Barlow",
      color: "#FFFFFF",
      fontSize: 11,
      fontWeight:"normal",
      left: "4%", 
      top: "15%",
      fontSize:34,
      lineHeight:41,
      letterSpacing:0.374,
      alignSelf:"flex-start",
      },
      automaçãoMensagem:{
        position:"relative",
        height:22,
        left:"4%",
        top:"12%",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 17,
        fontStyle:"normal",
        fontWeight: "normal", 
        lineHeight: 22,
        alignSelf:"flex-start"
      },
      automaçãoAmbientes:{
        position:"relative",
        height:14,
        left:"4%",
        top:"28%",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 12,
        fontStyle:"normal",
        fontWeight: "normal", 
        lineHeight: 16,
        overflow:"visible"
      },

})

// Função que estabelece a cor de acordo com o tipo:
var tipoAuto = function(tipo) {
  if(tipo=='Automação'){
    return {
      backgroundColor:"#568AEA",
    }
  };
  if(tipo=='Gatilho'){
    return {
      backgroundColor:"#D66075",
    }
  }
}
// Exportando o componente
export default AutomacaoCard

