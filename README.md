# Disclaimer

This is a 1st test on trying on cypress.



# Installing

It's a node project so business as usual: `npm install` or you can use yarn `yarn install`



# Running

To run tests, open your terminal and: `npm run cy:run`, or for yarn fan: `yarn run cypress run`\
Or you can open the cypress window to watch the test executing itself: `npm run cy:open` or `yarn run cypress open`



# Dockerization

There is a [Dockerfile](Dockerfile) to build an image to run tests.\
To build it: `docker build . -t my-super-image-name:my-super-tag`

To run it: `docker run my-super-image-name:my-super-tag`