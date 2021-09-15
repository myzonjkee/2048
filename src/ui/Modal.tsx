import React from 'react';
import styled from 'styled-components';

export type ModaleProps = {
  open?: boolean;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, .9);
`;

export const Modal = React.memo<ModaleProps>(({ open, children }) => {
  if (!open) {
    return null;
  }

  return (
    <Wrapper>
      <div>
        {children}
      </div>
    </Wrapper>
  )
})