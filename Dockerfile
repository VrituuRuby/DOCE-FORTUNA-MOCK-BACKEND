FROM node:20

WORKDIR /usr/src/app

COPY dist/bundle.min.cjs ./

CMD [ "node" , "bundle.min.cjs"]
