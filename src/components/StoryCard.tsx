'use client'

import {
  Box,
  Text,
  Badge,
  useColorModeValue,
  VStack,
  Heading,
  HStack,
  Icon,
  Flex,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Story } from '@/types/story'
import { LockIcon, TimeIcon } from '@chakra-ui/icons'

// Sparkle icon
const SparkleIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
    />
  </Icon>
)

// Arrow icon
const ArrowIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
    />
  </Icon>
)

interface StoryCardProps {
  story: Story
}

export default function StoryCard({ story }: StoryCardProps) {
  const cardBg = useColorModeValue(
    'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(253,244,255,0.98) 100%)',
    'linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(22,33,62,0.98) 100%)'
  )
  const lockedBg = useColorModeValue(
    'linear-gradient(135deg, rgba(243,244,246,0.9) 0%, rgba(229,231,235,0.95) 100%)',
    'linear-gradient(135deg, rgba(31,41,55,0.9) 0%, rgba(17,24,39,0.95) 100%)'
  )
  const borderColor = useColorModeValue('brand.200', 'brand.800')
  const lockedBorderColor = useColorModeValue('gray.300', 'gray.600')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const lockedTextColor = useColorModeValue('gray.400', 'gray.500')

  const unlockDate = new Date(story.unlockDate)
  const formattedDate = unlockDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Jakarta'
  })
  const formattedTime = unlockDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jakarta',
    hour12: true
  })

  const CardContent = (
    <Box
      position="relative"
      bg={story.isLocked ? lockedBg : cardBg}
      backdropFilter="blur(20px)"
      border="2px solid"
      borderColor={story.isLocked ? lockedBorderColor : borderColor}
      borderRadius="2xl"
      p={6}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor={story.isLocked ? 'not-allowed' : 'pointer'}
      opacity={story.isLocked ? 0.75 : 1}
      overflow="hidden"
      role="group"
      _hover={!story.isLocked ? {
        transform: 'translateY(-6px) scale(1.01)',
        shadow: '0 20px 50px rgba(217, 70, 239, 0.2)',
        borderColor: 'brand.400',
      } : {}}
    >
      {/* Decorative corner for unlocked */}
      {!story.isLocked && (
        <Box
          position="absolute"
          top={-2}
          right={-2}
          w="60px"
          h="60px"
          bg="linear-gradient(135deg, transparent 50%, rgba(217, 70, 239, 0.2) 50%)"
          borderRadius="0 0 0 100%"
          transition="all 0.4s ease"
          _groupHover={{
            bg: 'linear-gradient(135deg, transparent 50%, rgba(217, 70, 239, 0.4) 50%)',
          }}
        />
      )}

      {/* Sparkle for available stories */}
      {!story.isLocked && (
        <SparkleIcon
          position="absolute"
          top={4}
          right={4}
          w={4}
          h={4}
          color="brand.400"
          opacity={0.6}
          transition="all 0.4s ease"
          _groupHover={{
            opacity: 1,
            transform: 'rotate(45deg) scale(1.2)',
          }}
        />
      )}

      <VStack spacing={4} align="stretch">
        {/* Title and Lock */}
        <Flex justify="space-between" align="start" gap={3}>
          <Heading
            size="md"
            color={story.isLocked ? lockedTextColor : useColorModeValue('brand.700', 'brand.300')}
            noOfLines={2}
            fontWeight="bold"
            transition="all 0.3s ease"
            _groupHover={!story.isLocked ? {
              color: useColorModeValue('brand.600', 'brand.200'),
            } : {}}
          >
            {story.title}
          </Heading>
          {story.isLocked && (
            <Box
              p={2}
              borderRadius="lg"
              bg={useColorModeValue('gray.200', 'gray.700')}
            >
              <Icon as={LockIcon} color={lockedTextColor} w={4} h={4} />
            </Box>
          )}
        </Flex>

        {/* Description */}
        {story.description && (
          <Text
            fontSize="sm"
            color={story.isLocked ? lockedTextColor : textColor}
            noOfLines={3}
            lineHeight="1.6"
          >
            {story.description}
          </Text>
        )}

        {/* Footer */}
        <Flex justify="space-between" align="center" mt={2}>
          <Badge
            px={3}
            py={1.5}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
            bg={story.isLocked
              ? useColorModeValue('gray.200', 'gray.700')
              : 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)'
            }
            color={story.isLocked
              ? useColorModeValue('gray.500', 'gray.400')
              : useColorModeValue('green.600', 'green.300')
            }
          >
            {story.isLocked ? 'Locked' : 'Available'}
          </Badge>

          {story.isLocked ? (
            <HStack fontSize="xs" color={lockedTextColor} spacing={1}>
              <Icon as={TimeIcon} w={3} h={3} />
              <Text>{formattedDate}</Text>
            </HStack>
          ) : (
            <Flex
              align="center"
              gap={1}
              fontSize="sm"
              fontWeight="semibold"
              color="brand.500"
              transition="all 0.3s ease"
              _groupHover={{
                gap: 2,
                color: 'brand.600',
              }}
            >
              <Text>Read</Text>
              <ArrowIcon
                w={4}
                h={4}
                transition="all 0.3s ease"
                _groupHover={{
                  transform: 'translateX(4px)',
                }}
              />
            </Flex>
          )}
        </Flex>
      </VStack>

      {/* Bottom accent line for unlocked */}
      {!story.isLocked && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="3px"
          bg="linear-gradient(90deg, #d946ef, #ec4899, #06b6d4)"
          bgSize="200% 100%"
          transform="scaleX(0)"
          transformOrigin="left"
          transition="all 0.4s ease"
          _groupHover={{
            transform: 'scaleX(1)',
          }}
        />
      )}
    </Box>
  )

  if (story.isLocked) {
    return CardContent
  }

  return (
    <Link href={`/story/${story.category}/${story.slug}`}>
      {CardContent}
    </Link>
  )
}
