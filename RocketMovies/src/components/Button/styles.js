import styled from 'styled-components';

export const Container = styled.button`

  width: 100%;
  height: 56px;
  
  border-radius: 10px;
  border: none;

  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  
  color: ${({theme}) => theme.COLORS.GRAY_300};
  background-color: ${({theme}) => theme.COLORS.PINK};

  &:disabled{
    opacity: 0.5;
  }
` 