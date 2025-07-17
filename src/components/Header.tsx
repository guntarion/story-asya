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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={10}
      shadow="sm"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Flex alignItems="center" gap={3}>
              <Image
                src="/assets/images/header.jpg"
                alt="Story Asya"
                h={10}
                w={16}
                objectFit="cover"
                borderRadius="md"
              />
              <Heading size="lg" bgGradient="linear(to-r, brand.500, brand.700)" bgClip="text">
                Story Asya
              </Heading>
            </Flex>
          </Link>

          <IconButton
            size="md"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="brand"
          />
        </Flex>
      </Container>
    </Box>
  )
}