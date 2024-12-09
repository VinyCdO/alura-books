import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa.js";

const PesquisaContainer = styled.section`
  color: #002F52;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Titulo = styled.h2`
  color: #002F52;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);  

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde comerçar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
          const textoPesquisado = evento.target.value
          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoPesquisado))
          setLivrosPesquisados(resultadoPesquisa)        
        }                  
        }
      />
      { livrosPesquisados.map( livro => (
        <Resultado>
          <img src={livro.src} alt={livro.nome}/>
          <p>{livro.nome}</p>          
        </Resultado>
      ))}      
    </PesquisaContainer>
  )
}

export default Pesquisa;
