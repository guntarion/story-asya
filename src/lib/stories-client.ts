import { Story } from '@/types/story'
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
        category: category as 'cookierun' | 'dandysworld' | 'fnaf'
      })
    })
  })
  
  return allStories
}

export function getStoriesByCategory(category: 'cookierun' | 'dandysworld' | 'fnaf'): Story[] {
  const categoryStories = storiesData[category] || []
  
  return categoryStories.map((story) => ({
    ...story,
    isLocked: !isStoryUnlocked(story.unlockDate),
    category
  }))
}

export function getStoryBySlug(category: 'cookierun' | 'dandysworld' | 'fnaf', slug: string): Story | null {
  const categoryStories = getStoriesByCategory(category)
  return categoryStories.find(story => story.slug === slug) || null
}