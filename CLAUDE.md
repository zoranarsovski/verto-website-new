# VertoDigital website — agent instructions

## Always ship

A change isn't done until it's deployed. After completing any code task, the
final step is **always**:

1. Commit on a `claude/<short-descriptive-name>` branch off latest `main`
2. `git push -u origin <branch>`
3. Open a PR against `main` via the GitHub MCP tools

The repo's `auto-merge-claude.yml` workflow auto-merges PRs from `claude/*`
branches once the Cloudflare Pages preview check passes — that produces the
production deploy. Do not stop at "branch pushed" or "commit made"; the user
has standing approval to ship every change they ask for.

## Branch naming

- One PR per logical change. Do not bundle unrelated work.
- Intermediate Edits during a single task share a branch and a single
  commit — don't create a PR per file edit.
- Names: kebab-case, descriptive, prefixed `claude/` (e.g.
  `claude/about-page`, `claude/about-remove-outlines`).
- Branches are auto-deleted on squash merge — never reuse a merged branch.

## Site context

- Static HTML served by Cloudflare Pages. No build step. Edit `*.html` and the
  preview deploys.
- Tailwind via CDN; design tokens defined inline in each page's `<head>`.
- Brand rule: **no grey card outlines.** Cards are `bg-white` on tinted panels
  with hover shadows. Form inputs are the only place `border border-brand-dark/15`
  is acceptable. (Originally enforced in commit `d5631e2`.)
- Primary CTA across the site is "Book a call" / "Book a pipeline diagnostic" —
  do not introduce competing primary CTAs.
