'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react'
import CategoryCard from '@/components/CategoryCard'
import { Category } from '@/types/story'

// Sparkle icon component
const SparkleIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
    />
  </Icon>
)

// Book icon component
const BookIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h7v9l2.5-1.5L16 15V6h4v12z"
    />
  </Icon>
)

interface CategoryWithCounts {
  category: Category
  storyCount: number
  unlockedCount: number
}

interface HomePageProps {
  categoriesWithCounts: CategoryWithCounts[]
}

export default function HomePage({ categoriesWithCounts }: HomePageProps) {
  const cardBg = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(253,244,255,0.9) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.8) 0%, rgba(22,33,62,0.9) 100%)'
  )
  const glowColor = useColorModeValue(
    '0 0 60px rgba(217, 70, 239, 0.2)',
    '0 0 60px rgba(217, 70, 239, 0.3)'
  )

  const totalStories = categoriesWithCounts.reduce((acc, c) => acc + c.storyCount, 0)
  const totalUnlocked = categoriesWithCounts.reduce((acc, c) => acc + c.unlockedCount, 0)

  return (
    <Box minH="100vh">
      <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
        <VStack spacing={{ base: 10, md: 14 }} align="stretch">
          {/* Hero Section */}
          <Box
            position="relative"
            textAlign="center"
            py={{ base: 10, md: 16 }}
            px={{ base: 6, md: 12 }}
            bg={cardBg}
            borderRadius="3xl"
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor={useColorModeValue('brand.200', 'brand.800')}
            shadow={glowColor}
            overflow="hidden"
          >
            {/* Decorative elements */}
            <Box
              position="absolute"
              top="-50px"
              right="-50px"
              w="200px"
              h="200px"
              bg="linear-gradient(135deg, rgba(217, 70, 239, 0.2) 0%, transparent 70%)"
              borderRadius="full"
              filter="blur(40px)"
            />
            <Box
              position="absolute"
              bottom="-30px"
              left="-30px"
              w="150px"
              h="150px"
              bg="linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, transparent 70%)"
              borderRadius="full"
              filter="blur(40px)"
            />

            {/* Floating sparkles */}
            <SparkleIcon
              position="absolute"
              top="20%"
              left="10%"
              w={4}
              h={4}
              color="brand.400"
              opacity={0.6}
              animation="float 3s ease-in-out infinite"
            />
            <SparkleIcon
              position="absolute"
              top="30%"
              right="15%"
              w={3}
              h={3}
              color="accent.pink"
              opacity={0.5}
              animation="float 4s ease-in-out infinite 0.5s"
            />
            <SparkleIcon
              position="absolute"
              bottom="25%"
              left="20%"
              w={5}
              h={5}
              color="brand.300"
              opacity={0.4}
              animation="float 3.5s ease-in-out infinite 1s"
            />

            <VStack spacing={6} position="relative" zIndex={1}>
              <Flex align="center" gap={3}>
                <BookIcon w={10} h={10} color="brand.500" />
              </Flex>

              <VStack spacing={3}>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="bold"
                  color="brand.500"
                  letterSpacing="4px"
                  textTransform="uppercase"
                >
                  Welcome to
                </Text>
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                  fontWeight="extrabold"
                  bgGradient="linear(to-r, brand.500, accent.pink, brand.600)"
                  bgClip="text"
                  lineHeight="1.2"
                >
                  Asya&apos;s Stories
                </Heading>
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="medium"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  Collection
                </Heading>
              </VStack>

              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={useColorModeValue('gray.600', 'gray.400')}
                maxW="xl"
                lineHeight="1.8"
              >
                Discover magical stories from your favorite worlds!
                Choose a category below to start your reading adventure.
              </Text>

              {/* Stats */}
              <Flex
                gap={{ base: 6, md: 10 }}
                mt={4}
                flexWrap="wrap"
                justify="center"
              >
                <VStack spacing={1}>
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, brand.500, brand.600)"
                    bgClip="text"
                  >
                    {categoriesWithCounts.length}
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} fontWeight="medium">
                    Worlds
                  </Text>
                </VStack>
                <Box
                  w="1px"
                  h="50px"
                  bg={useColorModeValue('gray.200', 'gray.700')}
                  display={{ base: 'none', md: 'block' }}
                />
                <VStack spacing={1}>
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, accent.pink, brand.500)"
                    bgClip="text"
                  >
                    {totalStories}
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} fontWeight="medium">
                    Stories
                  </Text>
                </VStack>
                <Box
                  w="1px"
                  h="50px"
                  bg={useColorModeValue('gray.200', 'gray.700')}
                  display={{ base: 'none', md: 'block' }}
                />
                <VStack spacing={1}>
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, accent.green, accent.cyan)"
                    bgClip="text"
                  >
                    {totalUnlocked}
                  </Text>
                  <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} fontWeight="medium">
                    Available
                  </Text>
                </VStack>
              </Flex>
            </VStack>
          </Box>

          {/* Categories Section */}
          <VStack spacing={8} align="stretch">
            <Flex align="center" gap={3} justify="center">
              <Box h="2px" flex={1} maxW="100px" bgGradient="linear(to-r, transparent, brand.300)" />
              <Heading
                size="lg"
                textAlign="center"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Choose Your World
              </Heading>
              <Box h="2px" flex={1} maxW="100px" bgGradient="linear(to-l, transparent, brand.300)" />
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
        </VStack>
      </Container>
    </Box>
  )
}
