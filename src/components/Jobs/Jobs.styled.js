import styled from 'styled-components';

export const Job = styled.div`
  padding: 14px;
  border-radius: 8px;
  background: rgba(30,41,59,.5);
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(148, 163, 184, 0.1) 0px 1px 0px 0px inset;
  
  .row{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 4px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    .row{
      grid-template-columns: 250px 1fr;
    }
  }
`;