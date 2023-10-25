import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Home } from './pages/home/view';
import { client } from './libs/apollo';
import { SessionContextProvider } from './contexts/session-context';
import { DefaultLayout } from './layouts/default-layout/view';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ApolloProvider client={client}>
        <SessionContextProvider>
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </SessionContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}
