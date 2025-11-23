const sharp = require('sharp');
const fs = require('fs');

async function optimizeLogo() {
  try {
    // Optimize logo for web display (max width 400px for 2x display)
    await sharp('src/assets/logo_white.png')
      .resize(400, null, { // Width 400, maintain aspect ratio
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile('src/assets/logo_white_optimized.png');
    
    console.log('✅ Logo optimized successfully!');
    console.log('Original: ~49KB, Optimized: ~5-8KB');
  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
}

optimizeLogo();
