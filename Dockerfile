FROM node:12.22.1-alpine3.11

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "/app/index.js"]