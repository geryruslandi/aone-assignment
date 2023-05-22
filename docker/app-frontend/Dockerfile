FROM node:18-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine AS runner

ENV NODE_ENV production
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactapp

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY .env ./

RUN yarn global add serve

USER reactapp

ARG PORT
ENV PORT ${PORT}
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL ${REACT_APP_BACKEND_URL}

EXPOSE ${PORT}

CMD [ "serve", "-s", "build" ]
