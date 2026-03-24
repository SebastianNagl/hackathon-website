# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy all source files first to satisfy postinstall script
COPY . .

# Set PUBLIC_URL conditionally based on deployment target
# For root domain (legallovestech.de): no PUBLIC_URL needed
# For subdirectory (ltvm3.cit.tum.de/legallovestech/): uncomment line below
# ENV PUBLIC_URL=/legallovestech

# Install all dependencies (postinstall will run but files are now available)
RUN npm ci

# Build is already done by postinstall, but run again to be safe
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built app from build stage
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./

EXPOSE 3000

# Start the app using serve
CMD ["serve", "-s", "build", "-l", "3000"] 