import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['white-100']};
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['gray-300']};
  }

  body, input, textarea, button {
    font-family: Roboto sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
