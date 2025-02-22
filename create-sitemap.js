import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/team', changefreq: 'monthly', priority: 0.8 },
  { url: '/destinations', changefreq: 'weekly', priority: 0.7 },
  { url: '/contacts', changefreq: 'monthly', priority: 0.8 },
  { url: '/insurance', changefreq: 'monthly', priority: 0.7 },
  { url: '/news', changefreq: 'weekly', priority: 0.7 },
  { url: '/news/main-news', changefreq: 'weekly', priority: 0.8 },
  { url: '/news/1', changefreq: 'weekly', priority: 0.7 },
  { url: '/news/2', changefreq: 'weekly', priority: 0.7 },
  { url: '/news/3', changefreq: 'weekly', priority: 0.7 },
  { url: '/news/4', changefreq: 'weekly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://destxpert.travel' });
const writeStream = createWriteStream('./public/sitemap.xml');

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap создан в ./public/sitemap.xml'))
  .catch((err) => console.error('❌ Ошибка при создании sitemap:', err));

sitemap.pipe(writeStream);
