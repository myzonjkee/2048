import { H1, H2, If } from '../../ui';
import { ButtonsAuth } from '../auth';
import { TopRankList } from './TopRankList';
import { NewGameButton } from '../game/NewGameButton';
import { useAppSelector, useIsAuthorized } from '../../core/hooks';

export const LeaderBoard = () => {
  const isAuthorized = useIsAuthorized();
  const userName = useAppSelector(state => state.main.userName);

  return (
    <>
      <H1>2048</H1>
      <H2 className="mb-5">Leaderboard</H2>

      <TopRankList />

      <If is={isAuthorized}>
        <NewGameButton />
        Helo {userName}, nice to see you again
      </If>

      <If is={!isAuthorized}>
        <ButtonsAuth />
      </If>
    </>
  );
}