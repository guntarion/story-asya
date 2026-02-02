import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Story, StoryMetadata } from '@/types/story'
import storiesData from '@/data/stories.json'

export function isStoryUnlocked(unlockDate: string): boolean {
  const now = new Date()
  const unlock = new Date(unlockDate)
  return now >= unlock
}

export function getAllStories(): Story[] {
  const allStories: Story[] = []

  Object.entries(storiesData).forEach(([category, stories]) => {
    stories.forEach((story) => {
      allStories.push({
        ...story,
        isLocked: !isStoryUnlocked(story.unlockDate),
        category: category as 'cookierun' | 'dandysworld' | 'fnaf' | 'starrystories' | 'metalcardbot'
      })
    })
  })

  return allStories
}

export function getStoriesByCategory(category: 'cookierun' | 'dandysworld' | 'fnaf' | 'starrystories' | 'metalcardbot'): Story[] {
  const categoryStories = storiesData[category] || []

  return categoryStories.map((story) => ({
    ...story,
    isLocked: !isStoryUnlocked(story.unlockDate),
    category
  }))
}

export function getStoryBySlug(category: 'cookierun' | 'dandysworld' | 'fnaf' | 'starrystories' | 'metalcardbot', slug: string): Story | null {
  const categoryStories = getStoriesByCategory(category)
  return categoryStories.find(story => story.slug === slug) || null
}

export async function getStoryContent(story: Story): Promise<string> {
  if (story.isLocked) {
    return 'This story is locked and will be available soon!'
  }
  
  try {
    const filePath = path.join(process.cwd(), 'public', 'stories', story.category, story.filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)
    return content
  } catch (error) {
    console.error('Error reading story content:', error)
    return 'Sorry, this story could not be loaded.'
  }
}