const fs = require('fs');
const path = require('path');

const files = [
  'src/components/home/FeatureSection.module.css',
  'src/components/home/OfferingsSection.module.css',
  'src/components/home/ProcessSection.module.css',
  'src/components/home/NewsletterSection.module.css',
  'src/components/home/HeroSection.module.css',
  'src/app/about/about.module.css',
  'src/app/contact/contact.module.css',
  'src/app/journal/journal.module.css',
  'src/app/services/services.module.css',
  'src/app/shop/shop.module.css',
  'src/app/legal.module.css'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // In home sections, standardize section padding
  if (file.includes('components/home')) {
    // Replace padding: var(--space-xl) var(--space-sm);
    // and padding: var(--space-2xl) var(--space-sm);
    // with padding: var(--space-lg) var(--space-sm);
    content = content.replace(/padding:\s*var\(--space-(?:xl|2xl)\)\s*var\(--space-sm\);/g, 'padding: var(--space-lg) var(--space-sm);');
    
    // Replace padding: var(--space-xl) var(--space-md);
    // and padding: var(--space-2xl) var(--space-md);
    // with padding: var(--space-xl) var(--space-md); -> Wait, it's already xl. Let's make it space-lg for consistency?
    // Let's keep desktop as var(--space-xl) but ensure it's not 2xl.
    content = content.replace(/padding:\s*var\(--space-2xl\)\s*var\(--space-md\);/g, 'padding: var(--space-xl) var(--space-md);');
  }

  // In subpages, reduce the massive .hero padding/margins
  if (file.includes('src/app/')) {
    // Desktop .hero
    // margin-bottom: var(--space-xl);
    // padding-bottom: var(--space-xl);
    content = content.replace(/margin-bottom:\s*var\(--space-xl\);/g, 'margin-bottom: var(--space-lg);');
    content = content.replace(/padding-bottom:\s*var\(--space-xl\);/g, 'padding-bottom: var(--space-lg);');
    
    // Mobile .hero is 32px, which is fine.

    // Desktop .label margin-bottom
    content = content.replace(/margin-bottom:\s*var\(--space-md\);/g, 'margin-bottom: var(--space-sm);');
  }

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
