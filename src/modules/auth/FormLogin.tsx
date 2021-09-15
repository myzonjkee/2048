import React from 'react';
import { Box, Button, Input } from '../../ui';

export const FormLogin = React.memo(() => {
  return (
    <Box className="w-100">
      <strong className="mb-4 d-block">Log in</strong>
      <form className="d-flex flex-column">
        <div className="d-flex mb-3">
          <Input className="flex-1" placeholder="First name" />
          <div className="mx-2" />
          <Input className="flex-1" placeholder="Last name" />
        </div>
        <div>
          <Button type="submit" variant="primary" children="Login" />
        </div>
      </form>
    </Box>
  )
})