import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 2;
`
export const TitleContainer = () => (
  <Container>
    <div className="tile tile-2 tile-position-2-1 tile-new" />
  </Container>
)