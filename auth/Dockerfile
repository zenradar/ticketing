FROM node:alpine

WORDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
