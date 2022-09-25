import styled from 'styled-components';



export const Container = styled.div`
  
  width: 100%;
  height: 116px;

  padding: 24px 123px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;


  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  border: 1px solid red;


  > h1 {

    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({theme}) => theme.COLORS.PINK};

  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme})=> theme.COLORS.GRAY_250};
  } 

  > div {
   
    display: flex;
    flex-direction: column;
    line-height: 18px;
    
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    
    }
    
    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

`