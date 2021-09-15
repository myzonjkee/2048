import React from 'react';

import { Button } from '../../ui';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { NewGame, NEW_GAME } from '../../core/gql';
import { setView, setGameData, ViewType } from '../../core/mainReducer';

export const NewGameButton = React.memo(() => {
  const dispatch = useDispatch();

  const [startNewGame] = useLazyQuery<NewGame>(NEW_GAME, {
    onCompleted: data => {
      dispatch(setGameData(data.newGame));
      dispatch(setView(ViewType.Game));
    }
  });

  const onClick = React.useCallback(e => {
    startNewGame();
  }, [startNewGame]);

  return (
    <Button
      variant="primary"
      onClick={onClick}
      children="New game"
      className="mt-4 mb-3"
    />
  )
})