import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { View, Text, ScrollView, Image} from 'react-native';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Dimensions, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';
// or for Day.js

import Autocomplete from '@mui/material/Autocomplete';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


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
  const [open, setOpen ,  setOpen2, setOpen3] = React.useState(false);
 

  const AbrirModalEstacao= () => setOpen(true);
  const FecharModalEstacao = () => setOpen(false);

  const AbrirModalCartao= () => setOpen2(true);
  const FecharModalCartao = () => setOpen2(false);

  const AbrirModalOutro= () => setOpen3(true);
  const FecharModalOutro = () => setOpen3(false);



  const [value, setValue] = React.useState(null);




  
  

  return (

    
    
    
    <div>
       
     
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.font2}>Ajuda</Text>
              <Text style={styles.font}>Selecione uma opção: </Text>
      <Button onClick={AbrirModalEstacao}  variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}  sx={{ m: 2}} >Complicações em alguma estação</Button>
        
        
      <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}  sx={{ m: 2 }} >Problemas com o Cartão </Button>
      

      
      <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}  sx={{ m: 2}} >Outro problema</Button>
      
      
      <Modal
        open={open}
        onClose={FecharModalEstacao}
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


          <TextField id="outlined-basic" label="Seu Nome"   sx={{ width: 380, m: 2}}/>
          <Stack component="form" noValidate spacing={3}>
          <TextField
        id="date"
        label="Data"
        type="date"
        
        sx={{ width: 380, m: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
          </Stack>
         

        



        <Autocomplete disablePortal
        id="1"
        options={Estacao}
        sx={{ width: 380}}
        sx={{ m: 2 }} 
        renderInput={(params) => <TextField {...params} label="Estação com defeito" />}
        />


          <TextareaAutosize
          sx={{ m: 2 }} 
          minRows={8}
          aria-label="maximum height"
           placeholder="Descrição do problema"
           
          style={{ width: 395  }}
         />


          <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}   
          sx={{
            mx: 'auto',
            bgcolor: 'primary.main',
            color: '#fff',
            width: 200,
            p: 1,
            m: 1,
            borderRadius: 1,
            textAlign: 'center',
          }} >Enviar</Button>
        


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
        fontSize: 15 
    },
    font2: {
      fontWeight: 'bold',
      fontSize: 35 
  },
    card: {
        borderRadius:50
    }
    
  });