/** *
 * LazyReq - simple library for making http requests
 *
 * version  3.0 (es7)
 */

class lazyReq {
  // get
  async get(url) {
    const response = await fetch(url);

    const status = response.status;
    const data = await response.json();

    if (status !== 200) {
      return new Error(`connection error ${status}`);
    } else {
      return data;
    }
  }
  //post
  async post(url, data, isJsonObj = true) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: isJsonObj ? JSON.stringify(data) : data,
    });
    const status = response.status;
    const resData = await response.json();

    if (status !== 201) {
      return new Error(`connection error : ${status}`);
    } else {
      return resData;
    }
  }

  //put
  async put(url, data, isJsonObj = true) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: isJsonObj ? JSON.stringify(data) : data,
    });
    const status = response.status;
    const resData = await response.json();

    if (status !== 200) {
      return new Error(`connection error : ${status}`);
    } else {
      return resData;
    }
  }

  //patch
  async patch(url, data, isJsonObj = true) {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: isJsonObj ? JSON.stringify(data) : data,
    });
    const status = response.status;
    const resData = await response.json();

    if (status !== 200) {
      return new Error(`connection error : ${status}`);
    } else {
      return resData;
    }
  }

  //delete
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const status = response.status;
    const data = "resource deleted";

    if (status !== 200) {
      return new Error(`connection error ${status}`);
    } else {
      return data;
    }
  }
}
