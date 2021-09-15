import React from 'react';
import { H1, H2 } from '../../ui';
import { GridContainer } from './GridContainer';
import { GameContainer } from './GameContainer';
import { TitleContainer } from './TitleContainer';

export const Game = React.memo(() => {
  return (
    <>
      <H1>2048</H1>
      <H2 className="mb-5">Leaderboard</H2>
      <GameContainer>
        <GridContainer />
        <TitleContainer />
      </GameContainer>
    </>
  )
});