# Story Asya - Project Guide for Claude Code

## Project Overview

**Story Asya** is a Next.js web application that displays a collection of stories for a 12-year-old girl named Asya. The stories are based on her favorite franchises (Cookie Run Kingdom, Dandy's World, FNAF, Metal Cardbot) and original stories.

### Tech Stack
- **Framework:** Next.js 15.2.0 with App Router
- **UI Library:** Chakra UI v2.8.2
- **Styling:** Emotion CSS-in-JS (no Tailwind)
- **Animations:** Framer Motion
- **Font:** Nunito (Google Fonts)
- **Markdown:** react-markdown for story rendering

### Key Directories
```
src/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── data/
│   ├── categories.ts       # Category definitions
│   └── stories.json        # Story metadata (titles, unlock dates)
├── lib/
│   ├── theme.ts           # Chakra UI theme
│   └── stories.ts         # Story loading utilities
└── types/
    └── story.ts           # TypeScript types

public/
├── assets/images/         # Category header images
└── stories/               # Markdown story files
    ├── cookierun/
    ├── dandysworld/
    ├── fnaf/
    ├── starrystories/
    └── metalcardbot/
```

## Creating Stories

**See `.claude/guides/story-creation.md` for the complete story creation guide.**

### Quick Reference

1. **Add story metadata** to `src/data/stories.json`
2. **Create markdown file** in `public/stories/[category]/`
3. **Set unlock date** - past date = immediate, future date = scheduled

### Story Categories
| ID | Name | Image Path |
|----|------|------------|
| `cookierun` | Cookie Run Kingdom | `/assets/images/cookie-run-kingdom.jpg` |
| `dandysworld` | Dandy's World | `/assets/images/DandysWorld_2025.jpg` |
| `fnaf` | Five Nights at Freddys | `/assets/images/fnaf-graphic-1200x675.jpeg` |
| `starrystories` | Starry's Original Stories | `/assets/images/starry-image.png` |
| `metalcardbot` | Metal Cardbot | `/assets/images/metal-cardbot.jpg` |

## Important Files

| File | Purpose |
|------|---------|
| `src/data/stories.json` | Story metadata - ADD NEW STORIES HERE |
| `src/data/categories.ts` | Category definitions |
| `src/types/story.ts` | TypeScript types (update when adding categories) |
| `src/lib/stories.ts` | Story loading logic (update category union types) |
| `src/lib/theme.ts` | Chakra UI theme (brand colors, animations) |

## Design System

### Brand Colors (Fuchsia/Magenta)
- Primary: `brand.500` (#d946ef)
- Range: `brand.50` to `brand.900`

### Accent Colors
- `accent.pink` (#ec4899)
- `accent.blue` (#3b82f6)
- `accent.cyan` (#06b6d4)
- `accent.green` (#10b981)

### Visual Style
- Glassmorphism cards with `backdropFilter="blur(20px)"`
- Gradient text using `bgGradient` and `bgClip="text"`
- Hover animations with `transform` and `transition`
- Sparkle decorations for playful feel

## Common Tasks

### Add a New Story
```bash
# Follow the guide in .claude/guides/story-creation.md
```

### Add a New Category
1. Add to `src/data/categories.ts`
2. Update union types in `src/types/story.ts`
3. Update union types in `src/lib/stories.ts`
4. Add header image to `public/assets/images/`
5. Create folder in `public/stories/[new-category]/`
6. Add category section in `src/data/stories.json`

## Audience

The target audience is a **12-year-old girl**. Stories should be:
- Fun and engaging with humor
- Age-appropriate (no scary horror, mild tension okay)
- Educational with a lesson/moral at the end
- True to the source material characters
- Around 160-220 lines of markdown (moderately long, aim for 160+ minimum)

## Notes

- Stories use Jakarta timezone (`Asia/Jakarta`) for unlock times
- The app supports dark/light mode toggle
- All components are client-side rendered (`'use client'`)
