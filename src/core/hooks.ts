import { useQuery } from '@apollo/client';
import type { RootState, AppDispatch } from './store';
import { AuthenticatedUser, AUTHENTICATED_USER } from './gql';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useIsAuthorized = () => {
  const { data } = useQuery<AuthenticatedUser>(AUTHENTICATED_USER);
  return !!data?.authenticatedUser;
}