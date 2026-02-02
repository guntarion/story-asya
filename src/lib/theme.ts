'use client'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    accent: {
      blue: '#3b82f6',
      cyan: '#06b6d4',
      pink: '#ec4899',
      orange: '#f97316',
      green: '#10b981',
      yellow: '#fbbf24',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'var(--font-nunito), "Segoe UI", system-ui, sans-serif',
    body: 'var(--font-nunito), "Segoe UI", system-ui, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark'
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 50%, #f3e8ff 100%)',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        minHeight: '100vh',
      },
      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      '@keyframes pulse-glow': {
        '0%, 100%': { boxShadow: '0 0 20px rgba(217, 70, 239, 0.3)' },
        '50%': { boxShadow: '0 0 40px rgba(217, 70, 239, 0.6)' },
      },
      '@keyframes shimmer': {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' },
      },
      '@keyframes gradient-shift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
          color: 'white',
          _hover: {
            bg: 'linear-gradient(135deg, #e879f9 0%, #c026d3 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 40px rgba(217, 70, 239, 0.4)',
          },
        },
        ghost: {
          _hover: {
            bg: 'brand.50',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    Badge: {
      variants: {
        subtle: {
          bg: 'linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(162, 28, 175, 0.15) 100%)',
          color: 'brand.700',
          fontWeight: 'semibold',
        },
      },
    },
  },
})

export default theme
