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
             

             
            
                <Accordion sx={{m:1}}>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>   <Typography>  Estação Eldorado </Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://soubh.uai.com.br/uploads/post/image/1617/main_eldorado.jpg' }}></Card.Cover>

             </Card>
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
        <Card>
                 <Card.Cover source={{ uri: 'https://fastly.4sqi.net/img/general/600x600/16837432_-qzWrFQU_a-rpaeJw4M3EiYeAGE1MKbJq4hswRxqsG8.jpg' }}></Card.Cover>

             </Card>
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
        <Card>
                 <Card.Cover source={{ uri: 'https://appassets.mvtdev.com/index/public-transit-resources/stops_imgs/img/3357699_3fda9d92e0ec474c.jpg' }}></Card.Cover>

             </Card>
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
        <Card>
                 <Card.Cover source={{ uri: 'data:image/jpeg;base64,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' }}></Card.Cover>

             </Card>
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
        <Card>
                 <Card.Cover source={{ uri: 'data:image/jpeg;base64,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' }}></Card.Cover>

             </Card>
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
        <Card>
                 <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Entradametro.jpg' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Calafate é uma estação da Linha 1 do Metrô de Belo Horizonte. Localiza-se no bairro de mesmo nome.
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
        <Card>
                 <Card.Cover source={{ uri: 'data:image/jpeg;base64,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' }}></Card.Cover>

             </Card>
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Vilarinho.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://www.hojeemdia.com.br/polopoly_fs/1.582928!/image/image.jpg_gen/derivatives/landscape_653/image.jpg' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Vilarinho é um terminal intermodal de transporte coletivo de Belo Horizonte localizado na Região de Venda Nova, próximo às avenidas Cristiano Machado, Pedro I e Vilarinho que integra 47 linhas de ônibus e uma linha de metrô.
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação José Cândido Da Silveira.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'data:image/jpeg;base64,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' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            José Cândido da Silveira é uma estação da Linha 1. do Metrô de Belo Horizonte. Foi inaugurada em abril de 1997 como parte de uma extensão de duas estações da linha de Santa Inês ao Minas Shopping. A estação está localizada entre Santa Inês e Minas Shopping.
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Waldomiro Lobo.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Estação_Waldomiro_Lobo.jpg' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Waldomiro Lobo é uma das estações do Metrô de Belo Horizonte, situada em Belo Horizonte. Foi inaugurada em 2002, sendo a última estação da rede de metrô de Belo Horizonte construída até hoje.
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação São Gabriel.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://img.r7.com/images/2014/05/09/3yaksbu64d_7tw9p6nlcr_file.jpg?dimensions=460x305&resize=460x305&crop=652x432+50+0' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação São Gabriel do metrô de Belo Horizonte está localizada na Avenida Cristiano Machado, n.º 5.600, entre o Anel Rodoviário e a Via 240 no bairro homólogo, na região Nordeste de Belo Horizonte.
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Primeiro de Maio.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://mapio.net/images-p/3920076.jpg' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Primeiro de Maio é uma das estações do Metrô de Belo Horizonte, situada em Belo Horizonte, entre a Estação São Gabriel e a Estação Waldomiro Lobo. Foi inaugurada em 2002.
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Carlos Prates.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://fastly.4sqi.net/img/general/600x600/ecmoPGFlfYmKflkcGjMY2noSc2K2jflGfHcHJ4Kg4tA.jpg' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
          A Estação Carlos Prates é uma estação da Linha 1 do Metrô de Belo Horizonte. Localiza-se entre os bairros Carlos Prates e Barro Preto.
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
       <Ionicons name="location-sharp" style={styles.icon2} size={23}></Ionicons>     <Typography> Estação Santa Efigênia.</Typography>
         
        </AccordionSummary>
        <Card>
                 <Card.Cover source={{ uri: 'https://diariodorio.com/wp-content/uploads/2021/03/Santa-Efigenia-scaled.jpg' }}></Card.Cover>

             </Card>
        <AccordionDetails>
      
            
            <Typography>
                
            A Estação Santa Efigênia é uma das estações do Metrô de Belo Horizonte, situada em Belo Horizonte, entre a Estação Central e a Estação Santa Tereza.
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
