# Build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM node:18-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/next.config.ts ./
COPY package*.json ./

RUN npm ci --only=production

RUN rm package*.json

EXPOSE 3000

CMD ["npm", "start"] 