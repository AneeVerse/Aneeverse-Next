#!/bin/bash
set -e

# Load token from .env.deploy if present
if [ -f .env.deploy ]; then
  source .env.deploy
fi

COMMIT_MSG=${1:-"chore: production deploy"}

# ── Capture current git identity ──────────────────────────────────────────────
ORIG_NAME=$(git config user.name)
ORIG_EMAIL=$(git config user.email)

# ── Always restore git identity on exit (even if script errors) ───────────────
cleanup() {
  git config user.name  "$ORIG_NAME"
  git config user.email "$ORIG_EMAIL"
  echo "Git user restored → $ORIG_NAME"
}
trap cleanup EXIT

# ── Switch to aneeverse identity ──────────────────────────────────────────────
git config user.name  "aneeverse"
git config user.email "aneverse@gmail.com"
echo "Git user switched → aneeverse"

# ── Stage, commit, push ───────────────────────────────────────────────────────
git add .
if git diff --cached --quiet; then
  echo "Nothing to commit — skipping commit step"
else
  git commit -m "$COMMIT_MSG"
  git push
fi

# ── Deploy to Vercel ──────────────────────────────────────────────────────────
if [ -z "$VERCEL_TOKEN" ]; then
  echo "ERROR: VERCEL_TOKEN env var is not set."
  echo "Add it to .env.deploy or export it before running this script."
  exit 1
fi

vercel deploy --prod --token "$VERCEL_TOKEN"
echo "✓ Deployed to production"
