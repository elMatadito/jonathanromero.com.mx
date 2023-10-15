import styled from 'styled-components';

export const HeaderTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px 0px;

  .menu{
    svg{
      width: 30px;
      height: 30px;
    }
  }

  .social{
    text-align: center;

    a{
      svg{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        filter: grayscale(1);

        &:hover{
          filter: grayscale(0);
        }
      }
    }
  }
`;

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-bottom: 35px;
  background: #1e2738;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(148, 163, 184, 0.1) 0px 1px 0px 0px inset;
  padding: 14px;
  border-radius: 8px;

  .info{
    grid-row: 2;

    h1{
      color: #67E6B0;
    }
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