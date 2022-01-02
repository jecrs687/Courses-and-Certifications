FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python3 g++ make npm
WORKDIR /app
RUN yarn install
RUN yarn --no-chache upgrade node@14.0.0 
RUN npm install react json-server
