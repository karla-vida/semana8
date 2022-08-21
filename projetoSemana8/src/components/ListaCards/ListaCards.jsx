import PropTypes from 'prop-types';

import {useState} from "react";

import { Card } from '@components';

import styles from './ListaCards.module.css';

export const ListaCards = ({ produtos }) => {
 const [idSelecionado, setSelecionado] = useState([]);
 
 function handleSelecionar(id){
  if(idSelecionado.includes(id)){
  let arrayFiltrado = idSelecionado.filter((n)=> n!== id);
  setSelecionado (arrayFiltrado);
}
else
setSelecionado([...idSelecionado, id]);
 }
 
return(
  <ul className={styles.lista}>
    {produtos.map((produto) => (
      <li className={styles.listaItem} key={produto.id}>
        <Card produto={produto} selecionado={idSelecionado.includes(produto.id)}
         onSelecionar={() =>handleSelecionar(produto.id)} />
      </li>
    ))}
  </ul>
);
    }
ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
