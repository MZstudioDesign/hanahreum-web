import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, basename, extname } from "path";

const SRC_DIR =
  "d:/OneDrive - 대건중학교/260216 포트폴리오/Created/Rug website Amazon/260302 new sources";
const OUT_BASE =
  "d:/OneDrive - 대건중학교/260216 포트폴리오/Created/Rug website Amazon/hanahreum-web/public/images";

// Source filename → { outDir, outName, width, height }
// width/height = max render size from layout analysis (aspect ratio preserved, fit inside)
const IMAGE_MAP = [
  // ─── HOME: Brand Essence ───
  {
    src: "## Brand Essence — Large Left Image.png",
    outDir: "home",
    outName: "brand-essence-large",
    width: 750,
    height: 935,
  },
  {
    src: "## Brand Essence — Small Right Top Image.png",
    outDir: "home",
    outName: "brand-essence-small-top",
    width: 258,
    height: 344,
  },
  {
    src: "## Brand Essence — Small Right Bottom Image.png",
    outDir: "home",
    outName: "brand-essence-small-bottom",
    width: 258,
    height: 344,
  },

  // ─── HOME: Premium Selections ───
  {
    src: "premium-signature-wool.png",
    outDir: "home",
    outName: "premium-signature-wool",
    width: 403,
    height: 537,
  },
  {
    src: "premium-artisan-wash.png",
    outDir: "home",
    outName: "premium-artisan-wash",
    width: 403,
    height: 537,
  },
  {
    src: "premium-raw-cotton.png",
    outDir: "home",
    outName: "premium-raw-cotton",
    width: 403,
    height: 537,
  },
  {
    src: "premium-deep-monochrome.png",
    outDir: "home",
    outName: "premium-deep-monochrome",
    width: 403,
    height: 537,
  },

  // ─── HOME: BW Band Divider (parallax uses largest) ───
  {
    src: "bw-band-divider.png",
    outDir: "home",
    outName: "bw-band-divider",
    width: 2016,
    height: 1260,
  },

  // ─── HOME: Flowing Menu ───
  {
    src: "flowing-menu-collections.png",
    outDir: "home",
    outName: "flowing-menu-collections",
    width: 200,
    height: 63,
  },
  {
    src: "flowing-menu-craftsmanship.png",
    outDir: "home",
    outName: "flowing-menu-craftsmanship",
    width: 200,
    height: 63,
  },
  {
    src: "flowing-menu-about.png",
    outDir: "home",
    outName: "flowing-menu-about",
    width: 200,
    height: 63,
  },
  {
    src: "flowing-menu-journal.png",
    outDir: "home",
    outName: "flowing-menu-journal",
    width: 200,
    height: 63,
  },
  {
    src: "flowing-menu-partner.png",
    outDir: "home",
    outName: "flowing-menu-partner",
    width: 200,
    height: 63,
  },

  // ─── HOME: Contact CTA ───
  {
    src: "contact-cta.png",
    outDir: "home",
    outName: "contact-cta",
    width: 1440,
    height: 900,
  },

  // ─── ABOUT: Philosophy ───
  {
    src: "philosophy-left.png",
    outDir: "about",
    outName: "philosophy-left",
    width: 366,
    height: 488,
  },
  {
    src: "philosophy-right.png",
    outDir: "about",
    outName: "philosophy-right",
    width: 366,
    height: 488,
  },

  // ─── ABOUT: Timeline ───
  {
    src: "timeline-2019.png",
    outDir: "about",
    outName: "timeline-2019",
    width: 512,
    height: 288,
  },
  {
    src: "timeline-2020.png",
    outDir: "about",
    outName: "timeline-2020",
    width: 512,
    height: 288,
  },
  {
    src: "timeline-2021.png",
    outDir: "about",
    outName: "timeline-2021",
    width: 512,
    height: 288,
  },
  {
    src: "timeline-2023-insideout.png",
    outDir: "about",
    outName: "timeline-2023-insideout",
    width: 512,
    height: 288,
  },
  {
    src: "timeline-2023-ijm.png",
    outDir: "about",
    outName: "timeline-2023-ijm",
    width: 512,
    height: 288,
  },
  {
    src: "timeline-2024.png",
    outDir: "about",
    outName: "timeline-2024",
    width: 512,
    height: 288,
  },

  // ─── CRAFTSMANSHIP: Hero ───
  {
    src: "hero craftman.png",
    outDir: "craftsmanship",
    outName: "hero",
    width: 1656,
    height: 1035,
  },

  // ─── CRAFTSMANSHIP: Material Blocks ───
  {
    src: "material-faux-cashmere.png",
    outDir: "craftsmanship",
    outName: "material-faux-cashmere",
    width: 860,
    height: 538,
  },
  {
    src: "material-premium-wool.png",
    outDir: "craftsmanship",
    outName: "material-premium-wool",
    width: 860,
    height: 538,
  },
  {
    src: "material-organic-cotton.png",
    outDir: "craftsmanship",
    outName: "material-organic-cotton",
    width: 860,
    height: 538,
  },
  {
    src: "material-cotton-linen.png",
    outDir: "craftsmanship",
    outName: "material-cotton-linen",
    width: 860,
    height: 538,
  },
  {
    src: "material-wool-silk.jpeg",
    outDir: "craftsmanship",
    outName: "material-wool-silk",
    width: 860,
    height: 538,
  },

  // ─── CRAFTSMANSHIP: Quote Section ───
  {
    src: "quote-section.jpeg",
    outDir: "craftsmanship",
    outName: "quote-section",
    width: 1440,
    height: 540,
  },

  // ─── CRAFTSMANSHIP: Expand Cards ───
  {
    src: "expand-premium-wool.png",
    outDir: "craftsmanship",
    outName: "expand-premium-wool",
    width: 960,
    height: 500,
  },
  {
    src: "expand-faux-cashmere.png",
    outDir: "craftsmanship",
    outName: "expand-faux-cashmere",
    width: 960,
    height: 500,
  },
  {
    src: "expand-organic-cotton.png",
    outDir: "craftsmanship",
    outName: "expand-organic-cotton",
    width: 960,
    height: 500,
  },
  {
    src: "expand-wool-silk.png",
    outDir: "craftsmanship",
    outName: "expand-wool-silk",
    width: 960,
    height: 500,
  },

  // ─── COLLECTIONS: Products ───
  // Largest grid pattern is 880x495 (col-span-8, 16/9)
  // Using 880 width as max for all collection items
  {
    src: "sw-001.png",
    outDir: "collections",
    outName: "sw-001",
    width: 880,
    height: 880,
  },
  {
    src: "sw-002.png",
    outDir: "collections",
    outName: "sw-002",
    width: 880,
    height: 880,
  },
  {
    src: "sw-003.png",
    outDir: "collections",
    outName: "sw-003",
    width: 880,
    height: 880,
  },
  {
    src: "sw-004.png",
    outDir: "collections",
    outName: "sw-004",
    width: 880,
    height: 880,
  },
  {
    src: "sw-005.png",
    outDir: "collections",
    outName: "sw-005",
    width: 880,
    height: 880,
  },
  {
    src: "aw-001.png",
    outDir: "collections",
    outName: "aw-001",
    width: 880,
    height: 880,
  },
  {
    src: "aw-002.png",
    outDir: "collections",
    outName: "aw-002",
    width: 880,
    height: 880,
  },
  {
    src: "aw-003.png",
    outDir: "collections",
    outName: "aw-003",
    width: 880,
    height: 880,
  },
  {
    src: "aw-004.png",
    outDir: "collections",
    outName: "aw-004",
    width: 880,
    height: 880,
  },
  {
    src: "aw-005.png",
    outDir: "collections",
    outName: "aw-005",
    width: 880,
    height: 880,
  },
  {
    src: "aw-006.png",
    outDir: "collections",
    outName: "aw-006",
    width: 880,
    height: 880,
  },
  {
    src: "rc-001.png",
    outDir: "collections",
    outName: "rc-001",
    width: 880,
    height: 880,
  },
  {
    src: "rc-002.png",
    outDir: "collections",
    outName: "rc-002",
    width: 880,
    height: 880,
  },
  {
    src: "rc-003.png",
    outDir: "collections",
    outName: "rc-003",
    width: 880,
    height: 880,
  },
  {
    src: "rc-004.png",
    outDir: "collections",
    outName: "rc-004",
    width: 880,
    height: 880,
  },
  {
    src: "rc-005.png",
    outDir: "collections",
    outName: "rc-005",
    width: 880,
    height: 880,
  },
  {
    src: "rc-006.png",
    outDir: "collections",
    outName: "rc-006",
    width: 880,
    height: 880,
  },
  {
    src: "dm-001.png",
    outDir: "collections",
    outName: "dm-001",
    width: 880,
    height: 880,
  },
  {
    src: "dm-002.png",
    outDir: "collections",
    outName: "dm-002",
    width: 880,
    height: 880,
  },
  {
    src: "dm-003.png",
    outDir: "collections",
    outName: "dm-003",
    width: 880,
    height: 880,
  },
  {
    src: "dm-004.png",
    outDir: "collections",
    outName: "dm-004",
    width: 880,
    height: 880,
  },
  {
    src: "dm-005.png",
    outDir: "collections",
    outName: "dm-005",
    width: 880,
    height: 880,
  },

  // ─── JOURNAL ───
  {
    src: "journel hero.png",
    outDir: "journal",
    outName: "hero",
    width: 1440,
    height: 540,
  },
  {
    src: "featured-article.jpeg",
    outDir: "journal",
    outName: "featured-article",
    width: 896,
    height: 630,
  },
  {
    src: "article-acoustics.jpeg",
    outDir: "journal",
    outName: "article-acoustics",
    width: 772,
    height: 913,
  },
  {
    src: "article-expo-review.jpeg",
    outDir: "journal",
    outName: "article-expo-review",
    width: 772,
    height: 913,
  },
  {
    src: "article-wool-guide.jpeg",
    outDir: "journal",
    outName: "article-wool-guide",
    width: 772,
    height: 913,
  },
];

