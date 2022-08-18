# Back End Development and APIs Projects

## Timestamp Microservice

Build a full stack JavaScript app that is functionally similar to this: <br /><https://timestamp-microservice.freecodecamp.rocks>

**Note:** Time zones conversion is not a purpose of this project, so assume all sent valid dates will be parsed with `new Date()` as GMT dates.

**Replit Solution Link:** <br /><https://replit.com/@thammami/boilerplate-project-timestamp#server.js>

## Request Header Parser Microservice

Build a full stack JavaScript app that is functionally similar to this: <br /><https://request-header-parser-microservice.freecodecamp.rocks>

**Replit Solution Link:** <br /><https://replit.com/@thammami/boilerplate-project-headerparser#server.js>

## URL Shortener Microservice

Build a full stack JavaScript app that is functionally similar to this: <br /><https://url-shortener-microservice.freecodecamp.rocks>

**HINT:** Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function `dns.lookup(host, cb)` from the `dns` core module to verify a submitted URL.

**Replit Solution Link:** <br /><https://replit.com/@thammami/boilerplate-project-urlshortener#server.js>

## Exercise Tracker

Build a full stack JavaScript app that is functionally similar to this: <br /><https://exercise-tracker.freecodecamp.rocks>

Your responses should have the following structures.

Exercise:

```js
{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```

User:

```js
{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```

Log:

```js
{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
```

**Hint:** For the `date` property, the `toDateString` method of the `Date` API can be used to achieve the expected output.

**Replit Solution Link:** <br /><https://replit.com/@thammami/boilerplate-project-exercisetracker#server.js>

## File Metadata Microservice

Build a full stack JavaScript app that is functionally similar to this: <br /><https://file-metadata-microservice.freecodecamp.rocks>

**HINT:** You can use the `multer` npm package to handle file uploading.

**Replit Solution Link:** <br /><https://replit.com/@thammami/boilerplate-project-filemetadata#server.js>
