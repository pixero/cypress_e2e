FROM node:10-alpine

RUN mkdir -p /home/cypress_e2e/node_modules && chown -R node:node /home/cypress_e2e/cypress

WORKDIR /home/cypress_e2e

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "npm", "test" ]
