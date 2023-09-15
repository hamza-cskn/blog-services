## Blog Services

This repository contains 2 microservice to store blog contents and comments.

### Architecture
Here is the tech stack used in this project:
1. [x] Fully Dockerized, see `docker-compose.yml` for more details. <!-- todo -->
2. [x] Uses restful API.
3. [x] Uses API tokens for security.
4. [x] Uses MongoDB as database.
5. [x] Uses Nginx as reverse proxy, cache and for ssl verification.
6. [x] Scraps Nginx and MongoDB metrics via Prometheus.
7. [x] Uses Grafana to visualize metrics.
8. [x] Uses Jest for unit testing.
9. [x] Uses Svelte & TailwindCSS for frontend. [Visit Front-end Repository](https://github.com/hamza-cskn/personal-website)
10. [x] Uses SvelteKit for SSR.
11. [x] Uses GitHub Actions for CI/CD.
![arch](https://github.com/hamza-cskn/blog-services/assets/36128276/a4e18198-f62a-44b7-99cf-f76bedf049dd)


### Goals
1. [ ] Add error tracking and logging.
2. [ ] Add `docker compose build` support.
3. [ ] Postman collection for API.

### How to run
1. Clone the repository: `git clone git@github.com:hamza-cskn/blog-services.git`
2. Clone the `git clone git@github.com:hamza-cskn/personal-website.git`
3. Build the docker images.
4. Run the docker containers: `docker-compose up -d`
5. Visit `https://localhost` to see the front-end.
6. You can use API to create, update and delete blog posts and comments.

### API
Listing all blogs.
```http request
GET /api/v1/blogs/?limit=1&offset=1&plainText=true&showUnverified=true

showUnverified: true | false --- when true, shows unvisible blogs.
plainText: true | false      --- when true, shows blog contents without markdown formats.
offset: number               --- offset for pagination. skips first n blogs.
limit: number                --- limit for pagination. shows n blogs.
```
