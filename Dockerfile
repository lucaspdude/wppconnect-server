FROM node:lts-alpine3.18

WORKDIR /usr/src/wpp-server
# ENV NODE_ENV=production 
RUN npm i -g pnpm
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY package.json ./
RUN apk update && \
    apk add --no-cache \
    vips-dev \
    fftw-dev \
    gcc \
    g++ \
    make \
    libc6-compat \
    && rm -rf /var/cache/apk/*
RUN pnpm install && \
    pnpm install sharp

# Build
COPY package.json  ./
RUN pnpm install
COPY . .
RUN pnpm run build


# Deps
WORKDIR /usr/src/wpp-server/
RUN apk add --no-cache chromium
COPY . .
EXPOSE 21465
ENTRYPOINT ["node", "dist/server.js"]
