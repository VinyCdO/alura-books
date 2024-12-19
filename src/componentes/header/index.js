import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function header () {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo/>
      </Link>
      <OpcoesHeader/>        
      <IconesHeader/>        
    </HeaderContainer>
  )
}

export default header;