import HomePage from '@/components/HomePage'
import { categories } from '@/data/categories'
import { getStoriesByCategory } from '@/lib/stories-client'

export default function Page() {
  const categoriesWithCounts = categories.map((category) => {
    const stories = getStoriesByCategory(category.id)
    const unlockedCount = stories.filter(story => !story.isLocked).length
    
    return {
      category,
      storyCount: stories.length,
      unlockedCount
    }
  })

  return <HomePage categoriesWithCounts={categoriesWithCounts} />
}