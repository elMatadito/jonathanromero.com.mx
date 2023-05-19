import styled from 'styled-components';

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
  max-width: 80%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 60%;
  }

`;