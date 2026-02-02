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
  Flex,
  Icon,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import StoryCard from '@/components/StoryCard'
import { Category, Story } from '@/types/story'

// Book stack icon
const BookStackIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9-2-1-2 1V4h4v7z"
    />
  </Icon>
)

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
  const cardBg = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(253,244,255,0.95) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(22,33,62,0.95) 100%)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.800')

  return (
    <Box minH="100vh">
      <Container maxW="container.xl" py={{ base: 6, md: 10 }}>
        <VStack spacing={{ base: 8, md: 10 }} align="stretch">
          {/* Back Button */}
          <Link href="/">
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
              Back to Worlds
            </Button>
          </Link>

          {/* Hero Header */}
          <Box
            position="relative"
            borderRadius="3xl"
            overflow="hidden"
            shadow="0 20px 60px rgba(217, 70, 239, 0.2)"
          >
            {/* Background Image */}
            <Image
              src={category.headerImage}
              alt={category.name}
              w="100%"
              h={{ base: '200px', md: '300px', lg: '350px' }}
              objectFit="cover"
            />

            {/* Gradient Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)"
            />

            {/* Decorative accent */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="4px"
              bg="linear-gradient(90deg, brand.400, accent.pink, brand.600, accent.cyan, brand.400)"
              bgSize="200% 100%"
              animation="gradient-shift 3s ease infinite"
            />

            {/* Content Overlay */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              p={{ base: 6, md: 10 }}
            >
              <VStack spacing={4} align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                  fontWeight="extrabold"
                  color="white"
                  textShadow="0 4px 20px rgba(0,0,0,0.5)"
                >
                  {category.name}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="whiteAlpha.900"
                  maxW="2xl"
                  textShadow="0 2px 10px rgba(0,0,0,0.5)"
                >
                  {category.description}
                </Text>
                <HStack
                  spacing={4}
                  bg="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  px={5}
                  py={2}
                  borderRadius="full"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                >
                  <BookStackIcon w={5} h={5} color="white" />
                  <Text color="white" fontWeight="semibold">
                    {unlockedStories.length} of {stories.length} stories available
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Box>

          {/* Stories Section */}
          <VStack spacing={8} align="stretch">
            <Flex align="center" gap={3} justify="center">
              <Box h="2px" flex={1} maxW="100px" bgGradient="linear(to-r, transparent, brand.300)" />
              <Heading
                size="lg"
                textAlign="center"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Stories
              </Heading>
              <Box h="2px" flex={1} maxW="100px" bgGradient="linear(to-l, transparent, brand.300)" />
            </Flex>

            {stories.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {stories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </SimpleGrid>
            ) : (
              <Box
                bg={cardBg}
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor={borderColor}
                borderRadius="2xl"
                p={12}
                textAlign="center"
              >
                <VStack spacing={4}>
                  <Box
                    w={20}
                    h={20}
                    borderRadius="full"
                    bg="brand.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <BookStackIcon w={10} h={10} color="brand.500" />
                  </Box>
                  <Heading size="md" color={useColorModeValue('gray.600', 'gray.300')}>
                    No Stories Yet
                  </Heading>
                  <Text color={useColorModeValue('gray.500', 'gray.400')}>
                    Stories for this category are coming soon! Check back later.
                  </Text>
                </VStack>
              </Box>
            )}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
