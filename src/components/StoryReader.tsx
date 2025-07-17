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
  Divider,
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
} from '@chakra-ui/react'
import { ArrowBackIcon, SettingsIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Story } from '@/types/story'

interface StoryReaderProps {
  story: Story
  content: string
}

export default function StoryReader({ story, content }: StoryReaderProps) {
  const [fontSize, setFontSize] = useState(16)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  const blockquoteBg = useColorModeValue('gray.50', 'gray.700')
  
  const MarkdownComponents = {
    p: ({ children }: any) => (
      <Text
        fontSize={`${fontSize}px`}
        lineHeight="1.8"
        color={textColor}
        mb={4}
      >
        {children}
      </Text>
    ),
    h1: ({ children }: any) => (
      <Heading
        as="h1"
        size="xl"
        fontSize={`${Math.round(fontSize * 2)}px`}
        color={textColor}
        mb={6}
        mt={8}
      >
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading
        as="h2"
        size="lg"
        fontSize={`${Math.round(fontSize * 1.5)}px`}
        color={textColor}
        mb={4}
        mt={6}
      >
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading
        as="h3"
        size="md"
        fontSize={`${Math.round(fontSize * 1.25)}px`}
        color={textColor}
        mb={3}
        mt={4}
      >
        {children}
      </Heading>
    ),
    strong: ({ children }: any) => (
      <Text as="strong" fontWeight="bold" color={textColor}>
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
        borderLeft="4px"
        borderColor="brand.500"
        pl={4}
        py={2}
        my={4}
        bg={blockquoteBg}
        borderRadius="md"
      >
        {children}
      </Box>
    ),
    ul: ({ children }: any) => (
      <Box as="ul" pl={6} mb={4} listStyleType="disc">
        {children}
      </Box>
    ),
    ol: ({ children }: any) => (
      <Box as="ol" pl={6} mb={4} listStyleType="decimal">
        {children}
      </Box>
    ),
    li: ({ children }: any) => (
      <Text
        as="li"
        fontSize={`${fontSize}px`}
        lineHeight="1.8"
        color={textColor}
        mb={1}
      >
        {children}
      </Text>
    ),
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between" align="center">
          <Link href={`/category/${story.category}`}>
            <Button leftIcon={<ArrowBackIcon />} variant="ghost" colorScheme="brand">
              Back to {story.category}
            </Button>
          </Link>
          
          <IconButton
            icon={<SettingsIcon />}
            aria-label="Reading Settings"
            variant="ghost"
            colorScheme="brand"
            onClick={onOpen}
          />
        </HStack>

        <VStack spacing={4} align="stretch">
          <VStack spacing={2} align="center">
            <Badge colorScheme="brand" variant="subtle" textTransform="capitalize">
              {story.category.replace('cookierun', 'Cookie Run').replace('dandysworld', "Dandy's World").replace('fnaf', 'FNAF')}
            </Badge>
            <Heading
              size="xl"
              textAlign="center"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              {story.title}
            </Heading>
            {story.description && (
              <Text color="gray.600" textAlign="center" fontStyle="italic">
                {story.description}
              </Text>
            )}
          </VStack>
          
          <Divider />
          
          <Box
            bg={bg}
            p={8}
            borderRadius="lg"
            shadow="sm"
            border="1px"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
          >
            {story.isLocked ? (
              <VStack spacing={4} textAlign="center" py={12}>
                <Heading size="md" color="gray.500">Story Locked</Heading>
                <Text color="gray.400">
                  This story will be available on {new Date(story.unlockDate).toLocaleDateString()}
                </Text>
              </VStack>
            ) : (
              <ReactMarkdown components={MarkdownComponents}>
                {content}
              </ReactMarkdown>
            )}
          </Box>
        </VStack>
      </VStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Reading Settings</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch">
              <Box>
                <Text mb={4} fontWeight="semibold">Font Size</Text>
                <VStack spacing={4}>
                  <Slider
                    aria-label="font-size-slider"
                    value={fontSize}
                    onChange={setFontSize}
                    min={12}
                    max={24}
                    step={1}
                  >
                    <SliderTrack>
                      <SliderFilledTrack bg="brand.500" />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <Text fontSize="sm" color="gray.600">
                    Current size: {fontSize}px
                  </Text>
                  <Text fontSize={`${fontSize}px`}>
                    Sample text at current size
                  </Text>
                </VStack>
              </Box>
              
              <Box>
                <Text mb={4} fontWeight="semibold">Quick Settings</Text>
                <VStack spacing={2}>
                  <Button size="sm" onClick={() => setFontSize(14)} variant="outline" w="full">
                    Small (14px)
                  </Button>
                  <Button size="sm" onClick={() => setFontSize(16)} variant="outline" w="full">
                    Medium (16px)
                  </Button>
                  <Button size="sm" onClick={() => setFontSize(20)} variant="outline" w="full">
                    Large (20px)
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}