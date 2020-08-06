import React  from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; // Importando os componentes que vão ser usados
import { createStackNavigator } from '@react-navigation/stack';

// Importing the pages
import Rooms from "./rooms"; 
import FavoriteRooms from "./favoriteRooms"; 
import Room from "./room";
import Automations from "./automations"; 
import Automation from "./automation";
import addRooms from './addRooms';

// Pages related to the creation of a new room
import creatingRoom from './creatingRoom/creatingRoom';
import addDevices from './creatingRoom/addDevices';
import creatingRoom2 from './creatingRoom/creatingRoom2';


// Pages related to the creation of a new trigger
import creatingTrigger from './creatingTrigger/creatingTrigger1';
import creatingTrigger2 from './creatingTrigger/creatingTrigger2';
import selectRoomsTrig from './creatingTrigger/selectRooms';
import creatingTrigger3 from './creatingTrigger/creatingTrigger3';
import chooseActionsTrig from './creatingTrigger/chooseActions';
import creatingTrigger4 from './creatingTrigger/creatingTrigger4';

// Pages related to the creation of a new automation
import creatingAutomation from './creatingAutomation/creatingAuto1';
import creatingAuto2 from './creatingAutomation/creatingAuto2';
import selectRoomsAuto from './creatingAutomation/selectRooms';
import creatingAuto3 from './creatingAutomation/creatingAuto3';
import chooseActionsAuto from './creatingAutomation/chooseActions';
import creatingAuto4 from './creatingAutomation/creatingAuto4';


const Stack = createStackNavigator()
function AmbientesStack() {
  return (
    <Stack.Navigator initialRouteName='Ambientes'  >
      <Stack.Screen
        name="Rooms"
        component={Rooms}
        options={{
          headerShown: false,
          animationEnabled:false,
        }}
      />
     <Stack.Screen
        name="Favorite Rooms"
        component={FavoriteRooms}
        options={{
          headerShown: false,
          animationEnabled:false,
        }}
      />
      <Stack.Screen
        name="Room"
        component={Room}
        options={{
          headerShown: false,
          animationEnabled:false,
        }}
      />
       <Stack.Screen
        name="Create Room"
        component={creatingRoom}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Add Devices"
        component={addDevices}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Create Room 2"
        component={creatingRoom2}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    
  );
}
function AutomacoesStack() {
  return (
    <Stack.Navigator initialRouteName='Automações'>
      <Stack.Screen
        name="Automations"
        component={Automations}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="Automation"
        component={Automation}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="Add Rooms"
        component={addRooms}
        options={{
          headerShown: false, 
        }}
      />
      {/* Páginas referentes à criação de gatilhos */}
        <Stack.Screen
        name="Create Trigger"
        component={creatingTrigger}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Create Trigger 2"
        component={creatingTrigger2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Select Trigger Rooms"
        component={selectRoomsTrig}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Create Trigger 3"
        component={creatingTrigger3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Choose Trigger Actions"
        component={chooseActionsTrig}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Create Trigger 4"
        component={creatingTrigger4}
        options={{
          headerShown: false,
        }}
      />
      {/* Páginas referentes à criação de automações */}
      <Stack.Screen
        name="Create Automation"
        component={creatingAutomation}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Create Automation 2"
        component={creatingAuto2}
        options={{
          headerShown: false,
        }}
      />  
      <Stack.Screen
        name="Select Automation Rooms"
        component={selectRoomsAuto}
        options={{
          headerShown: false,
        }}
      />  
      <Stack.Screen
        name="Create Automation 3"
        component={creatingAuto3}
        options={{
          headerShown: false,
        }}
      /> 
      <Stack.Screen
        name="Choose Actions Automation"
        component={chooseActionsAuto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Create Automation 4"
        component={creatingAuto4}
        options={{
          headerShown: false,
        }}
      />   
         
    </Stack.Navigator>
    
  );
}


const Tab = createBottomTabNavigator(); // Criando o menu inferior
const App = () => {
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
          <Tab.Screen name="Ambientes" component={AmbientesStack} />
          <Tab.Screen name="Automações" component={AutomacoesStack} />
          <Tab.Screen name="Consumo" component={Automations} />
          <Tab.Screen name="Configurações" component={Automations} />
        </Tab.Navigator>
 </NavigationContainer>
  );
};


export default App;
