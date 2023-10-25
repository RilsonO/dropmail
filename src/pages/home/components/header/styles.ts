import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 0.875rem;
  line-height: 1.6;
`;

export const HeaderTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 579px) {
    width: 95%;
  }
`;

export const Title = styled.span`
  margin-left: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme['gray-200']};
  border-radius: 7px;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  min-width: 50%;

  @media (max-width: 579px) {
    width: 95%;
    align-items: center;
    flex-direction: column;
    padding: 5px;
  }

  span {
    flex: 1;
    color: ${({ theme }) => theme['gray-200']};
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    background-color: transparent;
    border: 0;
  }

  button {
    display: flex;
    padding: 0.5rem;
    color: ${({ theme }) => theme['gray-200']};
    background: transparent;
    border: 0;
    border-left: 1px solid ${({ theme }) => theme['gray-200']};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 0;
    gap: 0.25rem;

    :focus {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    &:hover {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      background: ${({ theme }) => theme['gray-900']};
      transition: background-color 0.2s;
    }

    @media (max-width: 579px) {
      border: 1px solid ${({ theme }) => theme['gray-200']};
      border-radius: 6px;
      padding: 4px;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    padding: 0.5rem;
    color: ${({ theme }) => theme['gray-200']};
    background: transparent;
    border: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 0;
    gap: 0.25rem;

    :focus {
      border-radius: 6px;
    }

    &:hover {
      border-radius: 6px;
      background: ${({ theme }) => theme['gray-900']};
      transition: background-color 0.2s;
    }
  }
`;

export const AutoRefreshContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
