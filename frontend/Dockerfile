# Use an official node image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use an official nginx image to serve the React app
FROM nginx:alpine

# Copy the custom Nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]