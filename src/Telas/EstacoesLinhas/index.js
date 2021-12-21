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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


import { Divider } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';


export default function EstacoesLinh(){
    return(
        <View>
             <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
           Estação Eldorado 
          </Typography>

               
        </AccordionDetails>
                </Accordion>


                <Accordion>
                <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Estação FLoramar</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography><Ionicons name="subway" style={styles.icon} size={20}></Ionicons>
          Trens em Operação
          </Typography>

               
        </AccordionDetails>
                </Accordion>

             </Box>


             </View>
        </View>
    );
}