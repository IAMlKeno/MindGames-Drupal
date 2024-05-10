FROM node:17.0.1-bullseye-slim

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli
# RUN npm ci

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]