async function convert() {
  // Create output directories
  const dirs = [...new Set(IMAGE_MAP.map((i) => i.outDir))];
  for (const dir of dirs) {
    await mkdir(join(OUT_BASE, dir), { recursive: true });
  }

  let totalSrcKB = 0;
  let totalOutKB = 0;
  let success = 0;
  let failed = 0;

  for (const item of IMAGE_MAP) {
    const srcPath = join(SRC_DIR, item.src);
    const outPath = join(OUT_BASE, item.outDir, `${item.outName}.webp`);

    try {
      const img = sharp(srcPath);
      const meta = await img.metadata();
      const srcSizeKB = Math.round(meta.size / 1024);
      totalSrcKB += srcSizeKB;

      const result = await img
        .resize(item.width, item.height, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: 82 })
        .toFile(outPath);

      const outSizeKB = Math.round(result.size / 1024);
      totalOutKB += outSizeKB;
      success++;

      const ratio = ((1 - result.size / meta.size) * 100).toFixed(1);
      console.log(
        `✓ ${item.outDir}/${item.outName}.webp  ${meta.width}x${meta.height} → ${item.width}x${item.height}  ${srcSizeKB}KB → ${outSizeKB}KB  (-${ratio}%)`
      );
    } catch (err) {
      failed++;
      console.error(`✗ FAILED: ${item.src} → ${err.message}`);
    }
  }

  console.log(`\n━━━ SUMMARY ━━━`);
  console.log(`Success: ${success} / ${IMAGE_MAP.length}`);
  console.log(`Failed: ${failed}`);
  console.log(
    `Total: ${(totalSrcKB / 1024).toFixed(1)}MB → ${(totalOutKB / 1024).toFixed(1)}MB  (-${((1 - totalOutKB / totalSrcKB) * 100).toFixed(1)}%)`
  );
}

convert();
