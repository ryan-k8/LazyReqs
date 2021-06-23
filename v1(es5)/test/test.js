const ajax = new lazyReq();
const postData = {
  name: "new post",
  post: "i am new post",
};
const updateData = {
  name: "updated post",
  post: "i am updated post",
};

const patchData = {
  title: "patch seems to be working !",
  //   body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, exercitationem!",
};

ajax.get(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, responseData) {
    if (err === null) {
      console.log(responseData);
    } else {
      console.error(err);
    }
  }
);

ajax.post(
  "https://jsonplaceholder.typicode.com/posts",
  postData,
  true,
  function (err, responseData) {
    if (err === null) {
      console.log(responseData);
    } else {
      console.error(err);
    }
  }
);

ajax.put(
  "https://jsonplaceholder.typicode.com/posts/5",
  updateData,
  true,
  function (err, responseData) {
    if (err === null) {
      console.log(responseData);
    } else {
      console.error(err);
    }
  }
);

ajax.delete(
  "https://jsonplaceholder.typicode.com/posts/2",
  function (err, responseData) {
    if (err === null) {
      console.log(responseData);
    } else {
      console.error(err);
    }
  }
);

ajax.patch(
  "https://jsonplaceholder.typicode.com/posts/5",
  patchData,
  true,
  function (err, responseData) {
    if (err === null) {
      console.log(responseData);
    } else {
      console.error(err);
    }
  }
);
