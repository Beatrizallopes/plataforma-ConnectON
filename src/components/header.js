// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text, Image,TouchableWithoutFeedback} from 'react-native';

// Componente Input
const Header = function({titulo}){
    return(
        <View>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => alert("Adicionar ambiente")}>
                    <Image  style={styles.iconeEsq} source={require('./../images/icons/adicionar.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert("Mais Informações")}>
                    <Image  style={{position: "absolute", right: 66,top: 54}} source={require('./../images/icons/more.png')}/>
                </TouchableWithoutFeedback>
            </View> 
            <Text style={styles.titulo}>
            {titulo}
            </Text>
        </View>
        )
}
// Estilo do componente
const styles = StyleSheet.create({
    header:{
        height: 54,// 54 + 24 = 78
       },
    iconeEsq:{
        position: "absolute",
        right: 22,
        top: 54
    },
    iconeDir:{
        position: "absolute",
        right: 66,
        top: 54
    },
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
})

// Exportando o componente
export default Header

