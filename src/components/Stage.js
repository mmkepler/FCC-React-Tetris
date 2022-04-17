import React from 'react';

//css
import { StyledStage } from './styles/styledStage';

//components
import Cell from "./Cell";

const Stage = ({stage}) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);
export default Stage;