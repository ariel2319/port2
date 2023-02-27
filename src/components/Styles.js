import styled from 'styled-components';

export const Heading =
  styled.h1`text-align: center;
color: green;`;

export const Content =
  styled.div`overflowY: scroll;
height: 90%;`
  ;

export const Button =
  styled.div`position: fixed; 
left: 95%;
${'' /* border: 1px solid green; */}
bottom: 20%;
height: 25px;
font-size: 2.5rem;
z-index: 1;
cursor: pointer;
color: #764ba2;`;