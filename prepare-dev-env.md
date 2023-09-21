# Development Environment
To set up development environment which is highly sensitive for changes, run sh commands below (Prepared for MacOS and Linux). Your code changes will be processed instantly in this setup.

## Run MongoDB
```bash
docker run --rm -d -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 mongo
```

## Run Blog Service
```bash
PORT=2000 API_TOKEN=123456 MONGO_URI=mongodb://root:secret@localhost:27017/comment?authSource=admin npm run start:dev --prefix blog
```

## Run Comment Service
```bash
PORT=2001 API_TOKEN=123456 MONGO_URI=mongodb://root:secret@localhost:27017/comment?authSource=admin npm run start:dev --prefix comment
```

## Run Authentication Service
```bash
PORT=2002 API_TOKEN=123456 npm run start:dev --prefix auth
```

## Run Website
```bash
PORT=5173 API_TOKEN=123456 AUTH_SERVICE_URI=http://localhost:2002 COMMENT_SERVICE_URI=http://localhost:2001 BLOG_SERVICE_URI=http://localhost:2000 npm run dev --prefix frontend
```