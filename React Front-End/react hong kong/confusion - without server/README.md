docker run -d -t -p 3000:3000 -p 3001:3001 \
     -w /app -v "$(pwd):/app" \
     react \
     sh -c "npm install && npm run start"