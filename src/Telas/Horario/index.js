import React from 'react';
import { View, Text } from 'react-native';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


export default function Horario(){
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
         Horário em dias Uteis
        </Typography>
        <Typography variant="h5" component="div">
          08:00 - 12:30
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        8 a 10 minutos nos picos
        </Typography>
        <Typography variant="body2">
        18 minutos demais horários
      
         
        </Typography>
      </CardContent>
     
    </Card>
    </View>






    );
}