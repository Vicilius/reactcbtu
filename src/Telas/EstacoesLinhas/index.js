import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Image } from 'react-native';
import { Title,ProgressBar, Colors } from 'react-native-paper';
import { Badge } from 'react-native-paper';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


////material ui/////
import Box from '@mui/material/Box';


import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SubwayIcon from '@mui/icons-material/Subway';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';



import { Divider } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';




export default function EstacoesLinh(){
    return(
        <View>
             <View style={{alignItems: 'center', justifyContent: 'center'}}>

                
             <Box component="span" sx={{display: 'block', p: 1, m: 1,}}>
             <Card>
                 <Card.Cover source={{ uri: 'https://picsum.photos/700' }}></Card.Cover>

             </Card>

             
            
                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>   <Typography>  Estação Eldorado </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      
            
            <Typography>
                
            Localizada no municipio de Contagem é uma estação terminal da Linha 1 do Metrô de Belo Horizonte e é a estação mais movimentada do Metrô de Belo Horizonte, sendo um importante meio de transporte para os moradores de Contagem.
            </Typography>
         
            <Ionicons name="location-sharp" style={styles.icon} size={20}></Ionicons>  <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" underline="hover"
        >Saiba como chegar nela</Link>

               
        </AccordionDetails>
                </Accordion>




                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>    <Typography> Estação Floramar </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Floramar é uma das estações do Metrô de Belo Horizonte, situada em Belo Horizonte, entre a Estação Waldomiro Lobo e a Estação Vilarinho. Foi inaugurada em 2002.
            </Typography>
         
            <Ionicons name="location-sharp" style={styles.icon} size={20}></Ionicons>  <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" underline="hover"
        >Saiba como chegar nela</Link>

               
        </AccordionDetails>
                </Accordion>


                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Cidade Industrial </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      
            
            <Typography>
                
            Estação Cidade Industrial é uma estação da Linha 1 do Metrô de Belo Horizonte. Atende a população residente nos bairros Camargos e Santa Maria, em Belo Horizonte. Apesar do nome se referir ao bairro Cidade Industrial em Contagem, a Estação fica em Belo Horizonte
            </Typography>
         
            <Ionicons name="location-sharp" style={styles.icon} size={20}></Ionicons>  <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" underline="hover"
        >Saiba como chegar nela</Link>

               
        </AccordionDetails>
                </Accordion>




                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Vila Oeste </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      
            
            <Typography>
                
            Estação Vila Oeste é uma estação da Linha 1 do Metrô de Belo Horizonte. Localizada entre os bairros Oeste e Jardinópolis, atende também aos moradores dos bairros Vila Oeste, Vista Alegre, Madre Gertrudes, Nova Gameleira e Cabana do Pai Tomás. Foi inaugurada em 2000.
            </Typography>
         
            <Ionicons name="location-sharp" style={styles.icon} size={20}></Ionicons>  <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" underline="hover"
        >Saiba como chegar nela</Link>

               
        </AccordionDetails>
                </Accordion>




                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>    <Typography> Estação Gameleira </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      
            
            <Typography>
                
            Estação Gameleira é uma estação da Linha 1 do Metrô de Belo Horizonte. Localiza-se ao lado do Expominas, Parque de Exposições de Minas Gerais.
            </Typography>
         
            <Ionicons name="location-sharp" style={styles.icon} size={20}></Ionicons>  <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" underline="hover"
        >Saiba como chegar nela</Link>

               
        </AccordionDetails>
                </Accordion>


                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Calafate.</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Calafate é uma estação da Linha 1 do Metrô de Belo Horizonte. Localiza-se no bairro de mesmo nome.
            </Typography>
         
            <Ionicons name="location-sharp" style={styles.icon} size={20}></Ionicons>  <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" underline="hover"
        >Saiba como chegar nela</Link>

               
        </AccordionDetails>
                </Accordion>

        


         
             </Box>


             </View>
        </View>
    );
}


    
const styles = StyleSheet.create({
    
    
   
    icon: {
      
      color: '#4070d6',
      height: 40,
      margin: 5,

    },

    icon2: {
      
        color: '#35c43a',
       
  
      },

    iconred: {
      
      color: '#e32012',
      height: 40,
      margin: 5,

    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
      },
    font: {
        fontWeight: 'bold',
        fontSize: 25 
    },
    card: {
        borderRadius:50
    }
    
  });
