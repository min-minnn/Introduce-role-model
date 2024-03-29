import React from 'react';
import Main from './components/Main';
import styled from 'styled-components';
import CareerPage from './components/Career.page';

const Template = styled.div`
  width: 100%;
  background-color: #F2F2F2;
`;

function App() {
  return (
    <Template>
      <Main />
      <CareerPage />
    </Template>
  );
}

export default App;
