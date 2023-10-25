import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  padding: 10px;
`;

export const EmailListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-100']};
`;

export const EmailListItemSubject = styled.span`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.6;
`;

export const EmailListItemTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme['blue-500']};
`;

export const EmailListItemPreview = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme['gray-100']};
`;
