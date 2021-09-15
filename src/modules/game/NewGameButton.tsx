import React from 'react';

import { Button } from '../../ui';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { NewGame, NEW_GAME } from '../../core/gql';
import { setView, setGameData, ViewType } from '../../core/mainReducer';

export const NewGameButton = React.memo(() => {
  const dispatch = useDispatch();

  const [startNewGame, result] = useLazyQuery<NewGame>(NEW_GAME, {
    onCompleted: data => {
      console.info('New game!!!');
      dispatch(setGameData(data.newGame));
      dispatch(setView(ViewType.Game));
    }
  });

  const onClick = React.useCallback(async () => {
    if (result.data?.newGame) {
      const newData = await result.refetch();
      dispatch(setGameData(newData.data.newGame));
      return;
    }
    startNewGame();
  }, [startNewGame, result.data?.newGame]);

  return (
    <Button
      variant="primary"
      onClick={onClick}
      children="New game"
      className="mt-4 mb-3"
    />
  );
})