'use client'

import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  Container,
  Image,
  Text,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgGradient = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(253,244,255,0.95) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(22,33,62,0.95) 100%)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.800')

  return (
    <Box
      bg={bgGradient}
      backdropFilter="blur(20px)"
      borderBottom="2px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={100}
      shadow="0 4px 30px rgba(217, 70, 239, 0.15)"
    >
      <Container maxW="container.xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Flex
              alignItems="center"
              gap={4}
              transition="all 0.3s ease"
              _hover={{
                transform: 'scale(1.02)',
              }}
            >
              <Box
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                shadow="0 4px 20px rgba(217, 70, 239, 0.3)"
                border="3px solid"
                borderColor="brand.400"
              >
                <Image
                  src="/assets/images/header.jpg"
                  alt="Story Asya"
                  h={12}
                  w={16}
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, transparent 100%)"
                />
              </Box>
              <Flex direction="column" gap={0}>
                <Heading
                  size="lg"
                  bgGradient="linear(to-r, brand.500, brand.600, accent.pink)"
                  bgClip="text"
                  fontWeight="extrabold"
                  letterSpacing="-0.5px"
                >
                  Story Asya
                </Heading>
                <Text
                  fontSize="xs"
                  color={useColorModeValue('brand.600', 'brand.300')}
                  fontWeight="medium"
                  letterSpacing="2px"
                  textTransform="uppercase"
                >
                  Magical Stories
                </Text>
              </Flex>
            </Flex>
          </Link>

          <IconButton
            size="lg"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            variant="ghost"
            borderRadius="full"
            bg={useColorModeValue('brand.50', 'whiteAlpha.100')}
            color={useColorModeValue('brand.600', 'brand.300')}
            _hover={{
              bg: useColorModeValue('brand.100', 'whiteAlpha.200'),
              transform: 'rotate(180deg) scale(1.1)',
            }}
            transition="all 0.4s ease"
          />
        </Flex>
      </Container>
    </Box>
  )
}
