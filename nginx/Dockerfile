FROM nginx
EXPOSE 80 443
WORKDIR /etc/nginx
RUN mkdir ssl &&\
    apt update -y &&\
    apt install openssl -y &&\
    cd ssl &&\
    openssl req\
        -new\
        -days 365\
        -x509\
        -subj "/CN=owarilab.net"\
        -addext "subjectAltName = DNS:localhost, IP:127.0.0.1,DNS:owarilab.net"\
        -newkey rsa:2048\
        -keyout privkey.pem\
        -noenc\
        -out cert.pem &&\
    chown root:root privkey.pem cert.pem &&\
    chmod 444 cert.pem &&\
    chmod 400 privkey.pem
COPY ./nginx.conf ./conf.d/

