import styled from 'styled-components';

export const GameContainer = styled.div`
  width: 500px;
  height: 500px;
  padding: 15px;
  border-radius: ${props => props.theme.radius};
  background: ${props => props.theme.palette.gameContainer};
`