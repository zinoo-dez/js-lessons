/*
const data = [];
let name = "bobo";
for (let i = 1; i <= 100; i++) {
  data.push("user" + i);
}
console.log(data);
*/
const userList = [];
const address = [
  "yangon",
  "bago",
  "mandalay",
  "naypyidaw",
  "sagaing",
  "magway",
];
const jobs = [
  "accounting",
  "teacher",
  "manager",
  "trainner",
  "developer",
  "shopkeeper",
];
const genders = ["male", "female"];
for (let i = 1; i <= 50; i++) {
  const user = {
    id: i,
    name: "user" + i,
    age: Math.floor(Math.random() * 100) + 1,
    email: "user" + i + "@gmail.com",
    address: address[Math.floor(Math.random() * address.length)],
    job: jobs[Math.floor(Math.random() * jobs.length)],
    gender: genders[Math.floor(Math.random() * genders.length)],
  };
  userList.push(user);
}
// console.log("userList", userList);

for (let i = 0; i < userList.length; i++) {
  const user = userList[i];
  //   console.log("user", user);
  let userInfo = `name: ${user.name}, age: ${user.age}, email: ${user.email}, address: ${user.address}, job: ${user.job}, gender: ${user.gender}`;
  console.log(userInfo);
}
//Todo count of address
//Todo above age 50/ under 50
