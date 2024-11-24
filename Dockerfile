# Use an official lightweight Node.js image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy all files from the current directory to the working directory
COPY . .

# Install a lightweight HTTP server globally
RUN npm install -g http-server

# Expose port 8080 to the host
EXPOSE 8080

# Start the HTTP server and serve files from the current directory
CMD ["http-server", "-p", "8080"]
