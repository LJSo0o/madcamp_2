import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
export default function Pro() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}