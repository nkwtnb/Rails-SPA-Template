FROM node:16

RUN mkdir /frontend
WORKDIR /frontend
COPY ./frontend /frontend
RUN rm -rf /node_modules
RUN apt update \
    && npm install
EXPOSE 5173
CMD ["npm", "run", "vite", "--host"]