# Spaced Practice – Flashcard Apps

A collection of simple, data-driven flashcard apps that run entirely in the browser. No server, no build step, no login.

---

## How to Use the Apps

Open `flashCards/index.html` to choose a study interface:

| App | Best for |
|-----|----------|
| **Concept Review** | Working through all your decks with a progress meter and tag filtering |
| **Catalog** | Searching and browsing all cards across all decks |
| **Flip Cards** | Classic one-deck study with 3D flip animation |
| **Flip Cards – Simple** | Same as above but with a minimal text-reveal interface |

---

## Creating a Flashcard Deck

### Option A: By hand

Create a `.js` file in the `flashCards/decks/` folder with this format:

```js
window.topicHeading = 'My Topic';
window.flashcardData = [
  {
    question: "What is X?",
    answer: "X is the thing that does Y.",
    tags: ["my-topic", "vocabulary"]
  },
  {
    question: "What is the difference between A and B?",
    answer: "A does this; B does that.",
    tags: ["my-topic", "concepts"]
  }
];
```

**Rules:**
- `window.topicHeading` — display name for the deck (string)
- `window.flashcardData` — array of card objects, each with `question`, `answer`, and `tags`
- `tags` is an array of strings; use consistent tags across decks so the filter buttons work well
- Filename becomes the deck identifier (e.g. `myTopic.js` → `?data=myTopic`)

### Option B: Using an LLM

This is the fastest way to create a deck from a reading or lecture.

**Step 1 — Generate the cards**

Give the LLM your reading material (paste the text, or describe the topic) and use a prompt like:

> Create 20 flashcards for an undergraduate student reviewing the most important vocabulary, concepts, and arguments from this material. For each card write a clear question and a concise answer (2–4 sentences). Focus on ideas a student would need to understand and explain, not trivia.

**Step 2 — Review and negotiate**

Read through the cards. Ask the LLM to:
- Add missing concepts
- Rewrite answers that are too long or too vague
- Split cards that cover too much at once

**Step 3 — Convert to the data format**

Once you're happy with the content, ask the LLM:

> Now convert these flashcards to this JavaScript format, using the filename `myTopic` as the tag:
>
> ```js
> window.topicHeading = 'My Topic';
> window.flashcardData = [
>   { question: "...", answer: "...", tags: ["myTopic"] }
> ];
> ```

**Step 4 — Save the file**

Save the output as `myTopic.js` in the `flashCards/decks/` folder.

---

## Registering a New Deck

After adding a file to `decks/`, regenerate the manifest so the multi-deck apps pick it up:

```bash
# From the flashCards/ directory:
bash generate-manifest.sh
```

Or, if Node.js is available (validates each file before including it):

```bash
node generate-manifest.js
```

The manifest lists all decks the Concept Review app loads by default. The Catalog app has its own `dataFiles` list in `catalogWithFilterAndSearch.html` — add your new deck name there too.

---

## Deploying on GitHub Pages

The easiest way to share your flashcard collection publicly:

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one.

2. **Create a new repository** — click the **+** → *New repository*. Name it anything (e.g. `my-flashcards`). Set it to **Public**.

3. **Upload your files** — you can drag-and-drop the entire `flashCards/` folder into the repository using the GitHub web interface, or use git:

   ```bash
   git init
   git add .
   git commit -m "Add flashcard decks"
   git remote add origin https://github.com/YOUR-USERNAME/my-flashcards.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** — go to *Settings → Pages*. Under *Source*, select the `main` branch and the root folder (`/`). Click **Save**.

5. GitHub will give you a URL like `https://your-username.github.io/my-flashcards/`. Your flashcard apps will be live at that address.

**Updating your decks:** add new `.js` files to `decks/`, re-run the manifest generator, then push the changes to GitHub. The site updates automatically within a minute or two.

---

## File Structure

```
flashCards/
├── index.html                  ← landing page (start here)
├── conceptReviewByTag.html     ← multi-deck flip cards with stats
├── catalogWithFilterAndSearch.html  ← searchable card browser
├── flashCards.html             ← single-deck flip cards
├── flashCardsSmall.html        ← single-deck simple reveal
├── manifest.js                 ← auto-generated list of decks
├── generate-manifest.sh        ← regenerate manifest (bash)
├── generate-manifest.js        ← regenerate manifest (node)
├── css/
│   ├── catalog.css
│   └── flip-card.css
├── js/
│   └── catalog-engine.js
└── decks/
    ├── ethics101.js
    ├── ML101.js
    └── ...                     ← add your decks here
```
