# Use an official Node.js runtime as a parent image
FROM node:latest as build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY ./ .
RUN npm run build

# production environment
FROM nginx:latest
RUN mkdir /app
COPY --from=build /app/dist/starter-angular /app
COPY ./nginx.conf /etc/nginx/nginx.conf
