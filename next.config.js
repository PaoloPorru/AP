/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // <-- genera sito statico
  distDir: 'dist',         // opzionale, se vuoi mantenere la cartella dist
  images: { 
    remotePatterns: [ 
      { protocol: 'https', hostname: '**' }, 
      { protocol: 'http', hostname: '**' } 
    ] 
  },
  experimental: { 
    serverActions: { bodySizeLimit: '2mb' } 
  }
};

module.exports = nextConfig;
