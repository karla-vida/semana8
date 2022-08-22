import { Footer, Header, Secao } from "@components";
import produtos from "@services/produtos.json";
import { array } from "prop-types";
import styles from "./App.module.css";

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(subSecoesEntradas, subSecoesPrincipais);

  let arrayGlobal = [
    {
      nome: "Entradas",
      produtos: produtos.entradas,
      subSecao: new Set(produtos.entradas.map((p) => p.subSecao)),
    },
    {
      nome: "Principais",
      produtos: produtos.principais,
      subSecao: new Set(produtos.principais.map((p) => p.subSecao)),
    },
    {
      nome: "Sobremesas",
      produtos: produtos.sobremesas,
      subSecao: new Set(produtos.sobremesas.map((p) => p.subSecao)),
    },
  ];

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        {arrayGlobal.map((secao,index) => (
          <Secao
            nome={secao.nome} key={index}
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
