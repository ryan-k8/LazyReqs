/** *
 * LazyReq - simple library for making http requests
 *
 * version  1.0 (es5)
 */

function lazyReq() {
  this.xhr = new XMLHttpRequest();
}

// get
lazyReq.prototype.get = function (url, callback) {
  this.xhr.open("GET", url, true);

  let self = this;
  this.xhr.onload = function () {
    if (self.xhr.status === 200) {
      callback(null, self.xhr.responseText);
    } else {
      callback(` Connection Error : ${self.xhr.status}`);
    }
  };
  this.xhr.send();
};

// post
lazyReq.prototype.post = function (url, data, isJsonObj = true, callback) {
  this.xhr.open("POST", url, true);
  this.xhr.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.xhr.onload = function () {
    if (self.xhr.status === 201) {
      callback(null, self.xhr.responseText);
    } else {
      callback(` Connection Error : ${self.xhr.status}`);
    }
  };

  if (isJsonObj) {
    this.xhr.send(JSON.stringify(data));
  } else {
    // incase data is already a valid json string
    this.xhr.send(data);
  }
};

// put
lazyReq.prototype.put = function (url, data, isJsonObj = true, callback) {
  this.xhr.open("PUT", url, true);
  this.xhr.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.xhr.onload = function () {
    if (self.xhr.status === 200) {
      callback(null, self.xhr.responseText);
    } else {
      callback(` Connection Error : ${self.xhr.status}`);
    }
  };

  if (isJsonObj) {
    this.xhr.send(JSON.stringify(data));
  } else {
    // incase data is already a valid json string
    this.xhr.send(data);
  }
};

// delete
lazyReq.prototype.delete = function (url, callback) {
  this.xhr.open("DELETE", url, true);

  let self = this;
  this.xhr.onload = function () {
    if (self.xhr.status === 200) {
      callback(null, "Resource Deleted");
    } else {
      callback(`Connection Error : ${self.xhr.status}`);
    }
  };

  this.xhr.send();
};

// patch
lazyReq.prototype.patch = function (url, data, isJsonObj = true, callback) {
  this.xhr.open("PATCH", url, true);
  this.xhr.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.xhr.onload = function () {
    if (self.xhr.status === 200) {
      callback(null, self.xhr.responseText);
    } else {
      callback(` Connection Error : ${self.xhr.status}`);
    }
  };

  if (isJsonObj) {
    this.xhr.send(JSON.stringify(data));
  } else {
    // incase data is already a valid json string
    this.xhr.send(data);
  }
};
