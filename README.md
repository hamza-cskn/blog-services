<p align="center">
  <img style="width: 200px" src="https://github.com/hamza-cskn/blog-services/blob/main/frontend/static/favicon.png" alt="logo of website"/>
</p>

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
13. [x] Postman collection for the API

![architecture](https://github.com/hamza-cskn/blog-services/assets/36128276/4cea2caf-b1ac-4e31-9945-066241fe9ae5)

### How to run
1. Clone the repository: `git clone git@github.com:hamza-cskn/blog-services.git`
2. Go the repository directory: `cd blog-services`
3. Build the docker images: `docker compose build`
4. Configure the `docker-compose.yml` and other configuration files as you want.
5. Run the docker containers: `docker compose up -d`
6. Visit [`https://localhost`](https://localhost) to see the front-end.

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

## Screenshots
<details>
  <summary>Click to expand</summary>
  <img width="1362" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/da9d3dc3-95c4-48d2-a64b-37b8b3e01ef8">
  <img width="1352" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/36b7bcce-c87e-46f7-b767-ea5758b0d571">
  <img width="1355" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/a08aa9eb-53ec-4411-be72-b7bfe1633740">
  <img width="1349" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/dd1f5929-da5f-483d-b3ee-fe8668450267">
  <img width="1357" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/a991dc20-ad24-44ac-a1f9-9a7b4a5ea08c">
  <img width="1359" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/72498d25-8edb-4801-bcbc-59fcbdd0c972">
  <img width="1370" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/8a045675-5ddc-4f16-8e19-d47095dde05d">
  <img width="1369" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/b3296b4f-c21f-4141-8829-675095955864">
  <img width="1357" alt="image" src="https://github.com/hamza-cskn/blog-services/assets/36128276/9b2c72de-256b-4dda-88e2-e4387ef15832">
</details>

