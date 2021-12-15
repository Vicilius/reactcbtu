import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Linhas from './Linhas';

const NextPageButton = ()=>{
  //use navigation hook shown as below
  const navigation = useNavigation();

  return (
    <Button
      title="Naigate to next page"
      onPress={() => {
        navigation.navigate('Linhas'); 
      }}
    />
  );
}

export default NextPageButton