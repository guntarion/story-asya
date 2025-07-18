'use client'

import {
  Box,
  Container,
  Text,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react'

// Heart icon component
const HeartIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </Icon>
)

export default function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      bg={bg}
      borderTop="1px"
      borderColor={borderColor}
      mt="auto"
      py={6}
    >
      <Container maxW="container.xl">
        <Flex justify="center" align="center">
          <Text
            fontSize="sm"
            color={textColor}
            textAlign="center"
            display="flex"
            alignItems="center"
            gap={1}
          >
            Made with{' '}
            <HeartIcon
              w={4}
              h={4}
              color="red.500"
              aria-label="love"
            />{' '}
            for Asya by Papa Guntar © 2025
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}