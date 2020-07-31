// List of required imports 
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// MAIN COMPONENT - Component AutomationCard: used to display information about the automation/trigger (this one is used inside the Room's page)
const AutomationCard = function({name,schedule,nextEvent,message}){
    return(
        <View style={styles.automation}>
        <Text style={styles.automationName}>{name}</Text>
        <Text style={styles.automationSchedule}>{schedule}</Text>
        <Text style={styles.automationNextEvent}>{nextEvent}</Text>
        <Text style={styles.automationMessage}>{message}</Text>
       </View>
        )
}
// Estilo do componente
const styles = StyleSheet.create({
    automation:{
        width: 248,
        height: 126,
        backgroundColor: "rgba(255, 255, 255,0.13)",
        borderRadius: 12,
        left: 4,
        marginEnd:8,
        marginTop:23,
      },
    automationName: {
        color: "white",
        fontSize: 17,
        fontWeight: "600",
        left: 8,
        top: 8,
        lineHeight: 22
    },
    automationSchedule:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 11,
        left: 8, 
        top: 8
    },
    automationNextEvent:{
        color: "white",
        fontSize: 15,
        fontStyle:"normal",
        fontWeight: "normal", 
        left: 8, 
        top: 45,
        letterSpacing: -0.24,
        lineHeight: 20
      },
      automationMessage:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 11,fontStyle:"normal",
        fontWeight: "normal", 
        left: 8, 
        top: 48,
        lineHeight: 13
      },

})

// Exportando o componente
export default AutomationCard

