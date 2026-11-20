# Xin Yan's personal website

This repository contains the source for [thomas-yanxin.github.io](https://thomas-yanxin.github.io/), a bilingual personal website built with Jekyll and GitHub Pages.

## Local development

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>. To build without starting a server, run `bundle exec jekyll build`; the generated site is written to `_site/`.

## Repository structure

- `_pages/about.md` and `_pages/about-en.md`: Chinese and English homepage content.
- `_includes/`, `_layouts/`, `_sass/`, and `assets/`: shared templates, styles, scripts, and fonts.
- `xyvl/`: the standalone xyVL animation embedded on the homepage.
- `images/`: homepage images, icons, and logo assets; logo sources are documented in `images/logos/README.md`.
- `proof/`: linked supporting material and resume sources.
- `google_scholar_crawler/` and `.github/workflows/`: the citation data collection workflow.

The site is based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), which draws on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) and [Academic Pages](https://github.com/academicpages/academicpages.github.io). See [LICENSE](LICENSE) for the repository license and the relevant font files for their licenses.
