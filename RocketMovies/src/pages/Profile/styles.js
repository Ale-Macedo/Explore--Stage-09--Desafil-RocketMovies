import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  > header {
    width: 100%;
    height: 144px;
  
    padding:  0 144px;
  
    display: flex;
    align-items: center;
  
    background: ${({ theme }) => theme.COLORS.PINK_DARK};
    a{
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    svg{
      font-size: 16px;
      
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  
  margin: 30px auto 0;
  
  > div:nth-child(3),
  div:nth-child(5){
    margin-bottom: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  
  width: 186px;
  height: 186px;
  
  margin: -124px auto 32px;
  
  > img{
    width: 186px;
    height: 186px;
  
    border-radius: 50%;
  }
  > label{
    position: absolute;
    bottom: 7px;
    right: 7px;

    width: 48px;
    height: 48px;
    
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    input{
      display: none;
    }
    svg{
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.GRAY_300 };
    }
  }
`