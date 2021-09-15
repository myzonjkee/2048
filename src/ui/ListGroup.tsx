import styled from 'styled-components';

export const ListGroup = styled.div`
  & > div + div {
    margin-top: -1px;
  }
`;
