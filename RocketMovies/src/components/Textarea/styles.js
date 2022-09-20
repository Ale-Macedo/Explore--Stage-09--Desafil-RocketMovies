import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  resize: none;

  padding: 19px 16px;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder{
      color: ${({ theme}) => theme.COLORS.GRAY_200};
    }
`