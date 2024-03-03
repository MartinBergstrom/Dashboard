FROM node:18

WORKDIR /server

COPY package.json /server
RUN npm i

COPY . /server

EXPOSE 5000

RUN npm rebuild bcrypt --build-from-source

CMD ["npm", "run", "dev"]
