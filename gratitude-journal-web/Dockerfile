FROM node:13.6.0-alpine3.11 AS base
WORKDIR /app
COPY ./package* /app/
RUN apk add --no-cache python make g++
RUN npm ci

FROM base AS app-build
WORKDIR /app
COPY . /app
RUN npm run build

FROM node:13.6.0-alpine3.11
COPY --from=app-build /app/build /var/www/site
ENV STATIC_DIR=/var/www/site
WORKDIR /server
COPY ./server /server
RUN npm ci --only-production
CMD ["node", "index.js"]