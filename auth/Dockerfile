FROM node:alpine As build

WORKDIR /usr/app
COPY . .
RUN npm install && npm run build

FROM node:alpine as production

WORKDIR /usr/app
COPY package*.json .
RUN npm install --only=production
COPY --from=build /usr/app/dist ./dist
CMD ["node", "dist/main"]