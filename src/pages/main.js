import React  from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ambientes from "./ambientes"; // Importando a página Ambientes
import Automacoes from "./automacoes"; // Importando a página Automações
import { StyleSheet, Image } from 'react-native'; // Importando os componentes que vão ser usados

const Tab = createBottomTabNavigator(); // Criando o menu inferior

const App = ({ navigation }) => {
  return (
  <NavigationContainer>
   <Tab.Navigator 
   screenOptions={({route}) => ({
    tabBarIcon:({focused}) => {

      if(route.name == 'Ambientes'){ // Se for o tab da rota Ambientes:
        if(focused){
          return <Image source={require('./../images/icons/ambientesAtivo.png')}/>; // Se estiver selecionado
        } else {
          return <Image source={require('./../images/icons/ambientes.png')}/> // Se não estiver selecionado
        };
        
      }
      if(route.name == 'Automações'){
        if(focused){
          return <Image source={require('./../images/icons/automacoesAtivo.png')}/>;
        } else {
          return <Image source={require('./../images/icons/automacoes.png')}/>
        };
      }
      if(route.name == 'Consumo'){
        if(focused){
          return <Image source={require('./../images/icons/consumo.png')}/>;
        } else {
          return <Image source={require('./../images/icons/consumo.png')}/>
        };
      }
      if(route.name == 'Configurações'){
        if(focused){
          return <Image source={require('./../images/icons/configuracoes.png')}/>;
        } else {
          return <Image source={require('./../images/icons/configuracoes.png')}/>
        };
      }
    }

   })}
   tabBarOptions={{ // Algumas configurações de estilo do menu inferior
    activeTintColor:'rgb(241,104,37)', 
    inactiveTintColor:'rgb(101,101,101)',
    style: {                    
      backgroundColor: "#000000", 
      borderTopColor: 'transparent',
     },  
     labelStyle: {        
      fontSize: 11,   
      fontWeight: 'normal',  
      fontFamily: "Barlow",     
     },

   }}
   >
        <Tab.Screen name="Ambientes" component={Ambientes} />
        <Tab.Screen name="Automações" component={Automacoes} />
        <Tab.Screen name="Consumo" component={Automacoes} />
        <Tab.Screen name="Configurações" component={Automacoes} />
      </Tab.Navigator>
 </NavigationContainer>
  );
};

export default App;
