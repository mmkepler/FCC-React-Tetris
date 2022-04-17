import React from 'react';

//css
import { StyledStartButton } from './styles/styledStartButton';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback} >
    Start Game
  </StyledStartButton>
);
export default StartButton;