import React from 'react';
import { Button } from '../../ui';
import { useDispatch } from 'react-redux';
import { ModalType, setModal } from '../../core/mainReducer';

export const ButtonsAuth = React.memo(() => {
  const dispatch = useDispatch();

  const openSignUpModal = React.useCallback(() => {
    dispatch(setModal(ModalType.SignUp))
  }, []);

  const openLogInModal = React.useCallback(() => {
    dispatch(setModal(ModalType.LogIn))
  }, []);

  return (
    <>
      <div className="d-flex mt-4 mb-3">
        <Button
          className="mx-2"
          children="Log in"
          variant="secondary"
          onClick={openLogInModal}
        />
        <Button
          className="mx-2"
          variant="primary"
          children="Sign up"
          onClick={openSignUpModal}
        />
      </div>
      Login or register to start new game
    </>
  )
})