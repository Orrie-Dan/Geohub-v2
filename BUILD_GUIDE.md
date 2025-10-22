# GeoHub Build Guide

This comprehensive guide will walk you through building, testing, and deploying the GeoHub application.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Building for Production](#building-for-production)
4. [Testing the Build](#testing-the-build)
5. [Deployment Options](#deployment-options)
6. [Environment Configuration](#environment-configuration)
7. [Troubleshooting](#troubleshooting)
8. [Performance Optimization](#performance-optimization)

## Prerequisites

### System Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or pnpm/yarn)
- **Git**: Latest version
- **Operating System**: Windows 10+, macOS 10.15+, or Linux

### Recommended Tools

- **VS Code**: With TypeScript and Tailwind CSS extensions
- **Git**: For version control
- **Docker**: For containerized deployment (optional)

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/geohub.git
cd geohub
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using pnpm (recommended for better performance)
npm install -g pnpm
pnpm install

# Using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

### 4. Verify Installation

- Open your browser and navigate to `http://localhost:3000`
- Check that all category pages load correctly
- Verify that animations and styling work properly
- Test responsive design on different screen sizes

## Building for Production

### 1. Pre-Build Checks

Before building, ensure your code is ready:

```bash
# Run linting
npm run lint

# Check for TypeScript errors (optional - build ignores them)
npx tsc --noEmit
```

### 2. Build the Application

```bash
# Using npm
npm run build

# Using pnpm
pnpm build

# Using yarn
yarn build
```

### 3. Build Output

The build process will:
- Compile TypeScript to JavaScript
- Optimize CSS with Tailwind CSS
- Generate static assets
- Create optimized bundles
- Output files to `.next/` directory

### 4. Verify Build

```bash
# Start production server
npm run start

# Or using pnpm
pnpm start
```

Visit `http://localhost:3000` to verify the production build works correctly.

## Testing the Build

### 1. Local Testing

```bash
# Build the application
npm run build

# Start production server
npm run start

# Test in browser
open http://localhost:3000
```

### 2. Static Export Testing (Optional)

If you need a static export:

1. **Modify `next.config.mjs`:**
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
```

2. **Build static export:**
```bash
npm run build
```

3. **Test static files:**
```bash
# Serve the out directory
npx serve out
```

## Deployment Options

### 1. Vercel (Recommended)

**Advantages:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Built-in analytics
- Easy environment variable management

**Steps:**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Deploy automatically

**Vercel Configuration (`vercel.json`):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 2. Netlify

**Steps:**
1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `out` (for static export) or `.next` (for SSR)
3. Deploy

**Netlify Configuration (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

### 3. Docker Deployment

**Create `Dockerfile`:**
```dockerfile
# Use Node.js 18 Alpine image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Build and run Docker container:**
```bash
# Build the image
docker build -t geohub .

# Run the container
docker run -p 3000:3000 geohub
```

### 4. Traditional VPS/Server Deployment

**Steps:**
1. Set up a server with Node.js 18+
2. Clone your repository
3. Install dependencies: `npm install`
4. Build the application: `npm run build`
5. Use PM2 for process management:

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "geohub" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

## Environment Configuration

### 1. Environment Variables

Create `.env.local` for local development:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_DEBUG=false
```

### 2. Production Environment

For production deployments, set these environment variables in your hosting platform:

- `NODE_ENV=production`
- `NEXT_PUBLIC_API_URL=your_production_api_url`
- `NEXT_PUBLIC_MAP_API_KEY=your_production_map_key`

## Troubleshooting

### Common Build Issues

**1. Memory Issues During Build**
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**2. TypeScript Errors**
- The project is configured to ignore TypeScript build errors
- Check `next.config.mjs` for `typescript: { ignoreBuildErrors: true }`
- Fix TypeScript errors manually if needed

**3. Image Loading Issues**
- Images are configured as unoptimized
- Ensure all images are in the `public/` directory
- Check image paths in your components

**4. Styling Issues**
- Verify Tailwind CSS configuration
- Check `tailwind.config.ts` content paths
- Ensure PostCSS is properly configured

**5. Port Already in Use**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or find and kill the process
lsof -ti:3000 | xargs kill -9
```

### Build Performance Issues

**1. Slow Build Times**
- Use pnpm instead of npm for faster installs
- Consider using `--turbo` flag with Next.js
- Optimize your images before adding them

**2. Large Bundle Size**
- Use dynamic imports for large components
- Implement code splitting
- Remove unused dependencies

## Performance Optimization

### 1. Image Optimization

```bash
# Install image optimization tools
npm install --save-dev imagemin imagemin-webp

# Optimize images before adding to public/
npx imagemin public/images/* --out-dir=public/images/optimized
```

### 2. Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to package.json scripts
"analyze": "ANALYZE=true npm run build"
```

### 3. Code Splitting

Implement dynamic imports for category pages:

```typescript
import dynamic from 'next/dynamic'

const CategoryPage = dynamic(() => import('./category-page'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})
```

### 4. Caching Strategy

Configure caching headers in `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Monitoring and Maintenance

### 1. Health Checks

Create a health check endpoint:

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
```

### 2. Error Monitoring

Consider integrating error monitoring:

```bash
npm install @sentry/nextjs
```

### 3. Performance Monitoring

Use Next.js built-in analytics or integrate with tools like:
- Vercel Analytics
- Google Analytics
- Hotjar

## Security Considerations

### 1. Environment Variables
- Never commit `.env.local` to version control
- Use secure environment variable management in production
- Rotate API keys regularly

### 2. Dependencies
- Keep dependencies updated
- Use `npm audit` to check for vulnerabilities
- Consider using `npm audit fix` for automatic fixes

### 3. Content Security Policy
- Implement CSP headers
- Validate all user inputs
- Use HTTPS in production

## Conclusion

This build guide provides comprehensive instructions for building, testing, and deploying the GeoHub application. Follow the steps carefully and refer to the troubleshooting section if you encounter any issues.

For additional support, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

