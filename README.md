# Disclaimer

This is a 1st test on trying on cypress.



# Installing

It's a node project so business as usual: `npm install`



# Running

To run tests, open your terminal and: `npm run cy:run`\
Or you can open the cypress window to watch the test executing itself: `npm run cy:open`



# Dockerization

There is a [Dockerfile](Dockerfile) to build an image to run tests.\
To build it: `docker build . -t my-super-tag-name:1000.0.1-beta`

To run it: `docker run my-super-tag-name:1000.0.1-beta`