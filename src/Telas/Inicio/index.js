import React, { Component } from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';
import { Card, Title,ProgressBar, Colors } from 'react-native-paper';
import { Badge } from 'react-native-paper';
import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { Divider } from 'react-native-elements';

import { FAB } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

const {width} = Dimensions.get("screen") ;
const height = 500; //60%





export default class Inicio extends Component{
  render () {
      return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

                    <Text >Seja Bem-vindo(a)</Text>
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

        <ScrollView  pagingEnabled horizontal style={{borderRadius: 15}}>

        

        <View>
            <Card style={styles.card} mode='outlined'>
        <Card.Title></Card.Title>
        <Card.Content>
            <Title><Ionicons name="newspaper" style={styles.icon} size={20}></Ionicons>Cartao</Title>
           
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.cbtu.gov.br/images/banners/slide1.jpg'}}
        style={{width, height, resizeMode: 'cover' }}
        /*style={{width, height}}*/ 
        ></Card.Cover>

            

        </Card>

        

        
        

        </View>




        <View>
            <Card style={styles.card} mode='outlined'>
        <Card.Title></Card.Title>
        <Card.Content>
        <Title > <Ionicons name="book" style={styles.icon} size={20}></Ionicons>   Nossa Missão</Title>
           
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.cbtu.gov.br/images/banners/slide1.jpg'}}
                  style={{width, height, resizeMode: 'cover' }}
                  /*  style={{width,height}} */
        ></Card.Cover>
       

        </Card>

        
        

        </View>





        <View>
            <Card style={styles.card} mode='outlined'>
        <Card.Title></Card.Title>
        <Card.Content>
            <Title><Ionicons name="globe-sharp" style={styles.icon} size={20} ></Ionicons>Entre no site</Title>
         
        </Card.Content>
        <Card.Cover source={{uri: 'https://www.cbtu.gov.br/images/banners/slide1.jpg'}}
                    style={{width, height, resizeMode: 'cover' }}
      /*  style={{width,height}} */
        ></Card.Cover>
        
           
        </Card>

        
        

        </View>






        <View>
            <Card style={styles.card} mode='outlined'>
        <Card.Title></Card.Title>
        <Card.Content>
            <Title><Ionicons name="logo-facebook" style={styles.icon} size={20} ></Ionicons>Facebook</Title>
         
        </Card.Content>
        <Card.Cover source={{uri: 'https://scontent.fplu22-1.fna.fbcdn.net/v/t39.30808-6/s960x960/240883982_289297376540398_3277008512044388971_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFqLSACjQIsR0saeemg3psqlkcih-X43p2WRyKH5fjenTp6RAbNhJYLJC6OA1IieiUAvsP0LFint0cehLlzsBXz&_nc_ohc=yW-DkG2v4RUAX8BafO0&_nc_ht=scontent.fplu22-1.fna&oh=00_AT_LSqxRP_sy8g-ZVUglYFAFVUi5CP-ACNJ7EUKz_p7EgQ&oe=61BBE7FA'}}
                    style={{width, height, resizeMode: 'cover' }}
      /*  style={{width,height}} */
        ></Card.Cover>
        
           
        </Card>

        
        

        </View>


        <View>
            <Card style={styles.card} mode='outlined'>
        <Card.Title></Card.Title>
        <Card.Content>
            <Title><Ionicons name="logo-instagram" style={styles.icon} size={20} ></Ionicons>Instagram</Title>
         
        </Card.Content>
        <Card.Cover source={{uri: 'https://scontent.fplu22-1.fna.fbcdn.net/v/t39.30808-6/263407090_355316866605115_8941728670164081916_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG7LmFkhf2vYHD6IJ6ONMk0Y5jOBQl4LIljmM4FCXgsiRYs_11_k9_KWEByWtfIx_kRILyX5wbGcFdswYYGLmUV&_nc_ohc=rgbST_exnmAAX-ld3fm&_nc_ht=scontent.fplu22-1.fna&oh=677bfd77dcc0e76f7f6976a36c5e8ead&oe=61BBCCAA'}}
                    style={{width, height, resizeMode: 'cover' }}
      /*  style={{width,height}} */
        ></Card.Cover>
        
           
        </Card>

        
        

        </View>











        </ScrollView>


        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>


        <FAB
    style={styles.fab}
    color='#3562c4'
    icon="help"
    
    
    onPress={() => navigation.navigate('Ajuda') }
         /> 
         <FAB
            style={styles.fab}
            color='#3562c4'
            icon="map"
            onPress={() => navigation.navigate('Estacoes') }
            />



        <FAB
            style={styles.fab}
            color="#3562c4"
            icon="clock-time-nine"
    
             onPress={() => navigation.navigate('Horario') }
            />










        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>

        <Button title="Ir para as Linhas" onPress={() => navigation.navigate('Linhas')}/>


        </View>


       





        
        

       

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
      }
    
  });









    
    
    
    
    
    
    
   
