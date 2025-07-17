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
} from '@chakra-ui/react'
import Link from 'next/link'
import { Story } from '@/types/story'
import { LockIcon, TimeIcon } from '@chakra-ui/icons'

interface StoryCardProps {
  story: Story
}

export default function StoryCard({ story }: StoryCardProps) {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')
  const lockedBg = useColorModeValue('gray.100', 'gray.700')
  const lockedColor = useColorModeValue('gray.400', 'gray.500')

  const unlockDate = new Date(story.unlockDate)
  const formattedDate = unlockDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const CardContent = (
    <Box
      bg={story.isLocked ? lockedBg : bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      transition="all 0.2s"
      _hover={!story.isLocked ? {
        transform: 'translateY(-2px)',
        shadow: 'lg',
        bg: hoverBg,
      } : {}}
      cursor={story.isLocked ? 'not-allowed' : 'pointer'}
      opacity={story.isLocked ? 0.7 : 1}
    >
      <VStack spacing={3} align="stretch">
        <HStack justify="space-between" align="start">
          <Heading size="md" color={story.isLocked ? lockedColor : 'brand.600'} noOfLines={2}>
            {story.title}
          </Heading>
          {story.isLocked && <Icon as={LockIcon} color={lockedColor} />}
        </HStack>
        
        {story.description && (
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {story.description}
          </Text>
        )}
        
        <HStack justify="space-between" align="center">
          <Badge 
            colorScheme={story.isLocked ? 'gray' : 'brand'} 
            variant={story.isLocked ? 'solid' : 'subtle'}
          >
            {story.isLocked ? 'Locked' : 'Available'}
          </Badge>
          
          <HStack fontSize="xs" color="gray.500">
            <Icon as={TimeIcon} />
            <Text>{story.isLocked ? `Unlocks ${formattedDate}` : 'Available now'}</Text>
          </HStack>
        </HStack>
      </VStack>
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