import React from 'react';
import { H1, H2 } from '../../ui';
import { GridContainer } from './GridContainer';
import { GameContainer } from './GameContainer';
import { TileContainer } from './TileContainer';
import { NewGameButton } from './NewGameButton';
import { useAppSelector } from '../../core/hooks';

export const Game = React.memo(() => {
  const score = useAppSelector(state => state.main.score);

  return (
    <>
      <H1>2048</H1>
      <H2 className="mb-4">Score: {score}</H2>
      <GameContainer>
        <GridContainer />
        <TileContainer />
      </GameContainer>
      <NewGameButton />
    </>
  )
});