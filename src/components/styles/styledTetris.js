import styled from 'styled-components';

import mainBG from '../../img/main.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${mainBG}) #000;
  background-size: cover;
  overflow: hidden;
    h1 {
      color: white;
      text-align: center;
      font-size: 2em;
      margin: 10px 0 10px 0;
    }
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: start-right;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;