import React from 'react';
import styled from 'styled-components';
import Cook from '../images/Cook.png';
import Point from '../images/arrow-pointer.png';
import App from '../images/hinadan.png'

const Wrapper = styled.div`
  width: 100%;
  height: 280vh;
  margin-top: 23rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Title = styled.p`
  font-family: 'InkLipquid';
  font-size: 2.75rem;
  margin: 0;
`;

const FstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem;
`;

const CookImg = styled.img`
  width: 30rem;
  margin-left: 10rem;
  border-radius: 1.25rem;
  box-shadow: 0 0 2rem #848484;
`;

const ContentWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 3.75rem;
`;

const Content = styled.p`
  font-family: 'Chosunilbo_myungjo';
  font-size: 2rem;
`;

const Pointer = styled.img`
  width: 4rem;
  height: 4rem;  

  animation: fadeInBottomRight 2.8s both;
  animation-iteration-count: infinite;

  @keyframes fadeInBottomRight {
    from{
      opacity: 0;
      transform: translateY(30px);
    }
    to{
      opacity: 3;
      transform: translateX(-10px);
    }
  }
`;

const ScdWrapper = styled.div`
  margin-top: 23rem;
  margin-left: 8rem;
`;

const ScdContentWrapper = styled.div``;

const AppImg = styled.img`
  width: 40rem;
  border-radius: 2rem;
  box-shadow: 0 0 2rem #848484;
  margin-top: 5rem;
`;

const ThWrappter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ThContent = styled.p`
  font-family: 'Chosunilbo_myungjo';
  font-size: 2.5rem;
  font-weight: bolder;
`;

function CareerPage() {
  return (
    <Wrapper>
      <TitleWrapper>
          <Title>"</Title>
          <Title>Programming does not kill anyone.</Title>
          <Title>I thought if I couldn't do it, I could just quit.</Title>
          <Title>"</Title>
      </TitleWrapper>
      <FstWrapper>
        <ContentWrapper>
          <Content>Apple CEO Tim Cook interviewed someone at the 2017 annual World Developers Conference.</Content>
        </ContentWrapper>
        <CookImg src={Cook} />
        <Pointer src={Point} />
      </FstWrapper>
      <ScdWrapper>
        <ScdContentWrapper>
          <Content>It was Masako, then 82 years old.</Content>
          <Content>She first used a computer when she was 60 and began studying programming.</Content>
          <Content>She taught herself programming for six months and released the 'Hinadan' app.</Content>
        </ScdContentWrapper>
        <AppImg src={App} />
      </ScdWrapper>
      <ThWrappter>
        <ThContent>Hinathan is easy to use. </ThContent>
        <ThContent>Thanks to this, it currently has more than 80,000 users, </ThContent>
        <ThContent>with the majority giving it a five-star rating.</ThContent>
      </ThWrappter>
    </Wrapper>
  )
}

export default CareerPage;