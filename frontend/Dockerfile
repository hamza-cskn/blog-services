FROM node:alpine as build

WORKDIR /usr/app
COPY . .
RUN rm -rf node_modules
RUN npm install --force
RUN npm run build

FROM node:alpine as production
WORKDIR /usr/app
COPY package*.json /usr/app/
COPY --from=build /usr/app/build /usr/app/build
CMD ["node", "build"]