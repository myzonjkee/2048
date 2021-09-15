import React from 'react';
import styled from 'styled-components';

import { LeaderBoard } from './modules';

const MainContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const App = () => (
  <MainContainer>
    <LeaderBoard />
  </MainContainer>
)
