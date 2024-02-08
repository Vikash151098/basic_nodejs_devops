FROM node:20-alpine
WORKDIR /app
COPY package.json \index.js ./
RUN npm install -f
CMD [ "node" ,"index.js" ]
EXPOSE 4000
