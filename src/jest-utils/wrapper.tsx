import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { SessionContextProvider } from '../contexts/session-context';
import { DefaultLayout } from '../layouts/default-layout/view';

export const ViewProviderWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>
    <SessionContextProvider>
      <DefaultLayout>{children}</DefaultLayout>
    </SessionContextProvider>
  </ThemeProvider>
);
