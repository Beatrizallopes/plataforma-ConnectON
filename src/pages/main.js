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
import Automação from "./automação"; // Importando a página Automação
import addAmbientes from "./addAmbientes"// Importando a página de adicionar ambientes 

// Páginas relacionadas à criação de ambientes
import criarAmbiente from './criandoAmbiente/criarAmbiente'
import addDispositivos from './criandoAmbiente/addDispositivos'


// Páginas relacionadas à criação de gatilhos
// import criarGatilho from './criandoGatilho/criarGatilho1';
import creatingTrigger from './creatingTrigger/creatingTrigger1'
import criarGatilho2 from './criandoGatilho/criarGatilho2';
import selecionarAmbientes from './criandoGatilho/selecionarAmb';
import criarGatilho3 from './criandoGatilho/criarGatilho3';
import escolherAções from './criandoGatilho/escolherAções';
import criarGatilho4 from './criandoGatilho/criarGatilho4';

// Páginas relacionadas à criação de automação
import creatingAutomation from './creatingAutomation/creatingAuto1';
import creatingAuto2 from './creatingAutomation/creatingAuto2';
import selectRoomsAuto from './creatingAutomation/selectRooms';
import creatingAuto3 from './creatingAutomation/creatingAuto3';
import chooseActionsAuto from './creatingAutomation/chooseActions';
import creatingAuto4 from './creatingAutomation/creatingAuto4';
import createAuto4 from './creatingAutomation/creatingAuto4';
// import escolherAçõesAuto from './creatingAutomation/escolherAçõesAuto';
// import criarAutomação4 from './creatingAutomation/criarAutomação4';

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
        name="Criar Ambiente"
        component={criarAmbiente}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Adicionar dispositivos"
        component={addDispositivos}
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
        name="Automação"
        component={Automação}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="Adicionar Ambientes"
        component={addAmbientes}
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
        name="Criar Gatilho 2"
        component={criarGatilho2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Selecionar Ambientes"
        component={selecionarAmbientes}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Criar Gatilho 3"
        component={criarGatilho3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Escolher Ações"
        component={escolherAções}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Criar Gatilho 4"
        component={criarGatilho4}
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
        component={createAuto4}
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
