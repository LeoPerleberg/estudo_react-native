import {useState, useEffect} from 'react';

import {carregaPersonagens} from '../servicos/carregaDados';

export default function usePersonagens() {
  const [listaPersonagens, setlistaPersonagens] = useState([]);

  useEffect(() => {
    const personagens = carregaPersonagens();
    setlistaPersonagens(personagens);
  }, []);

  return listaPersonagens;
}
