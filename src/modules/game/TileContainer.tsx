import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { PROCESS_GAME } from '../../core/gql';
import { useAppSelector } from '../../core/hooks';
import { GameData, setGameData } from '../../core/mainReducer';

const Container = styled.div`
  position: absolute;
  z-index: 2;
`
type Tail = {
  value: number;
  rowIndex: number;
  colIndex: number;
}

enum Direction {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

export const TileContainer = () => {
  const dispatch = useDispatch();

  const state = useAppSelector(state => state.main.state);
  const score = useAppSelector(state => state.main.score);
  const finished = useAppSelector(state => state.main.finished);

  const [processGame] = useMutation(PROCESS_GAME, {
    onCompleted: (data: { processGame: GameData }) => {
      dispatch(setGameData(data.processGame));
    },
    onError: err => console.error(err)
  });

  const onKeyUp = React.useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        processGame({ variables: { game: { state, score, direction: Direction.Up } } });
        break;
      case 'ArrowDown':
        processGame({ variables: { game: { state, score, direction: Direction.Down } } });
        break;
      case 'ArrowRight':
        processGame({ variables: { game: { state, score, direction: Direction.Right } } });
        break;
      case 'ArrowLeft':
        processGame({ variables: { game: { state, score, direction: Direction.Left } } });
        break;
      default:
        break
    }
  }, [state, score, finished]);

  React.useEffect(() => {
    document.removeEventListener('keyup', onKeyUp);
    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
  }, [onKeyUp]);

  const tiles = state?.reduce<Tail[]>((prev, row, rowIndex) => {
    const values: Tail[] = [];
    row.forEach((value, colIndex) => {
      if (!value) return;
      values.push({ value, rowIndex: rowIndex + 1, colIndex: colIndex + 1 });
    })
    return [...prev, ...values];
  }, []);

  return (
    <Container>
      {tiles?.map(({ value, rowIndex, colIndex }, i) => (
        <div
          key={`${rowIndex}${colIndex}`}
          className={`tile tile-${value} tile-position-${colIndex}-${rowIndex}`}
        >
          <div className="tile-inner" children={value} />
        </div>
      ))}
    </Container>
  )
}