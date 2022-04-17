import React, { useState } from 'react';
import { createStage, checkCollision } from '../gameHelpers';
//css
import { StyledTetris, StyledTetrisWrapper } from './styles/styledTetris';
import { StyledAside } from './styles/styledAside';

//custom hook
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useinterval';
import { useGameStatus } from '../hooks/useGameStatus';

//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  //console.log('re-render');
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    //console.log("test")
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    if(rows > (level + 1) * 10){
      setLevel(prev => prev + 1);
      //increase speed
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({keyCode}) => {
    if(!gameOver){
      if(keyCode === 40){
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  }

  const dropPlayer = () => {
    console.log("Interval off");
    setDropTime(null);
    drop();
  };

  const move = (e) => {
    if(!gameOver) {
      if(e.keyCode === 37){
        movePlayer(-1);
      } else if(e.keyCode === 39){
        movePlayer(1);
      } else if(e.keyCode === 40){
        dropPlayer();
      } else if (e.keyCode === 38){
        playerRotate(stage, 1);
      } else {
        e.preventDefault();
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
  <StyledTetrisWrapper 
  role="button" 
  tabIndex="0" 
  onKeyDown={e => move(e)} 
  onKeyUp={keyUp}>
    <h1> React Tetris Game</h1>
    <StyledTetris>
      <Stage stage={stage}/>
      <StyledAside>
        {gameOver ? (
          <Display 
          gameOver={gameOver} 
          text="Game Over" />)
          : (
        <div>
          <Display text={`Score: ${score}`} />
          <Display text={`Rows: ${rows}`} />
          <Display text={`Level: ${level}`} />
        </div>
        )}
        <StartButton 
        callback={startGame} />
      </StyledAside>
    </StyledTetris>
  </StyledTetrisWrapper>
)};
export default Tetris;