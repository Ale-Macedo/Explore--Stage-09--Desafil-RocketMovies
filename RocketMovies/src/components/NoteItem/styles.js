import styled from "styled-components";

export const Container = styled.div`
  
  padding: 16px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? `transparent` : theme.COLORS.BACKGROUND_700 };
  color: ${({ theme }) => theme.COLORS.GRAY_300 };
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${ theme.COLORS.GRAY_200 }` : `none`};

  > button {
    border: none;
    background: none;
  }

  .button-add,
  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  
  >input {
    height: 24px;
    width: auto;

    
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      
    }
  }
`