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

const Career = styled.button`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  font-family: 'yg-jalnan';
  font-size: 1.25rem;
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

const OpenVideo = () => {
  window.open('https://youtu.be/Bu3Csb3uRmw', '_blank');
}

const BookStore = () => {
  window.open('http://book.naver.com/bookdb/book_detail.nhn?bid=14619373', '_blank');
}

const Scroll = () => {
  window.scrollTo({
    top: 1200,
    behavior: "smooth"
  });
}

function LinkButton() {
  return (
    <>
      <Video onClick={OpenVideo}>Video</Video>
      <Book onClick={BookStore}>Book</Book>
      <Career onClick={Scroll}>Life Story</Career>
    </>
  )
}

export default LinkButton;