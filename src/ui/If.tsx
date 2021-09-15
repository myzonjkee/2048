import React from 'react';

export type IfProps = {
  is: unknown;
  else?: React.ReactNode;
  children: React.ReactNode;
}

export const If = React.memo<IfProps>(props => {
  if (props.is) return <>{props.children}</>
  if (props.else) return <>{props.else}</>;
  return null;
})