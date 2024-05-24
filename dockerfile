# Use a base image with Node.js installed
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight base image for the production build
FROM nginx:alpine

# Copy the built React app from the previous stage to the nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (not required for production, but useful for testing locally)
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
