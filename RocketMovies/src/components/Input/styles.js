import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  height: 56px;

  margin-bottom: 8px;
  padding-left: 16px ;
  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > input{
    width: 100%;

    border: none;
    justify-content: center;
    
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`