import styled from 'styled-components';


export const Container = styled.div`

  width: 100%;
  height: 100vh;

  overflow: hidden;

  >main {

    padding: 40px 123px;
    >header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 40px;

      > a {
        padding: 16px 32px;
        text-align: center;
        
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
      }
    }

  }
`
export const Content = styled.div`

    width: 100%;
    max-height: 550px;
    min-height: auto;
    padding: 0 8px;
    overflow-y: auto;



`