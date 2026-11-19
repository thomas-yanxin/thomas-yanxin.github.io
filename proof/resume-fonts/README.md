# Resume font assets

## Active typography

- Chinese body text uses local Songti SC (Regular 400 and Bold 700), followed by SimSun/STSong serif fallbacks.
- English body text and numerals use local Times New Roman (Regular 400 and Bold 700). It comes first in the body font stack so Songti's Latin glyphs do not replace it.
- The Chinese name `颜鑫` uses local Kaiti SC Bold (楷体-简), a regular-script face.
- The English name `Xin Yan` uses Times New Roman Bold Italic at 16pt. The embedded Liberation Serif Bold Italic subset remains a fallback for systems without that face.

System fonts are referenced by installed family/PostScript names rather than copied or redistributed as webfonts. The exported PDF embeds the fonts used by Chrome, so readers do not need these fonts installed to view it.

## Retained assets

The earlier Source Han Sans SC (Regular 400, Medium 500, Bold 700) and Source Han Serif SC (SemiBold) character subsets are retained but are no longer used by the current resume stylesheet. They and the Liberation Serif name fallback are distributed under the SIL Open Font License 1.1. Copyright and license notices are preserved in the fonts and license files in this directory.

Sources:
- https://github.com/adobe-fonts/source-han-sans/tree/release/OTF/SimplifiedChinese
- https://github.com/adobe-fonts/source-han-serif/tree/release/OTF/SimplifiedChinese
- https://github.com/liberationfonts/liberation-fonts (Liberation Serif Bold Italic, bundled with LibreOffice)

The Source Han subsets contain the previous resume text, ASCII, and common Chinese punctuation. Their internal family names are Yanxin CV Sans and Yanxin CV Serif. The English-name subset contains `Xin Yan`, is renamed internally to Yanxin CV Name, and preserves the source font's copyright and license metadata; see `Name-LICENSE.txt`.
