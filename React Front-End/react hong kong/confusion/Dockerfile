FROM node:16-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python3 g++ make npm
WORKDIR /app
RUN npm install -g json-server typescript
RUN npm install -g create-react-app