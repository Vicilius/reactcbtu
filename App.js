import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card,  Avatar, Title, Paragraph } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const Tab = createBottomTabNavigator();


import teste from './src/Telas/teste';
import Inicio from './src/Telas/Inicio';
//import Ajuda from './src/Telas/Ajuda';
import Compartilhe from './src/Telas/Compartilhe';
import Estacoes from './src/Telas/Estacoes';
import Horario from './src/Telas/Horario';
import Linhas from './src/Telas/Linhas';
import Perfil from './src/Telas/Perfil';
import Login from './src/Telas/Login';
import Register from './src/Telas/Register'
import { Header } from 'react-native-elements';
import color from 'color';
import { createStackNavigator } from '@react-navigation/stack';

<Header
  leftComponent={{ icon: 'menu', color: '##24d453', iconStyle: { color: '##24d453' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '##24d453' } }}
  rightComponent={{ icon: 'home', color: '##24d453' }}
/>



function MyTabs() {
  return (
    <Tab.Navigator>
     
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Ajuda" component={Ajuda} />
      <Tab.Screen name="Horário" component={Horario} />
      <Tab.Screen name="Estações" component={Estacoes} />
      <Tab.Screen name="Linhas" component={Linhas} />
      <Tab.Screen name="Compartilhar" component={Compartilhe} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="teste" component={teste} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Início" component={Inicio}
      options={{
        
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="ios-home-sharp"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

        />
     
      <Drawer.Screen name="Perfil" component={Perfil} 
      options={{
        title: 'Perfil',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="person-circle"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      />
      <Drawer.Screen name="Estações" component={Estacoes}
      options={{
        title: 'Mapa das Estações',
      
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="map"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      
      
      
      />
      <Drawer.Screen name="Horário" component={Horario} 
      
      options={{
        title: 'Horários',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="ios-time-sharp"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      />
    
     {/*<Drawer.Screen name="Ajuda" component={Ajuda} 
      
      options={{
        title: 'Ajuda',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="help-sharp"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      
      
      
      />


      */}

      <Drawer.Screen name="Linhas Disponíveis" component={Linhas} 
      
      
      options={{
        title: 'Linhas Disponíveis',
        
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="md-subway"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      
      
      />
      <Drawer.Screen name="Compartilhe o app" component={Compartilhe} 
      
      options={{
        title: 'Compartilhe o app',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="share-social-sharp"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}
/>



<Drawer.Screen name="Login" component={Login} 
      
      
      options={{
        title: 'Login',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="add-outline"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      
      
      />

<Drawer.Screen name="Register" component={Register} 
      
      
      options={{
        title: 'Criar conta',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="add-circle-outline"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      
      
      />





<Drawer.Screen name="teste" component={teste} 
      
      
      options={{
        title: 'Teste',
        drawerIcon: ({focused, size}) => (
           <Ionicons
              name="add-circle-outline"
              size={size}
              color={focused ? '#4c8a36' : '#ccc'} 
              />

              ),
        }}

      
      
      
      
      />













    </Drawer.Navigator>
  );
}



export default function App() {

  return (
    

    




    <NavigationContainer style={styles.text}>
     <MyDrawer style={styles.text}/>
    
      
     
   
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins Regular'
  }
});
