import React  from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; // Importando os componentes que vão ser usados
import { createStackNavigator } from '@react-navigation/stack';
import Rooms from "./rooms"; 
import FavoriteRooms from "./favoriteRooms"; 
import Ambiente from "./ambiente" // Importando a página de Ambiente
import Automacoes from "./automacoes"; // Importando a página Automações
import Automação from "./automação"; // Importando a página Automação
import addAmbientes from "./addAmbientes"// Importando a página de adicionar ambientes 

// Páginas relacionadas à criação de ambientes
import criarAmbiente from './criandoAmbiente/criarAmbiente'
import addDispositivos from './criandoAmbiente/addDispositivos'


// Páginas relacionadas à criação de gatilhos
import criarGatilho from './criandoGatilho/criarGatilho1';
import criarGatilho2 from './criandoGatilho/criarGatilho2';
import selecionarAmbientes from './criandoGatilho/selecionarAmb';
import criarGatilho3 from './criandoGatilho/criarGatilho3';
import escolherAções from './criandoGatilho/escolherAções';
import criarGatilho4 from './criandoGatilho/criarGatilho4';

// Páginas relacionadas à criação de automação
import criarAutomação from './criandoAutomacao/criarAutomação1';
import criarAutomação2 from './criandoAutomacao/criarAutomação2';
import selecionarAmbientesAuto from './criandoAutomacao/selecionarAmbAuto';
import criarAutomação3 from './criandoAutomacao/criarAutomação3';
import escolherAçõesAuto from './criandoAutomacao/escolherAçõesAuto';
import criarAutomação4 from './criandoAutomacao/criarAutomação4';

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
        name="Ambiente"
        component={Ambiente}
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
        name="Automações"
        component={Automacoes}
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
        name="Criar Gatilho"
        component={criarGatilho}
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
        name="Criar Automação"
        component={criarAutomação}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Criar Automação 2"
        component={criarAutomação2}
        options={{
          headerShown: false,
        }}
      />  
      <Stack.Screen
        name="Selecionar Ambientes Automação"
        component={selecionarAmbientesAuto}
        options={{
          headerShown: false,
        }}
      />  
      <Stack.Screen
        name="Criar Automação 3"
        component={criarAutomação3}
        options={{
          headerShown: false,
        }}
      /> 
      <Stack.Screen
        name="Escolher Ações Automação"
        component={escolherAçõesAuto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Criar Automação 4"
        component={criarAutomação4}
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
          <Tab.Screen name="Consumo" component={Automacoes} />
          <Tab.Screen name="Configurações" component={Automacoes} />
        </Tab.Navigator>
 </NavigationContainer>
  );
};


export default App;
