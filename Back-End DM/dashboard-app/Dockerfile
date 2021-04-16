FROM node:lts-alpine3.13

COPY . .

RUN ["npm", "install", "-g", "serve"]

ENTRYPOINT ["serve", "-s", "build"]