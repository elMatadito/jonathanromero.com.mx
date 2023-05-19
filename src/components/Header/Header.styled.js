import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-bottom: 35px;

  .info{
    grid-row: 2;
  }

  img{
    border-radius: 50%;
    grid-row: 1;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 150px;
    grid-gap: 10px;

    .info{
      grid-row: 1;
    }

    img{
      grid-row: 1;
    }

  }

`;