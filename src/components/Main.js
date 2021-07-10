import React from 'react';
import styled from 'styled-components';
import masako from '../images/masako.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 25rem;
  border-radius: 50rem;
  filter: grayscale(900%);
  box-shadow: 0 0 2rem #848484;
`;

const IntroduceWrapper = styled.div`
  height: 25rem;
  margin-left: 3rem;
`;

const Name = styled.p`
  font-family: 'yg-jalnan';
  font-size: 3rem;
  margin: 1rem 0;
`;

const Moto = styled.p`
  font-family: 'kr-French';
  font-size: 2.25rem;
  margin: 0;
`;

function Main() {
  return(
    <Wrapper>
      <Photo src={masako} />
      <IntroduceWrapper>
        <Name>Wakamiya Masako(82)</Name>
        <Moto>"Age is just a number."</Moto>
      </IntroduceWrapper>
    </Wrapper>
  )
}

export default Main;