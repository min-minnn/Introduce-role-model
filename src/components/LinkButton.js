import React from 'react';
import styled from 'styled-components';

const Video = styled.button`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  font-family: 'yg-jalnan';
  font-size: 1.25rem;
  font-weight: bolder;
  background-color: #FA5858;
  box-shadow: 0 0 2rem -15px black;
  cursor: pointer;

  animation: circleSh 1s both;
  animation-delay: 0;

  @keyframes circleSh {
    from {
      opacity: 0;
      transform: translateY(100px) scale(0.5);
    }
    to{
      opacity: 3;
      transform: translateY(0) scale(1);
    }
  }
`;

const Book = styled.button`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  font-family: 'yg-jalnan';
  font-size: 1.25rem;
  font-weight: bolder;
  background-color: #F3F781;
  box-shadow: 0 0 2rem -15px black;
  cursor: pointer;

  animation: circleSh 1.25s both;
  animation-delay: 0.1s;

  @keyframes circleSh {
    from {
      opacity: 0;
      transform: translateY(100px) scale(0.5);
    }
    to{
      opacity: 3;
      transform: translateY(0) scale(1);
    }
  }
`;

const Achievement = styled.button`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  font-family: 'yg-jalnan';
  font-size: 1rem;
  font-weight: bolder;
  background-color: #A9A9F5;
  box-shadow: 0 0 2rem -15px black;
  cursor: pointer;

  animation: circleSh 1.5s both;
  animation-delay: 0.2s;

  @keyframes circleSh {
    from {
      opacity: 0;
      transform: translateY(100px) scale(0.5);
    }
    to{
      opacity: 3;
      transform: translateY(0) scale(1);
    }
  }
`;

function LinkButton() {
  return (
    <>
      <Video>Video</Video>
      <Book>Book</Book>
      <Achievement>Achievement</Achievement>
    </>
  )
}

export default LinkButton;