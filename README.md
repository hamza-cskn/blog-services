## Blog Services

This repository contains microservices to store blogs, comments and render them. Measures various metrics and visualizes them. Aims of the repository is having testable, scalable, maintainable and fully Dockerized architecture.

### Architecture
Here is the tech stack used in this project:
1. [x] Fully Dockerized, see `docker-compose.yml` for more details. <!-- todo -->
2. [x] Uses Restful API.
3. [x] Uses API tokens for security.
4. [x] Uses MongoDB as database.
5. [x] Uses Nginx as reverse proxy, cache and for ssl verification.
6. [x] Scraps Nginx and MongoDB metrics via Prometheus.
7. [x] Uses Grafana to visualize metrics.
8. [x] Uses Jest for unit testing.
9. [x] Uses Svelte & TailwindCSS for frontend.
10. [x] Renders HTML pages on server-side using SvelteKit.
11. [x] Uses GitHub Actions for CI/CD.
12. [x] Add `docker compose build` support.

Note: The provided `docker-compose.yml` does not include MongoDB as scaled.
![arch](https://github.com/hamza-cskn/blog-services/assets/36128276/a4e18198-f62a-44b7-99cf-f76bedf049dd)


### Goals
1. [ ] Add error tracking and logging.
2. [ ] Postman collection for API.

### How to run
1. Clone the repository: `git clone git@github.com:hamza-cskn/blog-services.git`
2. Go the repository directory: `cd blog-services`
3. Build the docker images: `docker compose build`
4. Configure the `docker-compose.yml` and other configuration files as you want.
5. Run the docker containers: `docker compose up -d`
6. Visit `https://localhost` to see the front-end (nginx).

### How to test
1. Just run `npm run test --prefix <service-name>`. Enjoy.

### How to use API
1. Get API token from `docker-compose.yml` file.
   * **Frontend**, **Blog** and **Comment** services must have same API token.
   * So, each service can access each other using the token as key.
   * Tokens are passed as `Token` header in HTTP requests.
   * Tokens are stored in `API_TOKEN` environment variable.
2. Send HTTP request to **Blog** or **Comment** services with the token.
   * You can use `curl` or `Postman` to send HTTP requests.
   * API Documentation can be found below.

#### Postman Collection
The repository has ready-to-use Postman collection. Check `blog-app.postman_collection.json` file or visit the [documentation page](https://documenter.getpostman.com/view/24413595/2s9YC5zDD7).

If you know Turkish, feel free to read my [Rest API](https://medium.com/software-development-turkey/rest-api-nedir-standartları-nelerdir-ca1c7d7d0502) blog.
