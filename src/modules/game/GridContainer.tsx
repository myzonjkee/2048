import styled from 'styled-components';
import { GridRow } from './GridRow';
import { GridCell } from './GridCell';

const Container = styled.div`
  position: absolute;
  z-index: 1;
`
export const GridContainer = () => (
  <Container>
    <GridRow>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </GridRow>
    <GridRow>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </GridRow>
    <GridRow>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </GridRow>
    <GridRow>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </GridRow>
  </Container>
)