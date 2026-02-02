import { Category } from '@/types/story'

export const categories: Category[] = [
  {
    id: 'cookierun',
    name: 'Cookie Run Kingdom',
    description: 'Adventures in the magical world of Cookie Run Kingdom with your favorite cookie characters!',
    headerImage: '/assets/images/cookie-run-kingdom.jpg',
    storiesPath: 'stories/cookierun'
  },
  {
    id: 'dandysworld',
    name: "Dandy's World",
    description: 'Explore the mysterious and exciting world of Dandy with thrilling adventures and discoveries!',
    headerImage: '/assets/images/DandysWorld_2025.jpg',
    storiesPath: 'stories/dandysworld'
  },
  {
    id: 'fnaf',
    name: 'Five Nights at Freddys',
    description: 'Fun and less scary adventures with Freddy and friends in their pizzeria world!',
    headerImage: '/assets/images/fnaf-graphic-1200x675.jpeg',
    storiesPath: 'stories/fnaf'
  },
  {
    id: 'starrystories',
    name: "Starry's Original Stories",
    description: 'Original creative stories filled with friendship, adventure, and magical mishaps!',
    headerImage: '/assets/images/starry-image.png',
    storiesPath: 'stories/starrystories'
  },
  {
    id: 'metalcardbot',
    name: 'Metal Cardbot',
    description: 'Epic adventures with the mechanical lifeforms from Planet Machina who transform into awesome vehicles!',
    headerImage: '/assets/images/metal-cardbot.jpg',
    storiesPath: 'stories/metalcardbot'
  }
]