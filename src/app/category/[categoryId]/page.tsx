import { notFound } from 'next/navigation'
import CategoryPageComponent from '@/components/CategoryPageComponent'
import { categories } from '@/data/categories'
import { getStoriesByCategory } from '@/lib/stories-client'

interface CategoryPageProps {
  params: Promise<{
    categoryId: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  
  const category = categories.find(cat => cat.id === categoryId)
  
  if (!category) {
    notFound()
  }
  
  const stories = getStoriesByCategory(category.id)
  const unlockedStories = stories.filter(story => !story.isLocked)

  return (
    <CategoryPageComponent 
      category={category}
      stories={stories}
      unlockedStories={unlockedStories}
    />
  )
}