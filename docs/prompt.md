Create a next.js app, in this folder, using **Chakra UI** with purple variants (theming) like:

```
const theme = extendTheme({
  colors: {
    brand: {
      50: '#faf5ff',
      100: '#f3e8ff',
      500: '#a855f7', // purple-500
      900: '#581c87',
    },
  },
})

```

"next": "^15.2.0",
"react": "^18.2.0",

In overall, the design should contain white, light purple, and purple. Gradient consisting purple is also welcomed.

The app purpose is to list out stories, markdown files, and display them properly. We should let user (kids) to read them in convinience way, mostly in mobile or tablet. We are not using database for now. But the stories should have ability of "locked" and will be unlocked in certain day and time; thus we need to have .json to set each story?

The stories are varied in three categories:

1. Cookie Run Kingdom - the header = assets/images/cookie-run-kingdom.jpg, the stories is at stories/cookierun
2. Dandy's World - the header is assets/images/DandysWorld_2025.jpg; the stories is at stories/dandysworld
3. FNAF (Five Nights at Freddy's) - the header = assets/images/fnaf-graphic-1200x675.jpeg the stories is at stories/fnaf

each header width are 640 px. You should put the images in the appropriate location. I also put the main header for the web at assets/images/header.jpg (also 640 x 480)

You can study about each category at docs/about.md

We have existing stories at stories folder. You may (and should) create (or move the existing) folder in the most appropriate location; you may also rename the files, for better organization, if needed.

All stories should be have reader view (with no edit). If possible, we can let user to increase and decrease the font size. Choosing between ligth and dark mode is a must.

Each stories should have locked and unlocked state (the unlocked state is normal). I need this so I can bulk producing the stories, and have each of them unlocked at certain time. So each story should have time atribut to make them unlocked (viewable).

If you have questions for me of preferences, ask away.

You have sequential-thinking MCP to use.
