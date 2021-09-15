import React from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { Box, Button, Input } from '../../ui';
import { setModal } from '../../core/mainReducer';
import { CREATE_USER_MUTATION } from '../../core/gql';

export const FormSignUp = React.memo(() => {
  const dispatch = useDispatch();
  const email = React.useRef<HTMLInputElement>(null);
  const lastName = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const firstName = React.useRef<HTMLInputElement>(null);

  const [createUser, response] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: data => {
      dispatch(setModal(undefined));
    },
    onError: err => console.error(err)
  });

  const submit: React.FormEventHandler = React.useCallback((e) => {
    e.preventDefault();
    createUser({
      variables: {
        data: {
          email: email.current?.value,
          password: password.current?.value,
          name: `${firstName.current?.value} ${lastName.current?.value}`
        }
      }
    });
  }, []);

  return (
    <Box className="w-100">
      <strong className="mb-4 d-block">Sign up for a free account</strong>
      <form onSubmit={submit} className="d-flex flex-column">
        <div className="d-flex mb-3">
          <Input
            required
            ref={firstName}
            className="flex-1"
            placeholder="First name"
          />
          <div className="mx-2" />
          <Input
            required
            ref={lastName}
            className="flex-1"
            placeholder="Last name"
          />
        </div>
        <Input
          required
          ref={email}
          type="email"
          className="mb-3"
          placeholder="E-mail adress"
        />
        <Input
          required
          ref={password}
          type="password"
          className="mb-3"
          placeholder="Create password"
        />
        <div>
          <Button
            type="submit"
            variant="primary"
            children="Register"
          />
        </div>
      </form>
    </Box>
  )
})