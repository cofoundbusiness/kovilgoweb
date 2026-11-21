import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const pairs = [
  {
    name: 'Primary Logo (Yellow on Black)',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_Primary_Logo_YellowOnBlack_2048x1024.png',
    dest: 'C:/kovilgo web/public/brand/logos/kovilgo-primary-yellow-on-black.png',
    type: 'png',
  },
  {
    name: 'Website Transparent Wordmark',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_Website_Logo_Transparent_2048x758.png',
    dest: 'C:/kovilgo web/public/brand/logos/kovilgo-wordmark-transparent.png',
    type: 'png',
  },
  {
    name: 'Official App Icon',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_App_Icon_1024x1024.png',
    dest: 'C:/kovilgo web/public/brand/app-icons/kovilgo-app-icon.png',
    type: 'png',
  },
  {
    name: 'Instagram Circular Logo',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_Instagram_Circular_Logo_1024x1024.png',
    dest: 'C:/kovilgo web/public/brand/social/kovilgo-instagram-circular.png',
    type: 'png',
  },
  {
    name: 'Instagram Square Logo',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_Instagram_Square_Logo_1080x1080.png',
    dest: 'C:/kovilgo web/public/brand/social/kovilgo-instagram-square.png',
    type: 'png',
  },
  {
    name: 'Brand Guidelines Document',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_Brand_Guidelines.pdf',
    dest: 'C:/kovilgo web/public/brand/guidelines/kovilgo-brand-guidelines.pdf',
    type: 'pdf',
  },
  {
    name: 'Official Brand Sheet',
    src: 'C:/KovilGo/BrandKIt/files/KovilGo_Brand_Sheet.png',
    dest: 'C:/kovilgo web/public/brand/guidelines/kovilgo-brand-sheet.png',
    type: 'png',
  },
];

console.log('--- Verifying KovilGo Official Brand Assets ---');
let allOk = true;

for (const p of pairs) {
  if (!fs.existsSync(p.dest)) {
    console.error(`[FAIL] Missing destination file: ${p.dest}`);
    allOk = false;
    continue;
  }

  const srcBuf = fs.readFileSync(p.src);
  const destBuf = fs.readFileSync(p.dest);

  const srcHash = crypto.createHash('sha256').update(srcBuf).digest('hex');
  const destHash = crypto.createHash('sha256').update(destBuf).digest('hex');

  if (srcHash !== destHash) {
    console.error(`[FAIL] Checksum mismatch for ${p.dest}`);
    allOk = false;
    continue;
  }

  if (p.type === 'png') {
    const isPng = destBuf[0] === 0x89 && destBuf[1] === 0x50 && destBuf[2] === 0x4E && destBuf[3] === 0x47;
    if (!isPng) {
      console.error(`[FAIL] Invalid PNG header for ${p.dest}`);
      allOk = false;
      continue;
    }
  } else if (p.type === 'pdf') {
    const isPdf = destBuf.subarray(0, 5).toString('utf-8') === '%PDF-';
    if (!isPdf) {
      console.error(`[FAIL] Invalid PDF header for ${p.dest}`);
      allOk = false;
      continue;
    }
  }

  console.log(`[PASS] ${p.name}`);
  console.log(`       Path: ${p.dest}`);
  console.log(`       Size: ${destBuf.length.toLocaleString()} bytes`);
  console.log(`       SHA-256: ${destHash}`);
}

if (!allOk) {
  console.error('\nVerification failed for one or more files.');
  process.exit(1);
} else {
  console.log('\nAll 7 official brand assets successfully verified with 100% byte integrity!');
}
