import styled from 'styled-components';

export const GridRow = styled.div`
  margin-bottom: 15px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`