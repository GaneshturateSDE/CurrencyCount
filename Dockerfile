# Use Node 22 Alpine base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build app (optional, for frontend apps)
# RUN npm run build

# Expose port (change if needed)
EXPOSE 5173

# Start app
CMD ["npm", "run","dev","--","--host"]
