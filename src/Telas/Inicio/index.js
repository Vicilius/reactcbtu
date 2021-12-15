import React, { Component } from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';


import { Title,ProgressBar, Colors } from 'react-native-paper';
import { Badge } from 'react-native-paper';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


////material ui/////
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { Divider } from 'react-native-elements';
import { FAB } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

const {width} = Dimensions.get("screen") ;
const height = 500; //60%



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  const card = (
    <React.Fragment>
      <CardContent style={{borderRadius: 25}}>
       
        <Typography variant="h5" component="div">
        Ultimas Noticias da CBTU
        </Typography>
        <CardMedia
        component="img"
        height="200"
        image="assets\1984.png"
        
      />



       
      </CardContent>
      <Divider>
      <CardActions>
        <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/" color="inherit" underline="none">Acessar o site</Link>
      
        
      </CardActions>
      </Divider>


      




    </React.Fragment>
  );



export default class Inicio extends Component{
   








    
  render () {

    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>


      return (
          
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

                    <Text style={styles.font}>Seja Bem-vindo(a)</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

        <FAB
    style={styles.fab}
    color='#3562c4'
    icon="camera"
    
    
    onPress={() => console.log('Pressed')}
  /> 




            </View>
           


   
 





        <View style={{width, height}}>
       {/* <ProgressBar progress={1} color={Colors.red800} />*/}

      {/*  <ScrollView  pagingEnabled horizontal style={{borderRadius: 15}}> */ }

        

        <View>
{/*
         <Card style={styles.card} mode='outlined'> 
       <Card.Title></Card.Title> 
       <Card.Content> 
          <Title><Ionicons name="newspaper" style={styles.icon} size={20}></Ionicons>Cartao</Title> 
           
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.cbtu.gov.br/images/banners/slide1.jpg'}}
        style={{width, height, resizeMode: 'cover' }}
        style={{width, height}} ></Card.Cover>
    
            

        </Card> 
*/}

        

<Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
        
        

        </View>




      










      {/*  </ScrollView> */}


        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>


        <FAB
    style={styles.fab}
    color='#3562c4'
    icon="help"
    
    
  
         /> 
         <FAB
            style={styles.fab}
            color='#3562c4'
            icon="map"
           
            />



        <FAB
            style={styles.fab}
            color="#3562c4"
            icon="clock-time-nine"
    
          
            />










        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>

        <Button title="Ir para as Linhas"
        onPress={() => {navigation.navigate('Linhas');}}/>


        </View>


       




        <Accordion>
            
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lista de Linhas Disponíveis</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           aoba
          </Typography>
        
        </AccordionDetails>
      </Accordion>
      
        
        

       

        </View>



        </View>


        
      );
  }
}







    
const styles = StyleSheet.create({
    
    
   
    icon: {
      
      color: '#4070d6',
      height: 40,
      margin: 5,

    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
      },
    font: {
        fontWeight: 'bold'  
    },
    card: {
        borderRadius:50
    }
    
  });









    
    
    
    
    
    
    

