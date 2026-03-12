#!/usr/bin/env bash
# generate-manifest.sh
# Regenerates manifest.js from all .js data files in the decks/ folder.
# Run from the flashcards25 directory: bash generate-manifest.sh

EXCLUDED="combined.js exam.js none.js xxxcollins.js"

{
  echo "// manifest.js (auto-generated $(date '+%Y-%m-%d'))"
  echo "window.decks = ["
  for f in $(ls decks/*.js | sort | xargs -n1 basename); do
    [[ " $EXCLUDED " =~ " $f " ]] && continue
    echo "  \"$f\","
  done
  echo "];"
} > manifest.js

echo "manifest.js updated."
