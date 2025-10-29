# Stage 1: Build TypeScript
FROM node:25-alpine3.21 AS builder
WORKDIR /build

# Copy package files first
COPY package*.json .  

# Use cache mount and npm ci
RUN npm ci

# Copy source and build
COPY tsconfig.json .
COPY src/ src/
RUN npm run build

# Stage 2: Run compiled JavaScript
FROM node:25-alpine3.21 AS runner
WORKDIR /app

COPY --from=builder /build/package*.json .  
COPY --from=builder /build/node_modules ./node_modules/
COPY --from=builder /build/dist ./dist/

CMD ["npm", "start"]