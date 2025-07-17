import { notFound } from 'next/navigation'
import { Box } from '@chakra-ui/react'
import Header from '@/components/Header'
import StoryReader from '@/components/StoryReader'
import { getStoryBySlug } from '@/lib/stories-client'
import { getStoryContent } from '@/lib/stories'

interface StoryPageProps {
  params: Promise<{
    categoryId: 'cookierun' | 'dandysworld' | 'fnaf'
    storySlug: string
  }>
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { categoryId, storySlug } = await params
  
  const story = getStoryBySlug(categoryId, storySlug)
  
  if (!story) {
    notFound()
  }
  
  const content = await getStoryContent(story)

  return (
    <Box minH="100vh">
      <Header />
      <StoryReader story={story} content={content} />
    </Box>
  )
}