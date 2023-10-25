import styled, { css } from 'styled-components';

interface Props {
  enabled: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  padding: 0.7rem;
  background: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 0;
  gap: 0.25rem;
  border-radius: 6px;
  margin: 0.5rem;
  ${({ theme, enabled }) => css`
    border: 1px solid ${enabled ? theme['green-300'] : theme['red-500']};
    color: ${enabled ? theme['green-300'] : theme['red-500']};
  `}

  :focus {
    outline: 0;
    box-shadow: none;
  }

  &:hover {
    background: ${({ theme }) => theme['gray-900']};
    transition: background-color 0.2s;
  }

  @media (max-width: 579px) {
    align-self: flex-end;
  }
`;

export const Title = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
