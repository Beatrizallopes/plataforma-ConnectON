// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import grupos from '../funcoes/separarGruposAlfa';

// Componente Input
const ListaAmb = ({lista}) =>{
  if(lista.length>0){
    var x = 0;
    var ambienteSelecionado = lista.map((ambiente) => { 
      var nomeAmb = ambiente.nome;
      var cor =  ambiente.cor;
      var posicao = posicaoAmbiente(x,lista.length-1);
      x = x +1;
      return(
        <View key={ambiente.id} style={[indicador(cor,posicao),styles.listaAmb]}>
          <Text style={styles.text}>{nomeAmb}</Text>
        </View>
      )
    })
  } else{
    var ambienteSelecionado = (
      <View>       
      </View>
    )
  }
  return ambienteSelecionado;
}
// Estilo do componente
const styles = StyleSheet.create({
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
  listaAmb:{
    backgroundColor: "rgb(44,44,44)",
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
    if(id===0){
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
    borderTopEndRadius:12,
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
    borderBottomEndRadius:12,
  }
}
if(tipo=='unico'){
  return {
    borderLeftWidth:8,
    borderLeftColor: myColor,
    borderBottomStartRadius:12,
    borderBottomEndRadius:12,
    borderTopEndRadius:12,
    borderTopStartRadius:12,
    
  }
}  
}
// Exportando o componente
export default ListaAmb;

