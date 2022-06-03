/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import mock from './src/mocks/cesta.js';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/cesta/componentes';

export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}