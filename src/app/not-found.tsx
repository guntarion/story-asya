'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box minH="100vh" bg={bg}>
      <Header />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={6} textAlign="center">
          <Heading size="2xl" color="brand.600">
            404 - Page Not Found
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="md">
            Oops! The story or page you&apos;re looking for doesn&apos;t exist or might have been moved.
          </Text>
          <Link href="/">
            <Button leftIcon={<ArrowBackIcon />} colorScheme="brand" size="lg">
              Back to Home
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}