import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  border: 1px solid ${({ theme }) => theme['gray-100']};
  border-radius: 4px;
  padding-top: 2rem;

  @media (max-width: 579px) {
    border: 0px;
  }
`;

export const HomeContent = styled.div`
  min-height: 35rem;
  max-height: 60rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme['gray-100']};
  background: ${({ theme }) => theme['gray-800']};

  @media (max-width: 579px) {
    display: none;
  }
`;

export const InboxTitle = styled.div`
  width: 100%;
  padding: 0.85rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-100']};
`;

export const BaseHightLight = styled.div`
  background: ${({ theme }) => theme['gray-600']};
  border-bottom: 1px solid ${({ theme }) => theme['gray-100']};
  border-left: 1px solid ${({ theme }) => theme['gray-100']};
  padding: 0.85rem;

  strong {
    margin-left: 1.5rem;
    font-size: 1.25rem;
  }
`;

export const EmailContent = styled.div`
  min-height: 35rem;
  max-height: 50rem;
  overflow-y: auto;
  padding: 0.85rem 1.5rem;
  background: ${({ theme }) => theme['gray-800']};
  margin-top: 0.5rem;
  border-radius: 4px;
`;

const ldsDualRingAnimation = keyframes`
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
`;

export const Loading = styled.div`
  align-self: center;
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${ldsDualRingAnimation} 1.2s linear infinite;
  }
`;

export const HomeContentMobile = styled.div`
  margin-top: 10px;
`;

export const InboxTitleMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-bottom: 0.5px solid #ffff;
  align-items: center;
  padding: 4px;

  span {
    font-weight: bold;
  }
`;

export const EmailContentContainerMobile = styled.div``;

export const BaseHightLightMobile = styled.div`
  background: ${({ theme }) => theme['gray-600']};
  padding: 0.85rem 0.5rem;

  strong {
    margin-left: 1.5rem;
    font-size: 1.25rem;
  }
`;

export const MailFrom = styled.span`
  font-size: 12px;
`;

export const EmailContentHeaderMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const EmailContentMobile = styled.div`
  min-height: 10rem;
  max-height: 30rem;
  overflow-y: auto;
  padding: 0.85rem 1.5rem;
  background: ${({ theme }) => theme['gray-800']};
  margin-top: 0.5rem;
  border-radius: 4px;
`;

export const BackButton = styled.button`
  background-color: transparent;
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
  font-size: 14px;
  text-decoration: underline;

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
`;
