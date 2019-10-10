# base image
FROM node:12.7.0-alpine

# set working directory
WORKDIR /usr/src/app

# expose port
ENV PORT 8080

# Make port 80 available to the world outside this container
EXPOSE ${PORT}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install


# Copy local project to work directory
COPY . .


# build and start the project
RUN npm run build

CMD npm start