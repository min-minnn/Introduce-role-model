import React from 'react';
import styled from 'styled-components';
import masako from '../images/masako.jpg';
import Header from './Header';
import LinkButton from './LinkButton';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);
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
  margin-left: 4rem;
`;

const Name = styled.p`
  font-family: 'yg-jalnan';
  font-size: 3rem;
  margin: 1rem 0;
`;

const Age = styled.p`
  font-family: 'yg-jalnan';
  font-size: 1.75rem;
  margin: 0;
`;

const Moto = styled.p`
  font-family: 'kr-French';
  font-size: 2.25rem;
  margin: 0;

  animation: fadeIn 0.6s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to{
      opacity: 3;
      transform: none;
    }
  }
`;

const ContentWrapper = styled.div`
  margin-top: 1rem;
  
  animation: fadeIn 1.25s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to{
      opacity: 3;
      transform: none;
    }
  }
`;

const Content = styled.p`
  margin-left: 0.375rem;
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

function Main() {
  return(
    <>
      <Header />
      <Wrapper>
        <Photo src={masako} />
        <IntroduceWrapper>
          <Age>1936.</Age>
          <Name>Wakamiya Masako</Name>
          <Moto>"Age is just a number."</Moto>
          <ContentWrapper>
            <Content>I'm an app developer in my 80s. Call Me, "Ma-JJang".</Content>
            <Content>I learned programming by myself when I was 60 years old.</Content>
            <Content>I developed a game app called 'Hinadan' for the elderly.</Content>
          </ContentWrapper>
          <ButtonWrapper>
            <LinkButton />
          </ButtonWrapper>
        </IntroduceWrapper>
      </Wrapper>
    </>
  )
}

export default Main;