import sharp from 'sharp';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fbf9f5"/>

  <text x="85" y="320" font-family="Space Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif" font-size="180" font-weight="700" fill="#1b1c1a" letter-spacing="-4">FC Lab</text>

  <rect x="85" y="360" width="140" height="5" fill="#00d4ff"/>

  <text x="85" y="430" font-family="Space Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif" font-size="44" font-weight="500" fill="#1b1c1a">Le lab IA · Fabien Canu</text>

  <text x="85" y="495" font-family="Space Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="#6e7880">25 ans de code · 20 produits IA · terrain d'essai</text>

  <rect x="1040" y="95" width="75" height="75" fill="#00d4ff"/>
  <rect x="960" y="160" width="50" height="50" fill="#ff7e67"/>
  <rect x="1105" y="195" width="30" height="30" fill="#fbbc00"/>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile('/tmp/og-preview.png');

console.log('ok');
