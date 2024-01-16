FROM node:alpine

WORKDIR /var/app

COPY ./package.json ./

RUN npm install

EXPOSE 4000

COPY . .

CMD [ "npm","start" ]


