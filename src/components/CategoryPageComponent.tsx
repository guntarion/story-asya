'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import StoryCard from '@/components/StoryCard'
import { Category, Story } from '@/types/story'

interface CategoryPageComponentProps {
  category: Category
  stories: Story[]
  unlockedStories: Story[]
}

export default function CategoryPageComponent({ 
  category, 
  stories, 
  unlockedStories 
}: CategoryPageComponentProps) {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box bg={bg}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Link href="/">
            <Button leftIcon={<ArrowBackIcon />} variant="ghost" colorScheme="brand" alignSelf="flex-start">
              Back to Categories
            </Button>
          </Link>

          <VStack spacing={4} textAlign="center">
            <Image
              src={category.headerImage}
              alt={category.name}
              maxW="640px"
              w="100%"
              h={{ base: 32, md: 48 }}
              objectFit="cover"
              borderRadius="xl"
              shadow="lg"
            />
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600, brand.800)"
              bgClip="text"
            >
              {category.name}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              {category.description}
            </Text>
            <HStack spacing={4} fontSize="sm" color="gray.500">
              <Text>{unlockedStories.length} of {stories.length} stories available</Text>
            </HStack>
          </VStack>

          {stories.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </SimpleGrid>
          ) : (
            <VStack spacing={4} textAlign="center" py={12}>
              <Heading size="md" color="gray.500">No Stories Yet</Heading>
              <Text color="gray.400">Stories for this category are coming soon!</Text>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  )
}