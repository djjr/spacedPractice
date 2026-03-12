#!/usr/bin/env node
// generate-manifest.js
// Regenerates manifest.js from .js data files in the decks/ folder.
// Validates that each file contains window.flashcardData before including it.
// Run from the flashcards25 directory: node generate-manifest.js

const fs = require('fs');
const path = require('path');

const EXCLUDED = new Set(['combined.js', 'exam.js', 'none.js', 'xxxcollins.js']);

const files = fs.readdirSync('decks')
  .filter(f => f.endsWith('.js') && !EXCLUDED.has(f))
  .sort();

const valid = [];
const skipped = [];

for (const file of files) {
  const content = fs.readFileSync(path.join('decks', file), 'utf8');
  if (content.includes('window.flashcardData')) {
    valid.push(file);
  } else {
    skipped.push(file);
  }
}

const date = new Date().toISOString().slice(0, 10);
const lines = [
  `// manifest.js (auto-generated ${date})`,
  'window.decks = [',
  ...valid.map(f => `  "${f}",`),
  '];',
  '',
];

fs.writeFileSync('manifest.js', lines.join('\n'));

console.log(`manifest.js updated with ${valid.length} deck(s).`);
if (skipped.length) {
  console.log(`Skipped (no window.flashcardData): ${skipped.join(', ')}`);
}
