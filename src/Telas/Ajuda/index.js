import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { View, Text, ScrollView, Image} from 'react-native';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Dimensions, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

import TextField from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    
    <div>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.font}>Selecione uma opção: </Text>
      <Button onClick={handleOpen}  variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>Complicações em alguma estação</Button>
        
        
      <Button onClick={handleOpen}  variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>Problemas com o Cartão </Button>
      

      
      <Button onClick={handleOpen}  variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>Outro problema</Button>
      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Complicações com alguma estação:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Preencha os campos abaixo
          </Typography>


          <TextField id="outlined-basic" label="Usuário" variant="filled"  sx={{ width: 300}}  />

        <TextField id="outlined-basic" label="Email"  variant="filled"  sx={{ width: 300}}  />

        <TextField id="outlined-basic" label="Senha" type="password" variant="filled"  sx={{ width: 300}} />



        <Autocomplete disablePortal
        id="1"
        options={Estacao}
        sx={{ width: 300}}
        renderInput={(params) => <TextField {...params} label="Estação" />}
        />



        </Box>
      </Modal>
      </View>
    </div>
   
  );
}

const Estacao = [
    { label: 'Floramar'},
    {label: 'Eldorado'},
    {label: 'Carlos Prates'},
    {label: 'Vilarinho'},
    {label: 'Lagoinha'},
  ];


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