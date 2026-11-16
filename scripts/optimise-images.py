#!/usr/bin/env python3
"""Generate the WebP variants the site serves from the source images in public/.

Run after adding or replacing a photo:  python3 scripts/optimise-images.py
Needs Pillow (pip install pillow). Existing up-to-date files are skipped.
"""
from pathlib import Path
from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / 'public'
QUALITY = 78

# (glob relative to public/, widths to generate)
JOBS = [
    ('images/speakers/*.jpg', (240, 480)),
    ('images/dublin/*.jpg', (700, 1400)),
    ('ihc2026.jpeg', (700, 800, 1400, 1600)),
    ('logo.png', (160,)),
]


def variant_path(source: Path, width: int) -> Path:
    return source.with_name(f'{source.stem}-{width}.webp')


def build(source: Path, width: int) -> bool:
    target = variant_path(source, width)
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        return False
    with Image.open(source) as image:
        resized = image if image.width <= width else image.resize(
            (width, round(image.height * width / image.width)), Image.LANCZOS)
        resized.save(target, 'WEBP', quality=QUALITY, method=6)
    return True


def main() -> None:
    written = 0
    for pattern, widths in JOBS:
        for source in sorted(PUBLIC.glob(pattern)):
            written += sum(build(source, width) for width in widths)
    print(f'{written} file(s) written')


if __name__ == '__main__':
    main()
