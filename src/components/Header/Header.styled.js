import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 35px;
  margin-top: 75px;
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
    margin-top: -75px;
    border-radius: 50%;
    border: 10px solid #1e2738;
  }
`;