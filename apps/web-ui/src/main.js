import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const theme = {
  colorScheme: 'dark',
  colors: {
    // override dark colors to change them for all components
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#2b2c3d',
      '#1d1e30',
      '#0c0d21',
      '#01010a',
    ],
  },
};

const nodeEnv = process.env.NODE_ENV || 'none';

// Create a client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </BrowserRouter>
    {nodeEnv !== 'production' ? (
      <ReactQueryDevtools initialIsOpen={false} />
    ) : (
      <></>
    )}
  </QueryClientProvider>
  // </StrictMode>
);
