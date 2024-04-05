FROM node:lts-alpine3.18
WORKDIR /server

# Setup
RUN npm i -g pnpm
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY package.json ./
COPY tsconfig.json ./

# Install
RUN pnpm install

# Build
COPY . .
RUN pnpm run build


# Deps
RUN apk add --no-cache chromium
COPY . .
EXPOSE 21465
ENTRYPOINT ["node", "dist/server.js"]
