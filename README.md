# LazyReqs

simple library for making http requests
(GET/POST/PUT/PATCH/DELETE)

## usage

#### GET/DELETE

- specify url eg

```javascript
const http = new lazyReq();
http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response));
```

#### POST/PUT/PATCH

- specify url , data & isJSONobj (boolean)
  - (if your data is already JSON string then set third param as false,else if its a JSON obj set third param as true)

```javascript
const http = new lazyReq();
http // third param --> true(for JSONobj only) & false for JSON strings
  .post("https://jsonplaceholder.typicode.com/posts", Data, true)
  .then((response) => console.log(response));
```

### PRs

Pull requests are welcomed especially ones that solve error handling with fetch api

### LICENSE

- MIT
