import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';

export function Episodios() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    lerDados();
  });

  const lerDados = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const episodes = await response.json();
      console.log('teste teste');
      setEpisodios(episodes.results);
    } catch (error) {
      setEpisodios('testes');
    }
  };

  return (
    <ScrollView>
      {episodios.map(episodio => {
        <View key={episodio.id}>
          <Text>Nome: {episodio.name}</Text>
          <Text>Data: {episodio.air_date}</Text>
          <Text>Episodio: {episodio.episode}</Text>
          <Text> </Text>
        </View>;
      })}
    </ScrollView>
  );
}
