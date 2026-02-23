# ─── Build Stage ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

# Copy package manifest first for better layer caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build the static site
COPY . .
RUN npm run build

# ─── Runtime Stage ───────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# Serve the static Astro build output
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config to listen on port 5001 and support SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5001

CMD ["nginx", "-g", "daemon off;"]
