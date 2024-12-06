import Header from './componentes/header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #fff 15%, #002F52 );
`

function App() {
  return (
    <AppContainer>
      <Header />      
    </AppContainer>
  );
}

export default App;
