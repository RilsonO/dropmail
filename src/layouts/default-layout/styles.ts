import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 74rem;
  height: calc(100vh -10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 579px) {
    max-width: 100%;
    margin: 0px;
    border-radius: 0px;
  }
`;
