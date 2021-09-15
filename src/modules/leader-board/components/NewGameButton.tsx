import React from 'react';
import { Button } from '../../../ui';

export const NewGameButton = React.memo(() => {
  return (
    <>
      <Button
        variant="primary"
        children="New game"
        className="mt-4 mb-3"
      />
      Helo *name*, nice to see you again
    </>
  )
})