import { notFound } from 'next/navigation'
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

  return <StoryReader story={story} content={content} />
}