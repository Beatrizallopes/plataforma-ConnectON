// Lista de imports necessários ////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React,{useState}  from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button,  FlatList, SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import grupos from '../funcoes/separarGruposAlfa';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/input';
import Header from '../components/header';

// Componentes que farão parte da Página /////////////////////////////////////////////////////////////////////////////////////////////////////////
// Criando o componente Lista de Ambientes
 const GrupoAmbientes = () => {
  const navigation = useNavigation();
    var tamanho = grupos.length;
    var i = 0;
    const itemLista = grupos.map((grupo) => {
      var letra = grupo[0].nome.substring(0,1); 
      var qtdAmb = grupo.length - 1;
      var posicao;
      var numGrupo = i;
      i = i+1; // Identificar qual o grupo
      const item = grupo.map((ambiente) => {
        const [favorito, setfavorito] = useState(ambiente.ehFavorito);
        posicao = posicaoAmbiente(ambiente.id,qtdAmb);
        // Identificando se é favorito ou não
        var urlIconeFav =  require('./../images/icons/naoFavorito.png');      
        if (favorito){ 
          urlIconeFav = require('./../images/icons/favorito.png');
        }
        return (
          <View style={[indicador(ambiente.cor,posicao),styles.listaAmb]} key={ambiente.id}>
            <TouchableWithoutFeedback   onPress={() => {setfavorito(!favorito);}}>
              <Image source={urlIconeFav} style={{left: 30}, {top: 12}} ></Image>
             </TouchableWithoutFeedback>
            <Text style={styles.text}>{ambiente.ehFavorito}{ambiente.nome}</Text>  
           <TouchableWithoutFeedback onPress={() => navigation.navigate('Ambiente',{grupoSelecionado:numGrupo,ambienteSelecionado:ambiente.id,codAmbiente:ambiente.cod})}>             
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
     <Header titulo ="Ambientes "></Header>
      <Input label="" placeholder="Buscar Ambiente..." />
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

// Funções ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
// Estilos Dinâmicos
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
// Estilização dos componentes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
 body: {
   flex:1,
   backgroundColor: "#000000",
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
},
listaAmb:{
  height: 48,
  paddingLeft:15,
}
});

// Exportando a página ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Ambientes

