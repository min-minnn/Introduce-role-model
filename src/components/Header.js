import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #FFFFFF;
  box-shadow: 0 0 2rem -20px black;

  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-left: 3rem;
`;

const Logo = styled.p`
  font-family: 'yg-jalnan';
  font-size: 2rem;
  margin: 0;
`;

function Header() {
  return(
    <HeaderWrapper>
      <LogoWrapper>
        <Logo>MIN</Logo>
      </LogoWrapper>
    </HeaderWrapper>
  )
}

export default Header;