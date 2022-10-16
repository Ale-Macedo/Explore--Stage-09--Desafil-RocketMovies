import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  overflow: hidden;

  > main{  
    overflow-y: scroll;
    margin: 40px 123px;
    height: 75vh;
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
      > h1{
        
        font-size: 36px;
        line-height: 47px;
        font-weight: 500;

      }
    }
  }
  `
export const Form = styled.form`

    
    display: flex;
    flex-direction: column;
    gap: 40px;

    .row{
      display: flex;
      gap: 40px;
      
      
    }
    
    .section{
      > h2{
      margin-bottom: 24px;

      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: ${({ theme })=> theme.COLORS.GRAY_200};
      }  
    .tags{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 24px;
      padding: 16px;
      background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
      border-radius: 8px;

    }  
    }
    
    > div Button:first-child{
      background: ${({ theme })=> theme.COLORS.BACKGROUND_900};
    color: ${({ theme })=> theme.COLORS.PINK};
  }
  `