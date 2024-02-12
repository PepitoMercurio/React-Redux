FROM node:docker

COPY . index.php

WORKDIR /

EXPOSE 3000