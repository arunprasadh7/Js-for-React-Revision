// function post() {
//   console.log("This is post");
// }

import { post } from "./post.mjs";

function feed() {
  console.log("This is feed");
  post();
  post();
  post();
}

feed();
