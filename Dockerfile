
FROM node:latest as build-step
ENV NODE_ENV=production

# Copy Source Code
RUN mkdir /app
WORKDIR /app
COPY . .

# Install the Dependencies
RUN npm install --production

# Build the App
RUN npm run build --production

#Setup NginX
FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build-step /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]


