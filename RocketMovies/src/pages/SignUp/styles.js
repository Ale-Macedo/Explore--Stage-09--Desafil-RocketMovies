import styled from 'styled-components';

import backgroundImg from '../../assets/SingIn.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`
export const Form = styled.form`

  padding: 0 146px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-align: center;

  > h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > h2{
    margin: 48px 0;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > Button{
    margin: 24px 0 42px;
  }
  > a{
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`
export const Background = styled.div`
  flex: 1;
  background: hsla(255, 11%, 15%, 0.8) URL(${backgroundImg}) no-repeat center center;
  background-size: cover;
  background-blend-mode: darken;
`