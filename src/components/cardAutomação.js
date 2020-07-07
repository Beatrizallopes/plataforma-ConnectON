// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// Componente Input
const CardAuto = function({nome,horario,proxEvento,mensagem}){
    return(
        <View style={styles.automação}>
        <Text style={styles.automaçãoNome}>{nome}</Text>
        <Text style={styles.automaçãoHorario}>{horario}</Text>
        <Text style={styles.automaçãoProxEv}>{proxEvento}</Text>
        <Text style={styles.automaçãoMensagem}>{mensagem}</Text>
       </View>
        )
}
// Estilo do componente
const styles = StyleSheet.create({
    automação:{
        width: 248,
        height: 126,
        backgroundColor: "rgba(255, 255, 255,0.13)",
        borderRadius: 12,
        left: 4,
        marginEnd:8,
        marginTop:23,
      },
    automaçãoNome: {
        color: "white",
        fontSize: 17,
        fontWeight: "600",
        left: 8,
        top: 8,
        lineHeight: 22
    },
    automaçãoHorario:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 11,
        left: 8, 
        top: 8
    },
    automaçãoProxEv:{
        color: "white",
        fontSize: 15,
        fontStyle:"normal",
        fontWeight: "normal", 
        left: 8, 
        top: 45,
        letterSpacing: -0.24,
        lineHeight: 20
      },
      automaçãoMensagem:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 11,fontStyle:"normal",
        fontWeight: "normal", 
        left: 8, 
        top: 48,
        lineHeight: 13
      },

})

// Exportando o componente
export default CardAuto

