/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
    output: 'export',
    basePath: isGithubActions ? '/kreditrakyat1' : '',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
