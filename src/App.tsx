import './css/stolen.css';

import React from 'react';
import styled from 'styled-components';

import { Modal } from './ui';
import { Game } from './modules/game';
import { LeaderBoard } from './modules';
import { useAppSelector } from './core/hooks';
import { FormLogIn, FormSignUp } from './modules/auth';
import { ModalType, ViewType } from './core/mainReducer';

const MainContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const App = () => {
  const viewType = useAppSelector(state => state.main.view);
  const modalType = useAppSelector(state => state.main.modal);

  const modalContent = React.useMemo(() => {
    switch (modalType) {
      case ModalType.SignUp:
        return <FormSignUp />
      case ModalType.LogIn:
        return <FormLogIn />
      default:
        return null;
    }
  }, [modalType]);

  const view = React.useMemo(() => {
    switch (viewType) {
      case ViewType.LeaderBoard:
        return <LeaderBoard />
      case ViewType.Game:
        return <Game />;
      default:
        return null;
    }
  }, [modalType]);

  return (
    <>
      <MainContainer>
        {view}
      </MainContainer>

      <Modal open={!!modalType}>
        {modalContent}
      </Modal>
    </>
  )
}
