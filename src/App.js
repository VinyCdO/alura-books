import Header from './componentes/header';
import Pesquisa from './componentes/pesquisa';
import UltimosLancamentos from './componentes/ultimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #fff 15%, #002F52 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />      
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
