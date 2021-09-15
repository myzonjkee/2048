import React from 'react';
import { Box, Button, Input } from '../../ui';

export const FormSignUp = React.memo(() => {
  return (
    <Box className="w-100">
      <strong className="mb-4 d-block">Sign up for a free account</strong>
      <form className="d-flex flex-column">
        <div className="d-flex mb-3">
          <Input className="flex-1" placeholder="First name" />
          <div className="mx-2" />
          <Input className="flex-1" placeholder="Last name" />
        </div>
        <Input className="mb-3" placeholder="E-mail adress" />
        <Input className="mb-3" placeholder="Create password" />
        <div>
          <Button variant="primary" children="Register" />
        </div>
      </form>
    </Box>
  )
})