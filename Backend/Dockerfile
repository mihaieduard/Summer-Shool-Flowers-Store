FROM node:16-alpine3.14

ENV module 0
ENV topic "controllers"

# USER node 

WORKDIR /usr/src/app

COPY . .

RUN  npm i -g @nestjs/cli

ADD . .

# RUN nest build
CMD [ "sleep", "infinity"] 

EXPOSE 3000
