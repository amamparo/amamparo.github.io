Turn this sveltekit app into a lightweight one-page personal landing page / digital business card.

## Requirements:

* Install the latest version of existing dependencies if needed
* Remove any unnecessary dependencies
* Use Tailwind CSS (already installed)
* The page should include:
  * My headshot image (headshot_dark.jpg in static/)
  * My name ("Aaron Mamparo")
  * Links to my socials (linkedin, github, bluesky, instagram, last.fm, email)
    * Links should be easy to manage in one place (e.g., a config file)
    * Use icon library for social icons (lucide-svelte or similar)
    * Links open in new tab

## Design Requirements:

* DARK MODE ONLY - no light mode support needed
* Unique design - NOT like Linktree
* Display only icons for social links (no text labels)
* Add hover tooltips to show site names
* Custom dark theme with colors from headshot_dark.jpg:
  * Near-black background (#0a0a0f)
  * Neon violet (#9945ff) and neon cyan (#00ffff) accents
  * Subtle glowing effects
* Icons in horizontal row, not stacked buttons
* Minimalistic, modern, mobile-friendly
* NO theme toggle - dark mode always

## Technical Notes:

* Social links configuration in src/lib/socials.js
* Set dark styles directly, no dark: prefix needed
* No localStorage, no theme detection, no toggle button
* Simple and clean implementation