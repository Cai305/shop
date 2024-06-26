FROM strapi/base

WORKDIR /strapi-app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV staging

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
