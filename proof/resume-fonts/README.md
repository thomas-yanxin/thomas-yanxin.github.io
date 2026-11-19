# Resume font assets

## Active typography

The resume uses Source Han Sans SC for Chinese, English, and numerals, with three embedded weights: Regular 400 for body text, Medium 500 for the English name, and Bold 700 for headings, positions, project names, and highlighted results. Both names are upright.

The WOFF2 files are self-hosted, so the HTML does not depend on locally installed fonts. Chrome embeds the fonts in the exported PDF. The character subsets cover the current visible HTML and Markdown resume text, printable ASCII, and common punctuation. When adding text, regenerate all three subsets from the complete source fonts to avoid fallback glyphs.

Source fonts:

- https://github.com/adobe-fonts/source-han-sans/tree/release/OTF/SimplifiedChinese
- License: SIL Open Font License 1.1, preserved in `Sans-LICENSE.txt` and the fonts' metadata.

## Retained assets

The earlier Source Han Serif SC SemiBold and Liberation Serif Bold Italic subsets are retained as historical assets and are not referenced by the current stylesheet. Their license notices remain in `Serif-LICENSE.txt` and `Name-LICENSE.txt`.

- https://github.com/adobe-fonts/source-han-serif/tree/release/OTF/SimplifiedChinese
- https://github.com/liberationfonts/liberation-fonts
