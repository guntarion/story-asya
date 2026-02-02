# Story Creation Guide

This guide explains how to create and publish stories in Story Asya.

## Overview

Creating a story requires two steps:
1. **Add metadata** to `src/data/stories.json`
2. **Create the markdown file** in `public/stories/[category]/`

## Step 1: Add Story Metadata

Edit `src/data/stories.json` and add a new entry to the appropriate category array.

### Story Metadata Schema

```json
{
  "id": "cardbot-001",
  "title": "The Rhythm of Justice",
  "slug": "the-rhythm-of-justice",
  "category": "metalcardbot",
  "filename": "cardbot-001-the-rhythm-of-justice.md",
  "unlockDate": "2025-01-01T00:00:00.000Z",
  "description": "Blue Cop and Mega Trucker discover that sometimes the best solution isn't a fight—it's a dance!"
}
```

### Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique identifier, format: `[prefix]-[number]` | `"cardbot-001"` |
| `title` | Display title of the story | `"The Rhythm of Justice"` |
| `slug` | URL-safe version of title (lowercase, hyphens) | `"the-rhythm-of-justice"` |
| `category` | Must match a category ID | `"metalcardbot"` |
| `filename` | Markdown filename (must match actual file) | `"cardbot-001-the-rhythm-of-justice.md"` |
| `unlockDate` | ISO 8601 date string (see below) | `"2025-01-01T00:00:00.000Z"` |
| `description` | Short summary (1-2 sentences) | `"Blue Cop and Mega Trucker..."` |

### Unlock Date Settings

The `unlockDate` determines when the story becomes available:

- **Immediately Available:** Use a past date
  ```json
  "unlockDate": "2025-01-01T00:00:00.000Z"
  ```

- **Scheduled for Future:** Use a future date
  ```json
  "unlockDate": "2025-12-25T09:00:00.000Z"
  ```

> **Note:** Times are displayed in Jakarta timezone (`Asia/Jakarta`, UTC+7)

### Category Prefixes

Use these prefixes for story IDs and filenames:

| Category | Prefix | Example ID |
|----------|--------|------------|
| cookierun | `cookie-` | `cookie-006` |
| dandysworld | `dandys-` | `dandys-008` |
| fnaf | `fnaf-` | `fnaf-008` |
| starrystories | `starry-` | `starry-005` |
| metalcardbot | `cardbot-` | `cardbot-002` |

## Step 2: Create the Markdown File

Create a new `.md` file in `public/stories/[category]/` with the exact filename specified in the metadata.

### File Location

```
public/stories/
├── cookierun/
│   └── cookie-006-your-story-title.md
├── dandysworld/
│   └── dandys-008-your-story-title.md
├── fnaf/
│   └── fnaf-008-your-story-title.md
├── starrystories/
│   └── starry-005-your-story-title.md
└── metalcardbot/
    └── cardbot-002-your-story-title.md
```

### Story Markdown Structure

```markdown
# Story Title

## Subtitle or Theme

[Opening paragraph that sets the scene...]

[Story content with dialogue, action, humor...]

[Multiple scenes/sections as needed...]

---

[Climax and resolution...]

## The Lesson

**Main takeaway in bold.** Explanation of the moral or educational message.

**Remember:** A memorable closing thought that reinforces the lesson.
```

### Markdown Features Supported

| Element | Syntax | Rendering |
|---------|--------|-----------|
| Headings | `# H1`, `## H2`, `### H3` | Gradient colored headings |
| Bold | `**text**` | Brand-colored bold text |
| Italic | `*text*` | Italic text |
| Blockquote | `> quote` | Styled box with left border |
| Unordered list | `- item` | Custom bullet points |
| Ordered list | `1. item` | Numbered list |
| Horizontal rule | `---` | Gradient divider line |

## Story Writing Guidelines

### Target Audience
- **Age:** 12-year-old girl
- **Tone:** Fun, engaging, humorous
- **Content:** Age-appropriate, educational

### Story Length
- **Target:** 160-220 lines of markdown
- **Minimum:** 150 lines (shorter feels rushed)
- **Sections:** 4-6 main scenes plus lesson
- **Reading time:** ~10-15 minutes

> **Reference:** Existing stories range from 95-170 lines. Aim for the higher end (160+) for a satisfying read.

### Content Guidelines

**DO:**
- Stay true to source material characters and personalities
- Include humor and witty dialogue
- Add educational value with a clear lesson
- Use descriptive action and vivid scenes
- Include character growth or learning moments
- Make assumptions about unfamiliar details (keep it believable)

**DON'T:**
- Include scary horror elements (mild tension is okay)
- Stray too far from established character personalities
- Use inappropriate language or themes
- Make the story too short or rushed
- Skip the lesson section

### Character Research

Before writing, review character information:
- Check `docs/` folder for character guides (e.g., `docs/metal-cardbot.md`)
- Reference existing stories in the same category for tone
- If no docs exist, make reasonable assumptions based on the franchise

## Complete Example

### 1. Add to `src/data/stories.json`

```json
{
  "metalcardbot": [
    {
      "id": "cardbot-002",
      "title": "The Great Energy Crisis",
      "slug": "the-great-energy-crisis",
      "category": "metalcardbot",
      "filename": "cardbot-002-the-great-energy-crisis.md",
      "unlockDate": "2025-02-14T00:00:00.000Z",
      "description": "When Edo Motors runs out of power, the Cardbots must learn to conserve energy and work together!"
    }
  ]
}
```

### 2. Create `public/stories/metalcardbot/cardbot-002-the-great-energy-crisis.md`

```markdown
# The Great Energy Crisis

## Learning to Share and Conserve

It was a typical Tuesday morning at Edo Motors...

[Story content here - aim for 150-200 lines]

## The Lesson

**Sharing resources and working together helps everyone succeed.**
When we conserve and cooperate, we can overcome challenges that seem
impossible alone.

**Remember:** The best solutions often come from teamwork and thinking
about others, not just ourselves!
```

## Checklist

Before publishing, verify:

- [ ] Story ID is unique and follows naming convention
- [ ] Slug is URL-safe (lowercase, hyphens, no special chars)
- [ ] Filename matches exactly what's in metadata
- [ ] Category is valid and matches an existing category
- [ ] Unlock date is correctly formatted (ISO 8601)
- [ ] Markdown file exists in the correct folder
- [ ] Story has title, content sections, and lesson
- [ ] Story length is appropriate (~150-200 lines)
- [ ] Content is age-appropriate and fun
- [ ] Characters match their source material personalities

## Troubleshooting

### Story not appearing?
1. Check `stories.json` for JSON syntax errors
2. Verify filename matches exactly (case-sensitive)
3. Ensure category ID is correct
4. Check unlock date is in the past for immediate availability

### TypeScript errors?
If adding a new category, update these files:
- `src/types/story.ts` - Add to category union type
- `src/lib/stories.ts` - Add to function parameter types
- `src/data/categories.ts` - Add category definition
