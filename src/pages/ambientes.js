// Informações que preciso nessa página: uma lista dos ambientes que o usuário tem acesso. Para cada ambiente, preciso das informações: nome, quantidade de módulos nele, cor o indicador e se é um favorito ou não.
// Pegando os dados utilizados e tratando-os:
import listaAmbientes from './../dados';
// 
import React  from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import grupos from '../funcoes/separarGruposAlfa';



const Ambientes = () => {
  return (
   <ScrollView style={styles.body}>
     <View style={styles.header}>
     <TouchableWithoutFeedback onPress={() => alert("Adicionar ambiente")}>
       <Image  style={{position: "absolute", right: 22,top: 54}} source={require('./../images/icons/adicionar.png')}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
       <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/more.png')}/>
      </TouchableWithoutFeedback>
     </View>
      <Text style={styles.titulo}>
           Ambientes 
      </Text>
      <TextInput style={styles.campoPesquisa}>
          <Image style={styles.icone} source={require('./../images/icons/buscar.png')}/>
           Buscar Ambiente ... 
      </TextInput> 
      
          <GrupoAmbientes></GrupoAmbientes>
   </ScrollView>
  );
};

// Criando o componente Lista
class GrupoAmbientes extends React.Component {
  render() {
    var tamanho = grupos.length;
    const itemLista = grupos.map((grupo) => {
      var letra = grupo[0].nome.substring(0,1); 
      var qtdAmb = grupo.length - 1;
      return (
        <SafeAreaView>
          <Text style={styles.letra}>{letra}</Text>
          <View style={styles.linha}>
          <FlatList
            data={grupo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              // Definindo o ícone de favorito
             var urlIconeFav =  require('./../images/icons/naoFavorito.png');
              if (item.ehFavorito){ 
                urlIconeFav = require('./../images/icons/favorito.png');
              }
              if(item.id <this.qtdAmb){
                if(item.id === "0"){ // Se é o primeiro item da lista
                  return (
                    <View style={indicador(item.cor,"inicial")}>
                    <TouchableWithoutFeedback onPress={() => item.name= "oi"}>
                      <Image  style={styles.iconeFavorito} source={urlIconeFav}/>
                      </TouchableWithoutFeedback>
                     <Text style={styles.text}>
                       {item.ehFavorito}
                       {item.nome} 
                       </Text>                    
                       <Text style={styles.infoQuantidade}>{item.qtdMod}
                       <Image source={require('./../images/icons/setaDireita.png')}/>
                       </Text>                  
                    </View>
                         );
                } else { // Não é o primeiro nem o último item da lista
                  return (
                    <View style={indicador(item.cor,"meio")}>
                      <Image  style={styles.iconeFavorito} source={urlIconeFav}/>
                     <Text style={styles.text}>
                       {item.nome} 
                       </Text>
                       <Text style={styles.infoQuantidade}>{item.qtdMod}
                       <Image source={require('./../images/icons/setaDireita.png')}/>
                       </Text>                  
                    </View>
                         );
                }}
              else{   // Se for o último item da lista:
                return ( 
                  <View style={indicador(item.cor,"final")}>
                    <Image  style={styles.iconeFavorito} source={urlIconeFav}/>
                    <Text style={styles.text}>{item.nome}
                    </Text>
                    <Text style={styles.infoQuantidade}>{item.qtdMod}
                     <Image source={require('./../images/icons/setaDireita.png')}/>
                     </Text>
                  </View>
                );}           
            }}
          />
        </View>
        </SafeAreaView>
      );
    })  
    return itemLista; 
  }
}
// Estilização dos componentes 
const styles = StyleSheet.create({
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
 body: {
   flex:1,
   backgroundColor: "#000000",
 },
 campoPesquisa:{
  height:44,
  padding: 12,
  width:"90%",
  left: 16,
  backgroundColor: "rgba(255, 255, 255,0.13)",
  borderRadius: 10,
  fontSize: 17,
  letterSpacing: -0.408,
  color: "rgba(255, 255, 255, 0.3)",
 },
 icone:{
  width: 24,
  height: 24,
 },
 header:{
  height: 54,// 54 + 24 = 78
 },
 Addbutton:{
   backgroundColor:"red",
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
infoQuantidade: {
  textAlign: "right",
  color: "rgba(235, 235, 245, 0.6)",
  marginHorizontal:4,
},
iconeFavorito:{
position: "absolute",
left: 8,
top: 12,
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
}
});
// Estilos Dinâmicos
var indicador = function(myColor, tipo) {
  if(tipo=='inicial'){
    return {
      height: 48,
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderTopStartRadius:12,
    }
  };
  if(tipo=='meio'){
    return {
      height: 48,
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
    }
  };
  if(tipo=='final'){
    return {
      height: 48,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
    }
  }
  
}
// Exportando o componente (página) Ambientes:
export default Ambientes;
