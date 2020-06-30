// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState}  from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import grupos from '../funcoes/separarGruposAlfa';
import gruposFav from '../funcoes/filtrarFavoritos';
import { useNavigation } from '@react-navigation/native';

// Componentes que farão parte da Página /////////////////////////////////////////////////////////////////////////////////////////////////////////
// Criando o componente Lista de Ambientes
 const GrupoAmbientes = () => {
  const navigation = useNavigation();
    var tamanho = grupos.length;
    const itemLista = grupos.map((grupo) => {
      var letra = grupo[0].nome.substring(0,1); 
      var qtdAmb = grupo.length - 1;
      var posicao;
      const item = grupo.map((ambiente) => {
        const [favorito, setfavorito] = useState(ambiente.ehFavorito);
        if(ambiente.id <qtdAmb){
          if(ambiente.id==="0"){
            posicao = "inicial";
          } else{
            posicao = "meio";
          }
        } else {
          if(qtdAmb===0){
            posicao = "unico"
          } else{
            posicao = "final"
          }
        }
        var urlIconeFav =  require('./../images/icons/naoFavorito.png');      
        if (favorito){ 
          urlIconeFav = require('./../images/icons/favorito.png');
        }
        
        return (
          <View style={indicador(ambiente.cor,posicao)} key={ambiente.id}>
            <TouchableWithoutFeedback   onPress={() => {setfavorito(!favorito);}}>
              <Image source={urlIconeFav} style={{left: 30}, {top: 12}} ></Image>
             </TouchableWithoutFeedback>
            <Text style={styles.text}>{ambiente.ehFavorito}{ambiente.nome} </Text>  
            {/* <TouchableWithoutFeedback onPress={() => alert("Ir p/ ambiente")}>      */}
           <TouchableWithoutFeedback onPress={() => navigation.navigate('Ambiente',{ambienteSelecionado:2})}>             
           {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Ambiente')}>  */}
             <Text style={styles.infoQuantidade}>{ambiente.qtdMod}
               <Image style={{borderWidth:10,borderColor:"red"}}source={require('./../images/icons/setaDireita.png')}/>         
             </Text>
             </TouchableWithoutFeedback>                  
          </View>
              )
      }) // Terminou o primeiro map
      return(
        <SafeAreaView key={letra} >
          <Text style={styles.letra}>{letra}</Text>
          <View style={styles.linha}>
            {item}                 
          </View>
        </SafeAreaView>
            ) 
          }) // Terminou o segundo map         
       return itemLista
          }
        // }
        
// Componente referente à página Ambientes (que utiliza o componente criado anteriormente) /////////////////////////////////////////////////
const Ambientes = ({ navigation}) => {
  // const [ambientesExibidos, setambientesExibidos] = useState(grupos);
  return (
   <ScrollView style={styles.body}>
     {/* Início do header */}
     <View style={styles.header}>
     <TouchableWithoutFeedback onPress={() => alert("Adicionar ambiente")}>
       <Image  style={{position: "absolute", right: 22,top: 54}} source={require('./../images/icons/adicionar.png')}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
       <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/more.png')}/>
      </TouchableWithoutFeedback>
     </View> 
     {/* Fim do header */}
      <Text style={styles.titulo}>
           Ambientes 
      </Text>
      <TextInput style={styles.campoPesquisa}>
          <Image style={styles.icone} source={require('./../images/icons/buscar.png')}/>
           Buscar Ambiente... 
      </TextInput>
      <View style={styles.switchFav}>
        <Text style={styles.switchFavSel}>Todos</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Ambientes Favoritos')}> 
        <Text style={styles.switchFavNotSel}>Favoritos</Text>
        </TouchableWithoutFeedback>
      </View>       
          <GrupoAmbientes></GrupoAmbientes>
          <View style={{height:20}}></View>
          
   </ScrollView>
  );
};

// Estilização dos componentes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  marginHorizontal:10,
  bottom:"40%"
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
},
// Estilo do switch
switchFav:{
  width:"90%",
  height: 32,
  left: 16,
  backgroundColor:"rgba(255, 255, 255, 0.1)",
  borderRadius: 8,
  marginTop:12,
},
switchFavSel:{
  height: 32,
  width: "50%",
  backgroundColor:"rgba(255, 255, 255, 0.1)",
  borderRadius: 8,
  fontSize: 12,
  lineHeight: 16,
  textAlign: "center",
  textAlignVertical:"center",
  color: "#FFFFFF",
},
switchFavNotSel:{
  // height: 32,
  left:"50%",
  width: "50%",
  fontSize: 12,
  lineHeight: 16,
  textAlign: "center",
  // textAlignVertical:"center",
  color: "#FFFFFF",
  top:"-75%",
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
      paddingLeft:15,
    }
  };
  if(tipo=='meio'){
    return {
      height: 48,
      borderBottomColor: "rgba(255, 255, 255, 0.12)",
      borderBottomWidth: 1,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      paddingLeft:15,
    }
  };
  if(tipo=='final'){
    return {
      height: 48,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      paddingLeft:15,
    }
  }
  if(tipo=='unico'){
    return {
      height: 48,
      borderLeftWidth:8,
      borderLeftColor: myColor,
      borderBottomStartRadius:12,
      borderTopStartRadius:12,
      paddingLeft:15,
    }
  }
  
}
// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Ambientes

