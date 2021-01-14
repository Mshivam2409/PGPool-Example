FROM node
RUN mkdir /server
WORKDIR /server
COPY ./** ./
RUN yarn install
RUN yarn run tsc
CMD [ "node","index.js" ]
