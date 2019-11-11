FROM node:12.12.0-alpine

RUN apk update && \
mkdir /app

COPY . /app

EXPOSE 8080

CMD node /app/app.js