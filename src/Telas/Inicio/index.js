import React, { Component } from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';
import { Card, Title,Button, ProgressBar, Colors } from 'react-native-paper';


import { Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { Divider } from 'react-native-elements';

import { FAB } from 'react-native-paper';


const {width} = Dimensions.get("screen") ;
const height = 500; //60%





export default class Inicio extends Component{
  render () {
      return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
   
 





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











        </ScrollView>




        
        

       

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









    
    
    
    
    
    
    
   
