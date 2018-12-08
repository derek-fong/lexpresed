FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD [ "NODE_ENV=production", "npm", "run", "build" ]
CMD [ "npm", "start" ]
