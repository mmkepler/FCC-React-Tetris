import React from 'react';

//css
import { StyledDisplay } from './styles/styledDisplay';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>
    { text }
  </StyledDisplay>
);
export default Display;