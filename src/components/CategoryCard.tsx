'use client'

import {
  Box,
  Image,
  Text,
  Badge,
  useColorModeValue,
  VStack,
  Heading,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Category } from '@/types/story'

interface CategoryCardProps {
  category: Category
  storyCount: number
  unlockedCount: number
}

export default function CategoryCard({ category, storyCount, unlockedCount }: CategoryCardProps) {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Link href={`/category/${category.id}`}>
      <Box
        bg={bg}
        border="1px"
        borderColor={borderColor}
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-4px)',
          shadow: 'xl',
          bg: hoverBg,
        }}
        cursor="pointer"
      >
        <Image
          src={category.headerImage}
          alt={category.name}
          w="100%"
          h={48}
          objectFit="cover"
        />
        <VStack p={6} spacing={3} align="stretch">
          <Heading size="md" color="brand.600">
            {category.name}
          </Heading>
          <Text fontSize="sm" color="gray.600" noOfLines={2}>
            {category.description}
          </Text>
          <Box>
            <Badge colorScheme="brand" variant="subtle">
              {unlockedCount} of {storyCount} stories available
            </Badge>
          </Box>
        </VStack>
      </Box>
    </Link>
  )
}