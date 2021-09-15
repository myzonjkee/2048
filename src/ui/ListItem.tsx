import React from 'react';
import styled from 'styled-components';

export type ListItemProps = {
  name: string;
  index: number;
  score: number;
}

const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  & > div:first-child {
    width: 3rem;
    text-align: center;
  }

  & > div:nth-child(2) {
    text-align: left;
  }

  & > div:last-child {
    width: 4rem;
    text-align: right;
  }
`;

export const ListItem = React.memo<ListItemProps>(props => {
  const { index, name, score } = props;

  return (
    <Container>
      <div>{index}</div>
      <div className="flex-1">{name}</div>
      <div>{score}</div>
    </Container>
  )
})