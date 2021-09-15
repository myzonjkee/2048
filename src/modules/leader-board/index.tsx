import { H1, H2, If } from '../../ui';
import { ButtonsAuth } from '../auth';
import { TopRankList } from './TopRankList';
import { NewGameButton } from './NewGameButton';
import { useIsAuthorized } from '../../core/hooks';

export const LeaderBoard = () => {
  const isAuthorized = useIsAuthorized();

  return (
    <>
      <H1>2048</H1>
      <H2 className="mb-5">Leaderboard</H2>

      <TopRankList />

      <If is={isAuthorized}>
        <NewGameButton />
      </If>

      <If is={!isAuthorized}>
        <ButtonsAuth />
      </If>
    </>
  );
}