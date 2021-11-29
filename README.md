# Node.js Url Shortener

## Using

* [Express](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

## Configuration

Edit file ```src/config/default.ts``` with your MongoDB instance URI, base API Url and port.

## Quick Start

```bash
$ git clone git@github.com/alefiori/url-shortener.git
$ yarn
$ yarn dev
```

## Installation on production

```bash
$ git clone git@github.com/alefiori/url-shortener.git
$ yarn
$ yarn build
$ yarn start
```

# RESTful API

`POST /api/url/shorten` with form data `longUrl=http://google.com`

`GET /:code`

## Tests

To run the test suite, first install the dependencies, then run `yarn test`:

```bash
$ yarn
$ yarn test
```
