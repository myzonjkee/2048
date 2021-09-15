import React from 'react';
import { useQuery } from '@apollo/client';
import { ListGroup, ListItem, If} from '../../../ui';
import { HighScores, HIGH_SCORES } from '../../../core/gql';

const style: React.CSSProperties = { height: 311, textAlign: 'center' };

export const TopRankList = React.memo(() => {
  const { loading, error, data } = useQuery<HighScores>(HIGH_SCORES);

  return (
    <ListGroup
      style={style}
      className="w-100"
    >
      <If
        is={!loading && !error}
        else={error ? 'Error!' : 'Loading...'}
      >
        {data?.allScores.map((hs, i) => (
          <ListItem
            key={hs.id}
            index={i + 1}
            score={hs.score}
            name={hs.player.name}
          />
        ))}
      </If>
    </ListGroup>
  )
})