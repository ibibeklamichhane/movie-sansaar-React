import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>

    <ChakraProvider theme={theme}>
        <Router>
          <App />
        </Router>
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)