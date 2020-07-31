// List of required imports 
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// MAIN COMPONENT - Component AutomationCard: used to display information about the automation/trigger
const AutomationCard = function({type,name,nextEvent,message,roomsInfo}){
  return(
        <View style={[styles.automation,typeAuto(type)]}>
          <Text style={styles.automationMessage}>{message}:</Text>
          <Text style={styles.automationNextEvent}>{nextEvent}</Text>
          <Text style={styles.automationName}>{name}</Text>
          <Text style={styles.automationRooms}>{roomsInfo}</Text>
       </View>
        )}

// Function typeAuto(type): function that identifies the type of the automation (if it is an automation or a trigger)
var typeAuto = function typeAuto(type) {
  if(type === 'Automação'){
    return {
      backgroundColor:"#568AEA",
    }
  };

  if(type === 'Gatilho'){
    return {
      backgroundColor:"#D66075",
    }
  }
}

// Styling the component
const styles = StyleSheet.create({
    automation:{
        width: "90%",
        height: 154,
        left: "5%",
        top: 8,
        backgroundColor: "rgba(255, 255, 255,0.13)",
        borderRadius: 12,
        marginEnd:8,
        marginTop:8,
      },
    automationName: {
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
   automationSchedule:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 11,
        left: 8, 
        top: 8
    },
    automationNextEvent:{
      position:"relative",
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
      automationMessage:{
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
      automationRooms:{
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

// Exporting the main component
export default AutomationCard

