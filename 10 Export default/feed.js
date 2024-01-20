import { post } from "./post";

function feed() {
  console.log("This is a feed");
  post();
  post();
  post();
}

function anotherFunction() {
  console.log("This is another function.");
}

export default feed
export anotherFunction