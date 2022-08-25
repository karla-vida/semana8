import { Footer, Header, Secao, FiltroSecao } from "@components";
import produtos from "@services/produtos.json";
import { array } from "prop-types";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(subSecoesEntradas, subSecoesPrincipais);
  let idSelecionado, setSelecionado = useState();

  
  let arrayGlobal = [
    {
      titulo: "Entradas",
      produtos: produtos.entradas,
      subSecao: new Set(produtos.entradas.map((p) => p.subSecao)),
    },
    {
      titulo: "Principais",
      produtos: produtos.principais,
      subSecao: new Set(produtos.principais.map((p) => p.subSecao)),
    },
    {
      titulo: "Sobremesas",
      produtos: produtos.sobremesas,
      subSecao: new Set(produtos.sobremesas.map((p) => p.subSecao)),
    },
  ];

function handleSelecionarSecao(titulo){
 
  if(idSelecionado == titulo){
  setSelecionado = null;

}
else
 setSelecionado = titulo;

 }
 

  return (
    <div className={styles.app}>
      <Header />
      {arrayGlobal.map((secao,index) => (
      <FiltroSecao key={index} 
      arraySecoes={arrayGlobal}
      onSelecionarSecao={() =>handleSelecionarSecao(secao.titulo)}
      />

     
         ))}
      <main className={styles.main}>
        {arrayGlobal.map((secao,index) => (
          
          <Secao
            nome={secao.titulo} key={index}
            produtos={secao.produtos}
            subSecoes={secao.subSecao !== '' ? Array.from(secao.subSecao):null}
          />
        ))}
      </main>
   
      <Footer />
    </div>
  );
}

export default App;
