import sharp from 'sharp';

async function optimizeLogo() {
  try {
    const info = await sharp('src/assets/logo_white.png')
      .resize(400, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile('src/assets/logo_white_optimized.png');
    
    console.log('Logo optimized successfully!');
    console.log('Output size:', info.size, 'bytes');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeLogo();
