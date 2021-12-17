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
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SubwayIcon from '@mui/icons-material/Subway';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';




import { Divider } from 'react-native-elements';

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
         height="130"
        weight="150"
        image="https://www.cbtu.gov.br/images/banners/slide1.jpg"
        
      />



       
      </CardContent>
      <Divider>
        
      <CardActions>
        <Link href="https://www.cbtu.gov.br/index.php/pt/belo-horizonte/"  underline="hover"
        >Acessar o site</Link>

      
        
      </CardActions>
      </Divider>


      




    </React.Fragment>
  );
export default class Inicio extends Component {


  




    
  render () {

   

      return (

        <React.Fragment>
       <Container fixed>

      

        
          
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
       
        <div style={{width: '100%'}}>
          <Box component="span" sx={{display: 'block', p: 1, m: 1,}}>

          
            
        
                    <Text style={styles.font}>Seja Bem-vindo(a)</Text>
                 

        
                    </Box>
                    </div>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        
       



       

       
        


            </View>
           


   
 





        <View style={{width, height}}>
       

    {/*   <ScrollView  pagingEnabled horizontal style={{borderRadius: 15}}>  */}

        

        <View>
       

        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
        
        

        </View>

  {  /*    <View>
        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card2}</Card>
    </Box>
        </View>

  */}
   {/* </ScrollView> */} 


        <View>
        <div style={{width: '100%'}}>
          <Box component="span" sx={{display: 'block', p: 1, m: 1,}}>


        





      </Box>
                    </div>


        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          
          
        <Fab size="small" color="primary" aria-label="add">
      <SubwayIcon />
      </Fab>



      <Fab size="small" color="primary" aria-label="add">
      <InfoIcon/>
      </Fab>




      <Fab size="small" color="primary" aria-label="add">
      <AccessAlarmIcon/>
      </Fab>
          
          
          </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: '100%'}}>
        <Box component="span" sx={{display: 'block', p: 1, m: 1,}}>



        


       




        <Accordion>
            
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lista de Linhas Disponíveis</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography><Ionicons name="subway" style={styles.icon} size={20}></Ionicons>
           Estação Eldorado - Operação Normal
          </Typography>

          <Typography><Ionicons name="subway" style={styles.iconred} size={20}></Ionicons>
           Estação Carlos Prates - Fluxo intenso
          </Typography>

           <Typography><Ionicons name="subway" style={styles.iconred} size={20}></Ionicons>
           Estação Minas Shopping - Fluxo intenso
          </Typography>

           <Typography><Ionicons name="subway" style={styles.icon} size={20}></Ionicons>
           Estação Floramar - Operação Normal
          </Typography>

           <Typography><Ionicons name="subway" style={styles.iconred} size={20}></Ionicons>
           Estação Gameleira - Fluxo intenso
          </Typography>        
        </AccordionDetails>
      </Accordion>
      

      </Box>
        </div>

      </View>

       

        </View>



        </View>
        </Container>
        </React.Fragment>
      );
  }
}







    
const styles = StyleSheet.create({
    
    
   
    icon: {
      
      color: '#4070d6',
      height: 40,
      margin: 5,

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









    
    
    
    
    
    
    

