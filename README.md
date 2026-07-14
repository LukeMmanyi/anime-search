# Anime Search App

My anime search app, built with plain HTML/CSS/JS and the Jikan API.

[[Live Demo](https://lukemmanyi.github.io/anime-search/)](https://lukemmanyi.github.io/anime-search/)

What it does


Search any anime by name and get results from MyAnimeList
Each card shows the cover image, type, year, and score
Click any card to open a modal with the synopsis, episode count, status, and rating
Handles missing data — null scores, missing years, and ongoing series all display cleanly


## Built with


HTML, CSS, JS — no frameworks
Jikan API — free, no API key required
Elms Sans (Google Fonts)



No API key needed — Jikan is fully free and open.

## Notes

Jikan pulls data directly from MyAnimeList. Search returns up to 25 results by default. Main things I learned here were reading API documentation to construct fetch URLs, handling null data with ternary operators, dynamically generating HTML from API responses, and building a modal from scratch with DOM manipulation.

## Author

Luke Mmanyi
