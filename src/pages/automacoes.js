import React,{useState}   from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

var x = false;
const Automacoes = () => {
  const [favorito, setfavorito] = useState(x);
  var urlIconeFav =  require('./../images/icons/naoFavorito.png');      
  if (favorito){ 
   urlIconeFav = require('./../images/icons/favorito.png');
    }
  return (
    <View style={styles.container}>
      <Text>{favorito}</Text>
      <TouchableWithoutFeedback onPress={() => {
          setfavorito(!favorito);
        }}>
      <Image source={urlIconeFav}></Image>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Automacoes;
