import styled from 'styled-components';

export const Job = styled.div`
  padding: 14px;
  border-radius: 8px;
  border: 3px solid rgb(229, 231, 235);
  background: rgb(39, 39, 42);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(228, 228, 231, 0.1) 0px 10px 15px -3px, rgba(228, 228, 231, 0.1) 0px 4px 6px -4px;
  margin-bottom: 10px;
  
  .row{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 4px;
  }

  @media screen and (min-width: 768px) {
    .row{
      grid-template-columns: 250px 1fr;
    }
  }
`;