# Use Node.js Alpine for a smaller image
FROM node:20-alpine

# Set working directory
WORKDIR /NEST-TODO-APP

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies with NPM
RUN npm install 

# Copy all source files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]