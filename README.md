# covidsn.com

> &lt;template&gt;

## Getting started
 
:point_right: We recommend to have this tools installed to run the project.

You need to have installed:


- [nodejs](https://nodejs.org): Node.js
- [redis](https://redis.io/): Redis


To start the project, you nedd to run this commands:

``` bash

# Run redis
redis-cli

```

### Set the config for redis

```json
"set" "localhost:3221" "{\"id\":\"covidsn\",\"cdn_url\":\"https://directus.medteck.xyz\",\"api_credentials\":{\"url\":\"https://directus.medteck.xyz\",\"project\":\"covidsn\",\"token\":\"r4kgbU67Zs72WfVF9PzB6li9\"}}"

```


Then !

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
