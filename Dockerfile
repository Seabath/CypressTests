FROM cypress/included:6.2.1

RUN mkdir -p /opt

WORKDIR /opt
COPY package.json .
COPY cypress.json .
COPY tsconfig.json .

RUN npm install -y

COPY cypress cypress


COPY entrypoint.sh .
ENTRYPOINT ["bash", "entrypoint.sh"]