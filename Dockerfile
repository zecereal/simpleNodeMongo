FROM node:9.10.0-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
