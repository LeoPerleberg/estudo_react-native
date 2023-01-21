import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';

export default function Produtores({melhoresProdutores}) {
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores} = useTextos();
  const [listaPersonagens, setlistaPersonagens] = useState([]);

  useEffect(() => {
    const personagens = carregaPersonagens();
    setlistaPersonagens(personagens);
  }, []);

  const carregaPersonagens = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const character = await response.json();
      return character.results;
    } catch (error) {
      return 'erro';
    }
  };

  console.log(listaPersonagens);

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} aoPressionar={() => {}} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
      style={estilos.lista}
    />
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
