import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media (max-width: 579px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
