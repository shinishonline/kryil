import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

async function optimizeImages() {
  const imagesToOptimize = [
    { input: 'src/assets/b1.jpg', output: 'src/assets/b1_optimized.jpg', width: 1920, quality: 85 },
    { input: 'src/assets/b2.jpg', output: 'src/assets/b2_optimized.jpg', width: 1920, quality: 85 },
    { input: 'src/assets/b3.jpg', output: 'src/assets/b3_optimized.jpg', width: 1920, quality: 85 },
    { input: 'src/assets/b4.png', output: 'src/assets/b4_optimized.jpg', width: 1920, quality: 85, convertToJpg: true },
    { input: 'src/assets/a8.png', output: 'src/assets/a8_optimized.png', width: 800, quality: 90 },
  ];

  for (const img of imagesToOptimize) {
    try {
      const processor = sharp(img.input).resize(img.width, null, {
        fit: 'inside',
        withoutEnlargement: true
      });

      let outputPromise;
      if (img.convertToJpg) {
        outputPromise = processor
          .jpeg({ quality: img.quality, progressive: true })
          .toFile(img.output);
      } else if (img.output.endsWith('.jpg')) {
        outputPromise = processor
          .jpeg({ quality: img.quality, progressive: true })
          .toFile(img.output);
      } else {
        outputPromise = processor
          .png({ quality: img.quality, compressionLevel: 9 })
          .toFile(img.output);
      }

      const info = await outputPromise;
      console.log(`✓ ${img.input} → ${img.output} (${Math.round(info.size / 1024)}KB)`);
    } catch (error) {
      console.error(`✗ Error optimizing ${img.input}:`, error.message);
    }
  }

  console.log('\nOptimization complete!');
}

optimizeImages();
