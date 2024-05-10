FROM node:22-bookworm-slim

WORKDIR /project

RUN npm install -g @angular/cli

COPY package.json package-lock.json ./
RUN npm install
COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]