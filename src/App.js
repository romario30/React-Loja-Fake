import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Componentes/Menu';
import Card from './Componentes/Card';
import Categoria from './Componentes/Categoria';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [produtos, setProdutos] = useState([]);
  
// Pegar todos os produtos da API
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((resposta) => {
        setProdutos(resposta.data);
      });
  }, []);

  return (
    <div className="App container">
      <h1 className="mt-3 mb-3"> <FontAwesomeIcon icon={faShop} /> Produtos Fakestore</h1>
      <Menu/>
      <br></br>

      {/* <Categoria /> */}
      {/* categoria={produto.category}  */}
      
      {produtos.map((produto) => {
          return <Card 
            titulo={produto.title} 
            id={produto.id} 
            descricao ={produto.description} 
            imagem = {produto.image}
          />
        })}

      
    </div>
  );
}

export default App;
