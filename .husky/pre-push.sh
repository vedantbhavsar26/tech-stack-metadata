#!/usr/bin/env sh
. "$(dirname -- "$0")/_/h"

# Get changed files since last push
CHANGED_FILES=$(git diff --name-only origin/main...HEAD)

# Build only the affected packages using Turbo
if [ -n "$CHANGED_FILES" ]; then
  npx turbo run build --filter="...[origin/main...HEAD]"
else
  echo "No changes detected, skipping build"
fi