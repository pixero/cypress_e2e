FROM cypress/included:8.2.0

WORKDIR /app

COPY package*.json ./

COPY ./cypress ./cypress

COPY ./cypress.json ./cypress.json

RUN npm test
