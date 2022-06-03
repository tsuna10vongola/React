/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Image, Dimensions, View, FlatList} from 'react-native';

import logo from '../../assets/logo.png';
import Texto from '../../../componentes/Texto';
import Topo from '../../../componentes/Topo';
import item from '../../../componentes/item';
import Detalhes from '../../../componentes/Detalhes';

const width = Dimensions.get('screen').width;

export default function Cesta({topo, detalhes, itens}) {
  return (
    <>
    <FlatList data={itens.lista}
    renderItem={item}
    keyExtractor={({nome}) => nome}
    ListHeaderComponent={()=>{
      return <>
      <Topo {...topo}/>
      <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
      </View>
      </>;
    }}/>
    <Topo/>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 22,
},
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },/*
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'MontserratRegular',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },*/
});
