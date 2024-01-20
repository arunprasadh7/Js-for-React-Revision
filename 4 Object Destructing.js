// Object Destructing

const user = {
  name: "Arun",
  age: 27,
  job: "Developer",
  email: "arun@gmail.com",
  country: "India",
};

// normal way - takes too many lines of code
// const name = user.name;
// const age = user.age;
// const job = user.job;
// const email = user.email;
// const country = user.country;

// console.log(name, age, job, email, country);

// Using destructing
const { name: userName, age, job, email, country } = user;

console.log(userName, age, job, email, country);
