#Disclaimer

This is a 1st test on trying on cypress.



#Installing

It's a node project so business as usual: `npm install`



#Running

There is only 1 script so far: `npm run cy:run`



#Dockerization

There is a [Dockerfile](Dockerfile) to build an image to run tests.\
To build it: `docker build . -t my-super-tag-name:1000.0.1-beta`

To run it: `docker run my-super-tag-name:1000.0.1-beta`