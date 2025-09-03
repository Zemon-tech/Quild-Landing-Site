import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Explicitly allow common AI and research crawlers
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' }, // Common Crawl
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Yandex', allow: '/' },
      { userAgent: 'baiduspider', allow: '/' },
    ],
    sitemap: 'https://www.quild.in/sitemap.xml',
    host: 'https://www.quild.in',
  }
}
