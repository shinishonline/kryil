import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, 'src', 'assets');

// Images to convert
const imagesToConvert = [
  'b1_optimized.jpg',
  'b2_optimized.jpg',
  'b3_optimized.jpg',
  'b4_optimized.jpg',
  'b1.jpg',
  'b2.jpg',
  'b3.jpg'
];

async function convertToWebP() {
  console.log('Starting WebP conversion...\n');

  for (const imageName of imagesToConvert) {
    const inputPath = join(assetsDir, imageName);
    const outputPath = join(assetsDir, imageName.replace(/\.(jpg|jpeg)$/i, '.webp'));

    try {
      const stats = statSync(inputPath);
      const inputSize = (stats.size / 1024).toFixed(2);

      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const outputStats = statSync(outputPath);
      const outputSize = (outputStats.size / 1024).toFixed(2);
      const savings = ((stats.size - outputStats.size) / 1024).toFixed(2);
      const savingsPercent = (((stats.size - outputStats.size) / stats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   Original: ${inputSize} KiB → WebP: ${outputSize} KiB`);
      console.log(`   Saved: ${savings} KiB (${savingsPercent}%)\n`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠️  ${imageName} not found, skipping...\n`);
      } else {
        console.error(`❌ Error converting ${imageName}:`, error.message, '\n');
      }
    }
  }

  console.log('WebP conversion complete!');
}

convertToWebP().catch(console.error);
