FROM node:18.17.1

RUN mkdir /home/pp
WORKDIR /home/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY index.js index.js

CMD ["npm", "start"]
