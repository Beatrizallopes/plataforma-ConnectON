// List of required imports
import React,{useState}   from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput,  Modal,TouchableWithoutFeedback} from 'react-native';
import modalStyle from './../style/modalStyle'

// MAIN CONPONENT: editRoom()
const editRoom = ({route,navigation}) => {
  const {room} = route.params;
  const [value, onChangeText] = React.useState(room.name);
  const [choosedColor, setColor] = React.useState(room.color);
  room.color = choosedColor;
  room.name = value;
  // Component colorPick: this component is inside the main component because it needs to acess and change the value of a variable inside it
const ColorPick = () => {
  const colors = ["#D36D4B","#A6845F","#CD9C44","#B0862C","#6A9640","#529C78","#80908A","#5694A5","#568AEA","#6888CF","#A271D6","#A57FA8","#C16AB5","#D66075","#A58183"];
  const picker = colors.map((color) => {
    return(
      <TouchableWithoutFeedback onPress={() => {setColor(color)}} key={color}>
          <View style={[styles.colorChoosed,circleColor(color),choosenColor(choosedColor,color)]} ></View>
      </TouchableWithoutFeedback>
    )
  })
  return picker
}
  return(
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={true} > 
            <View style={modalStyle.modal}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{room:room})}>
                  <Text style={[modalStyle.textSupLeft,modalStyle.colorText]}> Cancelar </Text>               
                 </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Room",{room:room})}>
                    <Text style={[modalStyle.textSupRight,modalStyle.colorText]}> Confirmar </Text>
                </TouchableWithoutFeedback> 
                <View style={styles.input}>
                  <Text style={modalStyle.inputLabel}>NOME DO AMBIENTE </Text>
                  <TextInput style={modalStyle.inputBox}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  ></TextInput>
                </View>
                <View style={styles.inputColor}>
                    <Text style={modalStyle.inputLabel}>COR DO MARCADOR  </Text>
                    <View style={styles.colorpick}>
                      <ColorPick></ColorPick>
                    </View>
                </View>
            </View>
        </Modal> 
      </ScrollView>
    )
  }

// Function color(colorMarker) -> defines the color of the component
const circleColor = function(colorMarker){
  return{
    backgroundColor: colorMarker,
  }
}
// Function choosenColor -> Indicates to the user that this was the color picked
const choosenColor = function(choosedColor,color){
  if(choosedColor === color){
    return {
      borderWidth:2,
      borderColor:"white",
    }
  } else {
    return {
      borderWidth:0,
    }
  }
}
 
// Styling the components 
const styles = StyleSheet.create({
  buttonPosition:{
    position:"absolute",
    top:"32%",
  },
  input:{
    position:'absolute',
    top:"12%",
    left:"8%",
    width:"88%"
  },
  inputColor:{
    position:'absolute',
    top:"25%",
    left:"8%",
    width:"88%",
    marginTop:10,
  },
  colorpick:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    left:"3%"
  },
  colorChoosed:{
    // position: "absolute",
    width: 45,
    height: 45,
    // backgroundColor: "#D36D4B",
    margin:10,
    borderRadius:50,
  }

})

// Dynamic Styles


// Exporting the main component
  export default editRoom;