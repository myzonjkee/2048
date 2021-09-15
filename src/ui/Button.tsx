import styled from 'styled-components';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  display: flex;
  padding: 0 2rem;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  align-items: center;
  border: 1px solid ${props => props.theme.palette.primary};
  color: ${props => props.variant === 'primary' ? 'white' : props.theme.palette.text};
  background: ${props => props.variant === 'primary' ? props.theme.palette.primary : 'white'};
`;