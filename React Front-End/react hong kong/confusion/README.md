docker run -dpt 3000:3000 \
     -w /app -v "$(pwd):/app" \
     react \
     sh -c "npm install && npm run start"