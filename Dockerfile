# Use Node.js v20.18.1 (official image)
FROM node:20.18.1

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 3000

# Default command (can be overridden by docker-compose)
CMD ["npm", "start"]
