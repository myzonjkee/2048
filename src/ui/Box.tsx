import styled from 'styled-components';

export const Box = styled.div`
  padding: 3rem;
  border-radius: ${props => props.theme.radius};
  border: 1px solid ${props => props.theme.palette.primary};
`;
