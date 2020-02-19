FROM node:13.6.0-alpine3.11 AS base
WORKDIR /app
COPY ./package* /app/
RUN apk add --no-cache python make g++
RUN npm ci

FROM base AS app-build
WORKDIR /app
COPY . /app
RUN npm run build

FROM nginx:1.17.8-alpine-perl
COPY --from=app-build /app/build /data/www
COPY ./nginx.conf /etc/nginx/nginx.conf
