## 2026-04-05 11:46:43

feat: add two S2/S3 Metal Cardbot adventure stories

- Add cardbot-012: "Speranza Showdown: The Cosmic Stone Heist" — The Stone
  Raiders launch a 3-pronged assault on Edo Motors (sea, tunnel, aerial) to
  steal Flame Nova's confiscated Cosmic Stones; features full Speranza Crew
  (Gigantrex, Red Blitz, Cielo, Musclehyde), Deep Bite, Rock Crush, Glober,
  and Blastrain alongside Jun and Peruru
- Add cardbot-013: "Wild Code: The Night the Jungle Woke" — A cracked Machina
  artifact floods Mowtown Station with Beast Virus spores; Tigun, Night Griffon,
  Phantom Hornet, and Tachy battle a growing mechanical jungle while Jun and
  Soleil learn that true partnership can't be forced, culminating in Grand Bluleon
- Register both stories in src/data/stories.json with immediate unlock dates

---

## 2026-03-30 11:20:06

feat: add Metal Cardbot S1/S2/S3 character guides and YouTube story

- Add comprehensive Season 1 character guide (docs/character-guide/metal-cardbot-session-1-guide.md)
  covering all 12 S1 Cardbots with full profiles, weapons, personality, and story-writing tips
- Add comprehensive Season 2 & 3 character guide (docs/character-guide/metal-cardbot-session-2-3-guide.md)
  covering Speranza Crew, Hidden Cardbots, Wild Cardbots, and human characters Peruru and Soleil
- Both guides sourced via Playwright browser automation from the Metal Cardbot Fandom wiki
- Add story cardbot-011 "One More Video" — S1 characters discover YouTube; Buster Gallon deploys
  Mini Gallons as viewing companions, Buffalo Crush watches mukbang, Shadow X can't stop laughing
  at ninja fails, and Blue Cop insists his 47-video police chase playlist is "professional research"

---

## 2026-03-22 03:47:19

feat: add Horror Night story and Glober/Deep Bite/Rock Crush profiles

- Add Metal Cardbot story: Horror Night at Mowtown Cinema (cardbot-010)
- Add character profiles for Glober, Deep Bite, and Rock Crush to docs
- Add three new entries to the Season 2 quick reference table

---

## 2026-03-21 21:43:29

feat: add Metal Cardbot story - Phantom Hornet vs. Tigun: The Sky Siege of Mowtown

- Add action-comedy story featuring Phantom Hornet and Tigun as rival Wild Cardbots
- Story follows their clash and unlikely teamwork against a Beast Virus threat
- Add story metadata to stories.json with immediate unlock date

---

## 2026-03-05 05:23:54

feat: add two Ramadan-themed Metal Cardbot stories

- cardbot-007: "Empty Tanks and Full Hearts" - Dexter and Cielo fast for
  Ramadan, dramatically visit Mega Ambler claiming illness, get reprimanded
  by Buster Gallon, and receive wisdom from Gigantrex on Machinasium biology
  during fasting
- cardbot-008: "Operation Takjil" - Tachy collects iftar food at high speed,
  Sky Gallop transports to 7 remote zones, Cielo improvises off-plan and
  disrupts the operation, Shadow X reprimands him, Gigantrex restores order
  and Cielo completes the mission under coordination

---

## 2026-02-17 16:46:40

feat: add Metal Cardbot story - Chrome Thunder: The Band That Shook Mowtown

- Add new story where the Speranza Crew forms a band called Chrome Thunder
- Gigantrex as composer, Red Blitz as songwriter/vocalist, Cielo as editor/vocalist, Musclehyde as illustrator
- Lesson about every team role being essential, even behind-the-scenes contributions

---

## 2026-02-10 21:58:09

feat: add Metal Cardbot story - The Great Speed Showdown

Add new action-packed Metal Cardbot story featuring Red Blitz vs Flash Vector in an epic race that turns chaotic. Tachy and Cielo join the battle, taking sides, until Gigantrex teaches them about healthy competition vs destructive rivalry.

- Create cardbot-004-red-blitz-vs-flash-vector-race-chaos.md (220+ lines)
- Add story metadata to stories.json with immediate unlock date
- Update Metal Cardbot documentation
- Story teaches lesson about productive competition and teamwork

---

## 2026-02-03 04:11:40

security: update Next.js to 15.4.10 to fix CVE-2025-55182 (React2Shell)

- Update Next.js from 15.4.1 to 15.4.10 (patched version)
- CVE-2025-55182 is a critical RCE vulnerability in React Server Components
- Add security documentation for future reference

---

## 2026-02-03 04:04:50

fix: resolve React Hooks errors and add second Metal Cardbot story

- Fix useColorModeValue hooks in CategoryPageComponent called inside JSX
- Add 'metalcardbot' category to stories-client.ts type unions
- Add new story "The Great Garden Rescue" featuring Shadow X and Dexter
- Story scheduled for Feb 3, 2026 afternoon (Jakarta time)

---

## 2026-02-02 22:11:11

feat: add Metal Cardbot category with stunning UI revamp

- Add Metal Cardbot category with first story "The Rhythm of Justice"
  featuring Blue Cop and Mega Trucker learning teamwork through music
- Complete visual redesign with glassmorphism, gradient effects, and
  floating sparkle animations throughout the application
- Update theme with vibrant fuchsia color palette and accent colors
- Add Nunito font for a friendly, playful typography
- Enhance all components (Header, Footer, HomePage, CategoryCard,
  StoryCard, CategoryPageComponent, StoryReader) with modern styling
- Add hover animations, decorative elements, and smooth transitions
- Create CLAUDE.md project documentation for future sessions
- Add comprehensive story creation guide at .claude/guides/

---

