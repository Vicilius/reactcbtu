import React from 'react';
import { View, Text } from 'react-native';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export default function Register(){
   
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
   
    return (
       
      
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Typography  variant="h5" component="div">Registrar Conta</Typography>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
     
        <TextField id="outlined-basic" label="Usuário" variant="outlined" />
        <TextField id="outlined-basic" label="Email"  variant="outlined" />
        <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" />

        

        </Box>

        <Autocomplete disablePortal
        id="1"
        options={sexo}
        sx={{ width: 400}}
        renderInput={(params) => <TextField {...params} label="Sexo" />}
        />
        </View>
    );
}

const sexo = [
  { label: 'Masculino'},
  {label: 'Feminino'},
  {label: 'Outro'}
];