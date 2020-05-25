FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 8081

# CMD npm run start でもいける
CMD [ "node", "server.js" ]
