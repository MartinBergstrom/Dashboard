FROM node:17

WORKDIR /frontend

COPY package.json /frontend
RUN npm install

COPY . /frontend

EXPOSE 3000

CMD [ "npm", "start"]