const http = new lazyReq();
const postData = {
  name: "new post",
  post: "i am new post",
};
const updateData = {
  name: "updated post",
  post: "i am updated post",
};

const patchData = {
  title: "put seems to be working !",
  //   body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, exercitationem!",
};

http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

http
  .post("https://jsonplaceholder.typicode.com/posts", postData, true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

http
  .put("https://jsonplaceholder.typicode.com/posts/2", updateData, true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

http
  .patch("https://jsonplaceholder.typicode.com/posts/3", patchData, true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

http
  .delete("https://jsonplaceholder.typicode.com/posts/4")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
