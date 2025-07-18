'use client'

import { Box, Flex } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}