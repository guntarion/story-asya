export interface Story {
  id: string
  title: string
  slug: string
  category: 'cookierun' | 'dandysworld' | 'fnaf' | 'starrystories' | 'metalcardbot'
  filename: string
  unlockDate: string // ISO date string
  isLocked: boolean
  description?: string
  content?: string
}

export interface Category {
  id: 'cookierun' | 'dandysworld' | 'fnaf' | 'starrystories' | 'metalcardbot'
  name: string
  description: string
  headerImage: string
  storiesPath: string
}

export interface StoryMetadata {
  title: string
  description?: string
  unlockDate: string
}