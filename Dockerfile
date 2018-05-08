FROM node:latest

# Override log level
ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure serve
RUN npm install -g serve
CMD serve -s build

COPY package.json package.json
RUN npm install
COPY . .

RUN npm run build --production

CMD serve -s build

EXPOSE 8045
