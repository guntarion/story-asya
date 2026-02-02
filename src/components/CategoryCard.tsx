'use client'

import {
  Box,
  Image,
  Text,
  Badge,
  useColorModeValue,
  VStack,
  Heading,
  Flex,
  Icon,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Category } from '@/types/story'

// Arrow icon
const ArrowIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
    />
  </Icon>
)

interface CategoryCardProps {
  category: Category
  storyCount: number
  unlockedCount: number
}

export default function CategoryCard({ category, storyCount, unlockedCount }: CategoryCardProps) {
  const cardBg = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(253,244,255,0.95) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(22,33,62,0.95) 100%)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Link href={`/category/${category.id}`}>
      <Box
        position="relative"
        bg={cardBg}
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor={borderColor}
        borderRadius="2xl"
        overflow="hidden"
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        cursor="pointer"
        role="group"
        _hover={{
          transform: 'translateY(-8px) scale(1.02)',
          shadow: '0 20px 60px rgba(217, 70, 239, 0.25)',
          borderColor: 'brand.400',
        }}
      >
        {/* Image Container with Overlay */}
        <Box position="relative" overflow="hidden">
          <Image
            src={category.headerImage}
            alt={category.name}
            w="100%"
            h={52}
            objectFit="cover"
            transition="all 0.5s ease"
            _groupHover={{
              transform: 'scale(1.1)',
            }}
          />
          {/* Gradient Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0,0,0,0.7) 100%)"
            transition="all 0.4s ease"
            _groupHover={{
              bg: 'linear-gradient(180deg, rgba(217, 70, 239, 0.1) 0%, rgba(217, 70, 239, 0.2) 40%, rgba(0,0,0,0.8) 100%)',
            }}
          />
          {/* Category name on image */}
          <Box
            position="absolute"
            bottom={4}
            left={5}
            right={5}
          >
            <Heading
              size="lg"
              color="white"
              fontWeight="bold"
              textShadow="0 2px 10px rgba(0,0,0,0.5)"
              noOfLines={2}
            >
              {category.name}
            </Heading>
          </Box>

          {/* Decorative corner accent */}
          <Box
            position="absolute"
            top={0}
            right={0}
            w="80px"
            h="80px"
            bg="linear-gradient(135deg, transparent 50%, rgba(217, 70, 239, 0.3) 50%)"
            transition="all 0.4s ease"
            _groupHover={{
              bg: 'linear-gradient(135deg, transparent 50%, rgba(217, 70, 239, 0.5) 50%)',
            }}
          />
        </Box>

        {/* Content */}
        <VStack p={5} spacing={4} align="stretch">
          <Text fontSize="sm" color={textColor} noOfLines={2} lineHeight="1.6">
            {category.description}
          </Text>

          <Flex justify="space-between" align="center">
            <Badge
              px={3}
              py={1}
              borderRadius="full"
              bg="linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(162, 28, 175, 0.15) 100%)"
              color="brand.600"
              fontWeight="semibold"
              fontSize="xs"
            >
              {unlockedCount} of {storyCount} available
            </Badge>

            <Flex
              align="center"
              gap={1}
              color="brand.500"
              fontWeight="semibold"
              fontSize="sm"
              transition="all 0.3s ease"
              _groupHover={{
                gap: 2,
                color: 'brand.600',
              }}
            >
              <Text>Explore</Text>
              <ArrowIcon
                w={4}
                h={4}
                transition="all 0.3s ease"
                _groupHover={{
                  transform: 'translateX(4px)',
                }}
              />
            </Flex>
          </Flex>
        </VStack>

        {/* Bottom accent line */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="3px"
          bg="linear-gradient(90deg, brand.400, accent.pink, brand.600)"
          bgSize="200% 100%"
          transform="scaleX(0)"
          transformOrigin="left"
          transition="all 0.4s ease"
          _groupHover={{
            transform: 'scaleX(1)',
          }}
        />
      </Box>
    </Link>
  )
}
