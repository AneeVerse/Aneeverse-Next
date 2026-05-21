import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const inputPath = path.join(root, 'public', 'images', 'Artboard 7@2x.png');

async function generateFavicon() {
  // Trim whitespace from original logo to make it as big as possible
  const trimmed = await sharp(inputPath)
    .trim()
    .toBuffer();

  const meta = await sharp(trimmed).metadata();
  console.log(`Trimmed logo bounds: ${meta.width}x${meta.height}`);

  // Create a square icon with transparent background, keeping the original logo color (teal)
  // Let the logo fill 95% of the square for maximum size and visibility in browser tabs
  const targetSize = 512;
  const logoSize = Math.round(targetSize * 0.95);

  const resizedLogo = await sharp(trimmed)
    .resize(logoSize, logoSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const finalIcon = await sharp({
    create: {
      width: targetSize,
      height: targetSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 } // transparent
    }
  })
    .composite([{
      input: resizedLogo,
      gravity: 'centre'
    }])
    .png()
    .toFile(path.join(root, 'src', 'app', 'icon.png'));

  console.log('Generated src/app/icon.png (transparent, max size)');
}

generateFavicon().catch(console.error);
