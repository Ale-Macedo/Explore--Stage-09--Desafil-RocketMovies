import styled from "styled-components";



export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.PINK_DARK};
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    margin-bottom: 8px;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme}) => theme.COLORS.WHITE};
  }
  > h2 {
    text-align: left;
    font-size: 12px;
    color: ${({ theme}) => theme.COLORS.PINK};

  > svg.active {
      fill: ${({ theme}) => theme.COLORS.PINK};
    }
    
  }  
  

  > p {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme}) => theme.COLORS.GRAY_200};
  }


  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
  
`