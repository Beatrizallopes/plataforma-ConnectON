import React  from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, Button,  FlatList, SafeAreaView,} from 'react-native';

const Ambientes = () => {
  return (
   <View style={styles.body}>
     <View style={styles.header}>
     {/* <Button style ={styles.Addbutton}
              onPress={() => alert('This is a button!')}
              title=""
              color="red"
            /> */}
     </View>
      <Text style={styles.titulo}>
           Ambientes
      </Text>
      <TextInput style={styles.campoPesquisa}>
          <Image style={styles.icone} source={require('./../images/icons/buscar.png')}/>
           Buscar Ambiente ... 
      </TextInput> 
          <ListaAmbientes></ListaAmbientes>
   </View>
  );
};

// Criando o componente Lista

class ListaAmbientes extends React.Component {
  state = {
    data: [
      { id: "0", name: "Escritório", qtdMod:2 },
      { id: "1", name: "Estacionamento", qtdMod:4 },
      { id: "2", name: "Expedição", qtdMod:1 },
    ]
  };
  qtdAmb = this.state.data.length - 1;
  render() {
    return (
      <SafeAreaView>
        <View style={styles.grupo}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            if(item.id <this.qtdAmb){
              return (
                <View style={styles.item}>
                   {/* <Image style={styles.iconeFavorito} source={require('./../images/icons/naoFavorito.png')}/> */}
                 <Text style={styles.text}>
                   {item.name} 
                   </Text>
                   <Text style={styles.infoQuantidade}>{item.qtdMod}
                   <Image source={require('./../images/icons/setaDireita.png')}/>
                   </Text>
                 
                </View>
                     );}
            else{  
              return (
                <View style={styles.itemFinal}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.infoQuantidade}>{item.qtdMod}
                   <Image source={require('./../images/icons/setaDireita.png')}/>
                   </Text>
                </View>
              );

            }
           
          }}
        />
        </View>
      </SafeAreaView>
    );
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
  // Deveria ser padding: 10px 12px
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
 grupo:{
  backgroundColor: "linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))",
  borderRadius: 12,
  width:"90%",
  alignSelf:"center",
  marginTop:52,
 },
 item: {
  height: 48,
  borderBottomColor: "rgba(255, 255, 255, 0.12)",
  borderBottomWidth: 1,
},
itemFinal: {
  height: 48,
},
text: {
  color: "#FFFFFF",
  fontSize: 17,
  position: "absolute",
  // width: 183,
  height: 24,
  left: 8,
  top: 12,
  marginLeft:8,
  lineHeight: 22,
  letterSpacing: -0.408, 
},
infoQuantidade: {
  textAlign: "right",
  color: "rgba(235, 235, 245, 0.6)",
  marginHorizontal:4,
},
iconeFavorito:{
//  alignSelf:"flex-start",
}
});

// Exportando o componente (página) Ambientes:
export default Ambientes;
