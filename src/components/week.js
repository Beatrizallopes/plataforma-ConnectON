// Importações necessárias
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// Componente Input
const Week = function({daysAuto}){
  var week = [false,false,false,false,false,false,false]
  for(var i=0;i<daysAuto.length;i++){
    if(daysAuto[i] == "DOM"){
      week[0] = true;
    }
    if(daysAuto[i] == "SEG"){
      week[1] = true;
    }
    if(daysAuto[i] == "TER"){
      week[2] = true;
    }
    if(daysAuto[i] == "QUA"){
      week[3] = true;
    }
    if(daysAuto[i] == "QUI"){
      week[4] = true;
    }
    if(daysAuto[i] == "SEX"){
      week[5] = true;
    }
    if(daysAuto[i] == "SAB"){
      week[6] = true;
    }
  }
  return(
    <View style={styles.week}>
     <Text style={[day(week[0]),styles.days]}>D</Text>
      <Text style={[day(week[1]),styles.days]}>S</Text>
      <Text style={[day(week[2]),styles.days]}>T</Text>
      <Text style={[day(week[3]),styles.days]}>Q</Text>
      <Text style={[day(week[4]),styles.days]}>Q</Text>
      <Text style={[day(week[5]),styles.days]}>S</Text>
      <Text style={[day(week[7]),styles.days]}>S</Text>
    </View>
  )
}
// Estilo do componente
const styles = StyleSheet.create({
  week:{
    flexDirection:"row",
    top:"23%",
    left:"12%"

  },
  days:{
    fontSize:12,
    lineHeight:16,
    marginEnd:13,
  }

})

// Function that establishes the color of the day, based on it's status (active or not)
var day = function(active) {
  if(active){
    return {
      color:"#F18929",
    }
  }
  else{
    return {
      color:"#FFFFFF"
    }
  }
}
// Exportando o componente
export default Week

