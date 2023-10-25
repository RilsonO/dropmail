import { ReactNode } from 'react';
import { Header } from '../../components/header/view';
import { LayoutContainer } from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Header />

      {children}
    </LayoutContainer>
  );
}
