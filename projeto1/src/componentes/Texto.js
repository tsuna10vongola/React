/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import React from 'react';
import {Text} from 'react-native';

export default function texto({children, style}) {

    let estilos = estilos.texto;

    if (style?.fontWeight === 'bold'){
     estilos = estilos.textoNegrito;
    }

    return <Text style={[style, estilos.texto]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
      fontFamily: "MontserratBold",
      fontWeight: 'normal',
  },
});
