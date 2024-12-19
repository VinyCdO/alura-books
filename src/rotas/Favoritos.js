import Pesquisa from '../componentes/pesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #fff 15%, #002F52 85%);
`

function Favoritos() {
  return (
    <AppContainer>        
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
