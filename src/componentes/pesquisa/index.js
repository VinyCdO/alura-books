import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getLivros } from "../../servicos/livros.js";
import capaLivro from "../../imagens/livro.png";

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
   const [livros, setLivros] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
  
   useEffect(() => {
    const fetchData = async () => {
     try {
      const response = await getLivros();
          if (response && Array.isArray(response)) {
              setLivros(response);
          } else {
            console.error("Resposta da API em formato incorreto:", response);
            setError(new Error("Dados da API em formato inválido."));
          }
     } catch (err) {
      setError(err);
     } finally {
      setLoading(false);
     }
    };
  
    fetchData();
   }, []);
  
   if (loading) {
    return <div>Carregando...</div>;
   }
  
   if (error) {
    return <div>Erro: {error.message}</div>;
   }
  
   return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde comerçar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
        const textoPesquisado = evento.target.value;
        if (livros) { // Verifica se livros foi populado
          const resultadoPesquisa = livros.filter(item => item.nome.toLowerCase().includes(textoPesquisado.toLowerCase()));
          setLivrosPesquisados(resultadoPesquisa);
        }
        }
      }/>
      {livrosPesquisados.map(livro => (
        <Resultado key={livro._id}> {/* Adicione a key aqui */}
          <img src={capaLivro} alt={livro.nome} /> {/* Adicione src na tag img */}
          <p>{livro.nome}</p>
        </Resultado>
        ))
      }
    </PesquisaContainer>
   );
  }
  
  export default Pesquisa;