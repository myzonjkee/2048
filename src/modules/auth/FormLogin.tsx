import React from 'react';

import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { Box, Button, Input } from '../../ui';
import { LOG_IN_MUTATION } from '../../core/gql';
import { setAuthData, setModal } from '../../core/mainReducer';

export const FormLogIn = React.memo(() => {
  const dispatch = useDispatch();
  const email = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);

  const [logIn] = useMutation(LOG_IN_MUTATION, {
    onCompleted: data => {
      const token = data.authenticateUserWithPassword.token;
      const userName = data.authenticateUserWithPassword.item.name;
      dispatch(setModal(undefined));
      dispatch(setAuthData({ token, userName }));
      localStorage.setItem('token', token);
    },
    onError: err => console.error(err)
  });

  const submit: React.FormEventHandler = React.useCallback(e => {
    e.preventDefault();
    logIn({
      variables: {
        email: email.current?.value,
        password: password.current?.value
      }
    });
  }, []);

  return (
    <Box className="w-100">
      <strong className="mb-4 d-block">Log in</strong>
      <form onSubmit={submit} className="d-flex flex-column">
        <div className="d-flex mb-3">
          <Input
            ref={email}
            type="email"
            className="flex-1"
            placeholder="E-mail"
          />
          <div className="mx-2" />
          <Input
            ref={password}
            type="password"
            className="flex-1"
            placeholder="Password"
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="primary"
            children="Login"
          />
        </div>
      </form>
    </Box>
  )
})