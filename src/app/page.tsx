"use client"
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './Blog';

export default function Home() {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </React.StrictMode>
  )
}
