'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import Header from '@/components/Header'
import CategoryCard from '@/components/CategoryCard'
import { Category } from '@/types/story'

interface CategoryWithCounts {
  category: Category
  storyCount: number
  unlockedCount: number
}

interface HomePageProps {
  categoriesWithCounts: CategoryWithCounts[]
}

export default function HomePage({ categoriesWithCounts }: HomePageProps) {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box minH="100vh" bg={bg}>
      <Header />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600, brand.800)"
              bgClip="text"
            >
              Welcome to Story Asya
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Discover magical stories from your favorite worlds! Choose a category below to start reading.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {categoriesWithCounts.map(({ category, storyCount, unlockedCount }) => (
              <CategoryCard
                key={category.id}
                category={category}
                storyCount={storyCount}
                unlockedCount={unlockedCount}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}