import React from 'react';
import { useAppSelector } from '../../core/hooks';
import { Button } from '../../ui';

export const NewGameButton = React.memo(() => {
  const userName = useAppSelector(state => state.main.userName);

  return (
    <>
      <Button
        variant="primary"
        children="New game"
        className="mt-4 mb-3"
      />
      Helo {userName}, nice to see you again
    </>
  )
})