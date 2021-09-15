import styled from 'styled-components';

export const Input = styled.input`
  height: 2rem;
  background: none;
  padding: 0 0.5rem;
  color: ${props => props.theme.palette.text};
  border-radius: ${props => props.theme.radius};
  border: 1px solid ${props => props.theme.palette.primary};
`;
