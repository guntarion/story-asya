'use client'

import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
  useColorModeValue,
  Container,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Badge,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { ArrowBackIcon, SettingsIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Story } from '@/types/story'

// Sparkle icon
const SparkleIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
    />
  </Icon>
)

// Category friendly names
const categoryNames: Record<string, string> = {
  cookierun: 'Cookie Run Kingdom',
  dandysworld: "Dandy's World",
  fnaf: 'Five Nights at Freddys',
  starrystories: "Starry's Original Stories",
  metalcardbot: 'Metal Cardbot',
}

interface StoryReaderProps {
  story: Story
  content: string
}

export default function StoryReader({ story, content }: StoryReaderProps) {
  const [fontSize, setFontSize] = useState(17)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const cardBg = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(253,244,255,0.98) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(22,33,62,0.98) 100%)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.800')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const blockquoteBg = useColorModeValue('brand.50', 'whiteAlpha.100')

  const MarkdownComponents = {
    p: ({ children }: any) => (
      <Text
        fontSize={`${fontSize}px`}
        lineHeight="1.9"
        color={textColor}
        mb={5}
      >
        {children}
      </Text>
    ),
    h1: ({ children }: any) => (
      <Heading
        as="h1"
        fontSize={`${Math.round(fontSize * 2)}px`}
        fontWeight="extrabold"
        bgGradient="linear(to-r, brand.500, accent.pink, brand.600)"
        bgClip="text"
        mb={6}
        mt={10}
      >
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading
        as="h2"
        fontSize={`${Math.round(fontSize * 1.5)}px`}
        fontWeight="bold"
        color={useColorModeValue('brand.700', 'brand.300')}
        mb={5}
        mt={8}
        pb={2}
        borderBottom="2px solid"
        borderColor={useColorModeValue('brand.200', 'brand.700')}
      >
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading
        as="h3"
        fontSize={`${Math.round(fontSize * 1.25)}px`}
        fontWeight="semibold"
        color={useColorModeValue('brand.600', 'brand.400')}
        mb={4}
        mt={6}
      >
        {children}
      </Heading>
    ),
    strong: ({ children }: any) => (
      <Text
        as="strong"
        fontWeight="bold"
        color={useColorModeValue('brand.700', 'brand.300')}
      >
        {children}
      </Text>
    ),
    em: ({ children }: any) => (
      <Text as="em" fontStyle="italic" color={textColor}>
        {children}
      </Text>
    ),
    blockquote: ({ children }: any) => (
      <Box
        borderLeft="4px solid"
        borderColor="brand.400"
        pl={6}
        py={4}
        my={6}
        bg={blockquoteBg}
        borderRadius="0 xl xl 0"
        position="relative"
        _before={{
          content: '"""',
          position: 'absolute',
          top: 2,
          left: 3,
          fontSize: '2xl',
          color: 'brand.300',
          fontFamily: 'serif',
        }}
      >
        {children}
      </Box>
    ),
    ul: ({ children }: any) => (
      <Box as="ul" pl={6} mb={5} listStyleType="none">
        {children}
      </Box>
    ),
    ol: ({ children }: any) => (
      <Box as="ol" pl={6} mb={5} listStyleType="decimal">
        {children}
      </Box>
    ),
    li: ({ children }: any) => (
      <Flex
        as="li"
        fontSize={`${fontSize}px`}
        lineHeight="1.9"
        color={textColor}
        mb={2}
        align="flex-start"
        gap={3}
      >
        <Box
          w={2}
          h={2}
          borderRadius="full"
          bg="brand.400"
          mt={`${fontSize * 0.5}px`}
          flexShrink={0}
        />
        <Box flex={1}>{children}</Box>
      </Flex>
    ),
    hr: () => (
      <Box
        my={8}
        h="2px"
        bgGradient="linear(to-r, transparent, brand.300, transparent)"
      />
    ),
  }

  return (
    <Box minH="100vh">
      <Container maxW="container.md" py={{ base: 6, md: 10 }}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <HStack justify="space-between" align="center">
            <Link href={`/category/${story.category}`}>
              <Button
                leftIcon={<ArrowBackIcon />}
                variant="ghost"
                colorScheme="brand"
                size="lg"
                fontWeight="semibold"
                _hover={{
                  bg: 'brand.50',
                  transform: 'translateX(-4px)',
                }}
                transition="all 0.3s ease"
              >
                Back
              </Button>
            </Link>

            <IconButton
              icon={<SettingsIcon />}
              aria-label="Reading Settings"
              variant="ghost"
              colorScheme="brand"
              size="lg"
              borderRadius="full"
              onClick={onOpen}
              _hover={{
                bg: 'brand.50',
                transform: 'rotate(90deg)',
              }}
              transition="all 0.4s ease"
            />
          </HStack>

          {/* Story Meta */}
          <Box
            bg={cardBg}
            backdropFilter="blur(20px)"
            border="2px solid"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            {/* Decorative elements */}
            <SparkleIcon
              position="absolute"
              top={4}
              left={4}
              w={4}
              h={4}
              color="brand.300"
              opacity={0.5}
            />
            <SparkleIcon
              position="absolute"
              bottom={4}
              right={4}
              w={3}
              h={3}
              color="accent.pink"
              opacity={0.4}
            />

            <VStack spacing={4}>
              <Badge
                px={4}
                py={1.5}
                borderRadius="full"
                bg="linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(162, 28, 175, 0.15) 100%)"
                color="brand.600"
                fontWeight="semibold"
                fontSize="sm"
              >
                {categoryNames[story.category] || story.category}
              </Badge>
              <Heading
                size="xl"
                bgGradient="linear(to-r, brand.500, accent.pink, brand.600)"
                bgClip="text"
                fontWeight="extrabold"
              >
                {story.title}
              </Heading>
              {story.description && (
                <Text
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontStyle="italic"
                  maxW="lg"
                  lineHeight="1.7"
                >
                  {story.description}
                </Text>
              )}
            </VStack>

            {/* Top accent */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="4px"
              bg="linear-gradient(90deg, brand.400, accent.pink, brand.600)"
            />
          </Box>

          {/* Story Content */}
          <Box
            bg={cardBg}
            backdropFilter="blur(20px)"
            border="2px solid"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            shadow="0 10px 40px rgba(217, 70, 239, 0.1)"
          >
            {story.isLocked ? (
              <VStack spacing={6} textAlign="center" py={16}>
                <Box
                  w={20}
                  h={20}
                  borderRadius="full"
                  bg="brand.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    viewBox="0 0 24 24"
                    w={10}
                    h={10}
                    color="brand.500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                    />
                  </Icon>
                </Box>
                <Heading size="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                  Story Locked
                </Heading>
                <Text color={useColorModeValue('gray.500', 'gray.400')} maxW="md">
                  This magical story will be available on{' '}
                  <Text as="span" fontWeight="bold" color="brand.500">
                    {new Date(story.unlockDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Text>
                </Text>
              </VStack>
            ) : (
              <ReactMarkdown components={MarkdownComponents}>
                {content}
              </ReactMarkdown>
            )}
          </Box>
        </VStack>

        {/* Settings Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
          <DrawerContent
            bg={useColorModeValue('white', 'gray.900')}
            borderLeftRadius="2xl"
          >
            <DrawerCloseButton size="lg" />
            <DrawerHeader
              borderBottom="2px solid"
              borderColor={borderColor}
              pb={4}
            >
              <Heading size="md" bgGradient="linear(to-r, brand.500, accent.pink)" bgClip="text">
                Reading Settings
              </Heading>
            </DrawerHeader>
            <DrawerBody py={8}>
              <VStack spacing={8} align="stretch">
                <Box>
                  <Text mb={4} fontWeight="bold" color={useColorModeValue('gray.700', 'gray.200')}>
                    Font Size
                  </Text>
                  <VStack spacing={6}>
                    <Slider
                      aria-label="font-size-slider"
                      value={fontSize}
                      onChange={setFontSize}
                      min={14}
                      max={24}
                      step={1}
                    >
                      <SliderTrack bg={useColorModeValue('brand.100', 'brand.900')} h={2} borderRadius="full">
                        <SliderFilledTrack bg="linear-gradient(90deg, #d946ef, #ec4899)" />
                      </SliderTrack>
                      <SliderThumb
                        boxSize={6}
                        border="3px solid"
                        borderColor="brand.500"
                        _focus={{ boxShadow: '0 0 0 3px rgba(217, 70, 239, 0.3)' }}
                      />
                    </Slider>
                    <Badge
                      px={4}
                      py={2}
                      borderRadius="full"
                      colorScheme="brand"
                      fontSize="md"
                    >
                      {fontSize}px
                    </Badge>
                  </VStack>
                </Box>

                <Box
                  p={6}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                >
                  <Text
                    fontSize={`${fontSize}px`}
                    lineHeight="1.9"
                    color={textColor}
                  >
                    Once upon a time, in a magical land far away...
                  </Text>
                </Box>

                <VStack spacing={3}>
                  <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.200')}>
                    Quick Presets
                  </Text>
                  <HStack spacing={3} w="full">
                    {[14, 17, 20, 24].map((size) => (
                      <Button
                        key={size}
                        size="md"
                        flex={1}
                        onClick={() => setFontSize(size)}
                        variant={fontSize === size ? 'solid' : 'outline'}
                        colorScheme="brand"
                        borderRadius="xl"
                      >
                        {size === 14 ? 'S' : size === 17 ? 'M' : size === 20 ? 'L' : 'XL'}
                      </Button>
                    ))}
                  </HStack>
                </VStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  )
}
