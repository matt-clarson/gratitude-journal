FROM node:13.6.0-alpine3.11 AS app-build
WORKDIR /app
COPY . /app
RUN apk add --no-cache python make g++
RUN npm ci
RUN npm run build

FROM httpd:2.4.41-alpine
COPY --from=app-build /app/build /usr/local/apache2/htdocs
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
