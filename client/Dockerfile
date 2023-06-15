FROM node:18-alpine
WORKDIR /client
RUN apk update && apk add bash && apk add nginx
COPY ./package*.json ./
RUN npm install
COPY . .
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN npm run build
EXPOSE 3000