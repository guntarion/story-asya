'use client'

import {
  Box,
  Container,
  Text,
  useColorModeValue,
  Flex,
  Icon,
  HStack,
} from '@chakra-ui/react'
import Link from 'next/link'

// Heart icon component
const HeartIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </Icon>
)

// Sparkle icon
const SparkleIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
    />
  </Icon>
)

export default function Footer() {
  const bgGradient = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(253,244,255,0.9) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(22,33,62,0.95) 100%)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      bg={bgGradient}
      backdropFilter="blur(20px)"
      borderTop="2px"
      borderColor={borderColor}
      mt="auto"
      py={8}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative elements */}
      <SparkleIcon
        position="absolute"
        top="20%"
        left="5%"
        w={3}
        h={3}
        color="brand.300"
        opacity={0.4}
      />
      <SparkleIcon
        position="absolute"
        bottom="30%"
        right="8%"
        w={2}
        h={2}
        color="accent.pink"
        opacity={0.3}
      />

      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          gap={4}
        >
          <HStack spacing={2}>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              Made with
            </Text>
            <HeartIcon
              w={5}
              h={5}
              color="red.400"
              aria-label="love"
              transition="all 0.3s ease"
              _hover={{
                transform: 'scale(1.2)',
                color: 'red.500',
              }}
            />
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              for
            </Text>
            <Text
              fontSize="sm"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.500, accent.pink)"
              bgClip="text"
            >
              Asya
            </Text>
          </HStack>

          <Box
            display={{ base: 'none', md: 'block' }}
            w="4px"
            h="4px"
            borderRadius="full"
            bg="brand.400"
          />

          <HStack spacing={2}>
            <Text fontSize="sm" color={textColor} fontWeight="medium">
              by
            </Text>
            <Link href="/formating-input" style={{ textDecoration: 'none' }}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="brand.600"
                transition="all 0.3s ease"
                _hover={{
                  color: 'brand.500',
                  textDecoration: 'underline',
                }}
              >
                Papa Guntar
              </Text>
            </Link>
            <Text fontSize="sm" color={textColor}>
              © 2025
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
