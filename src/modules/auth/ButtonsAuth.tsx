import React from 'react';
import { Button } from '../../ui';

export const ButtonsAuth = React.memo(() => {
  return (
    <>
      <div className="d-flex mt-4 mb-3">
        <Button
          className="mx-2"
          children="Log in"
          variant="secondary"
        />
        <Button
          className="mx-2"
          variant="primary"
          children="Sign up"
        />
      </div>
      Login or register to start new game
    </>
  )
})