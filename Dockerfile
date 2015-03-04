FROM node:latest

RUN apt-get update && apt-get install -y git vim-tiny

RUN npm install -g grunt-cli bower \
&& npm install -g phantomjs n_ \
&& npm cache clear

WORKDIR /opt
RUN git clone https://github.com/redpelicans/website.git \
&& cd website \
&& npm install \
&& bower --force-latest --allow-root install \
&& grunt dist

EXPOSE 80
WORKDIR /opt/website 
ENV NODE_ENV production
ENV PORT 80
ENV DEBUG main:*
CMD node server
