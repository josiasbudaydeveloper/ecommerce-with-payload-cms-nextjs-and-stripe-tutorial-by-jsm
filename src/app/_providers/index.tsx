'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'
import { FilterProvier } from './Filter'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FilterProvier>
          <CartProvider>{children}</CartProvider>
        </FilterProvier>
      </AuthProvider>
    </ThemeProvider>
  )
}
