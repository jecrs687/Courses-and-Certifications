
#to create a docker file using this project
docker run -dp 3000:3000 \
     -w /app -v "$(pwd):/app" \
     node:12-alpine \
     sh -c "yarn add npm && npm install && npm run start"