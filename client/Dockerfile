# Stage 1

# pull official base image
FROM node:lts-buster as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod 

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/client /usr/share/nginx/html


