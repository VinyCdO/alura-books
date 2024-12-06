import Logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;  
  font-size: 30px;
`

const LogoImage = styled.img`
  margin-right: 10px;
`

function logo() {
  return (
    <LogoContainer>
      <LogoImage src={Logo} alt='logo' className='logo-img' />
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  )
}

export default logo;