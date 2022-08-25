import PropTypes from 'prop-types';
 
import styles from './FiltroSecao.module.css';

export const FiltroSecao = ({arraySecoes, onSelecionarSecao}) => (
   
    // return(
        <ul className={styles.listaArray}>
          {arraySecoes.map((secao, index) => (
            <li className={styles.listaSecao} key={index}>
                <button onClick={onSelecionarSecao(secao.titulo)}> 
                    {secao.titulo}
               </button> 
              {/* <button onClick={() =>onSelecionarSecao(secao.titulo)}> 
                    {secao.titulo}
               </button> */}
            </li>
          ))}
        </ul>
);


FiltroSecao.propTypes = {
    arraySecoes: PropTypes.array.isRequired,
    onSelecionarSecao: PropTypes.func.isRequired,
  };
