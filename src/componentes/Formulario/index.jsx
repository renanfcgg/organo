import "./Formulario.css";

import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from "react";

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (e) => {
      e.preventDefault();
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('');
      setCargo('');
      setImagem('');
      setTime('');
    }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          label="Nome" 
          placeholder="Digite seu nome" 
          required={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          label="Cargo" 
          placeholder="Digite seu Cargo" 
          required={true}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço da imgagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          label="Time" 
          itens={props.times} 
          required={true} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
