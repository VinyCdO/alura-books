import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../titulo';
import imagemLivro from '../../imagens/livro2.png';
import styled from 'styled-components';
import CardRecomenda from '../cardRecomenda';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#002F52" tamanho="36px">
          Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map( livro => (
          <img src={livro.src} alt={livro.nome}/>
        ))}      
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construíndo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos;