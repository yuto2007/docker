FROM nginx
EXPOSE 80 443
WORKDIR /etx/nginx
RUN mkdir ssl
COPY ./nginx.conf ./conf.d/
COPY ../ssl ./ssl

