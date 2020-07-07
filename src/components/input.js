// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image} from 'react-native';

// Componente Input
const Input = function({label,placeholder}){
    return(
    <View>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={styles.campoPesquisa}>
            {/* <Image style={styles.icone} source={require({icone})}/> */}
            {placeholder}
        </TextInput>
    </View>
        )
}
// Estilo do componente
const styles = StyleSheet.create({
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
    inputLabel:{
        fontSize: 13,
        color:"rgba(255, 255, 255, 0.5)",
        top:"10%",
        right:"35%"
    },
    icone:{
        width: 24,
        height: 24,
       },
})

// Exportando o componente
export default Input

