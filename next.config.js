/** @type {import('next').NextConfig} */
const nextConfig = { 
    distDir: 'dist',
    images: 
    { 
        remotePatterns: 
        [ 
            { 
                protocol: 'https', 
                hostname: '**' 
            }, { 
                protocol: 'http', 
                hostname: '**' 
            }
        ] 
    }, 
    experimental: 
    { 
        serverActions: 
        { 
            bodySizeLimit: '2mb' } 
        } 
    };
module.exports = nextConfig;
