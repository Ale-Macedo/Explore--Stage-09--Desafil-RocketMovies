import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  > main{
    max-height: 75vh;
    overflow-y: auto;
    margin: 40px 123px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  > header{
    a{
      margin-bottom: 24px;
          
      font-size: 16px;
      line-height: 21px;
      font-weight: 400;
          
      text-align: center;
          
      color: ${({ theme })=> theme.COLORS.PINK};
    }
    
    .title svg{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .data {
      gap: 8px;
    }
    div{
      display: flex;
      align-items: center;

      > h1{
        margin-right: 19px;
        margin-bottom: 24px;
      }
      >svg{
        color: ${({ theme })=> theme.COLORS.PINK};
      }
      > svg.active {
      fill: ${({ theme}) => theme.COLORS.PINK};
    }
      > img {
        border-radius: 100%;
        width: 16px;
        height: 16px;
      }
    }
    
    }

  }
  
  `