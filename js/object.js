// {} is object (Key:Value)
// [] is array (index:value)
// const user = {
//     name: "nono",
//     age: 20,
//     phone: "09123456789",
//     email: "nono@gmail.com",
//     gender: "male",
//     isDeveloper: true,
//     hobbies: ["reading", "coding", "sleeping"],
//     address: {
//         city: "Yangon",
//         township: "Tamwe",
//         street: "100 feet road"
//     },
//     greeting() {
//         console.log("inside this", this)
//         return `name is ${this.name}, age is ${this.age} I am  ${this.isDeveloper ? "developer" : "designer"}`
//     }
// }

// const { name, age, isDeveloper, hobbies, address, greeting } = user
// console.log(name, age, isDeveloper, hobbies[0], address.city, user.greeting())




// user.skinColor = "white"
// user.address.city = "Bago"
// user.name = "popo"
// user.greeting()
// // console.log(user)
// console.log("outside this", this)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user['name'])
// console.log(user['age'])
// console.log(user['hobbies'])
// console.log(user['hobbies'][0])
// console.log(user['address'])
// console.log(user['address']['township'])
// console.log(user['address']['city'])
// console.log(user['address']['street'])
// console.log(user['greeting']())
// console.log(user.name)
// console.log(user.phone)
// console.log(user.hobbies[1])
// console.log(user.address.street)
// console.log(user.greeting())
// const user2 = {
//     name: "rose",
//     age: 20,
//     phone: "09123456789",
//     email: "rose@gmail.com",
//     gender: "male",
//     isDeveloper: true,
//     hobbies: ["reading", "coding", "sleeping"],
//     address: {
//         city: "Yangon",
//         township: "Tamwe",
//         street: "100 feet road"
//     },
//     greeting() {
//         return `name is ${this.name}, age is ${this.age} I am  ${this.isDeveloper ? "developer" : "designer"}`
//     }
// }
// const userLists = [user, user2]
// console.log(userLists)

const users = [
    { id: 1, name: "nono", age: 20, gender: "female", isDeveloper: true, address: "Yangon" },
    { id: 2, name: "rose", age: 31, gender: "female", isDeveloper: false, address: "Bago" },
    { id: 3, name: "tina", age: 33, gender: "female", isDeveloper: false, address: "Bago" },
    { id: 4, name: "bobo", age: 16, gender: "male", isDeveloper: false, address: "Yangon" },
    { id: 5, name: "popo", age: 19, gender: "female", isDeveloper: false, address: "Mdy" },
    { id: 6, name: "koko", age: 19, gender: "male", isDeveloper: true, address: "Mdy" },
    { id: 7, name: "jane", age: 39, gender: "female", isDeveloper: true, address: "Yangon" },
    { id: 8, name: "john", age: 29, gender: "male", isDeveloper: true, address: "Yangon" },
]
// console.log(users[3].name)
// const userData = JSON.stringify(users, "", 2);
// localStorage.setItem("users", userData)
// console.log(userData)
// const userData2 = JSON.parse(localStorage.getItem("users"))
// console.log('userData2 :', userData2)
// userData2.forEach(user => {
//     // console.log(user)
//     let userInfo = `name is ${user.name}, age is ${user.age}, gender is ${user.gender}, address is ${user.address}`
//     document.write(userInfo + "<br>")
// });

// Math Object 
// console.log(Math)
// console.log(Math.random()); //random number 
// console.log((Math.random() * 3) + 1); //random number start 1
// console.log(Math.round(2.5)); // 3 closet number 
// console.log(Math.ceil(2.2)); // 3 top number 
// console.log(Math.floor(2.9)); // 2 bottom number 
// console.log(Math.abs(- 2.9)); // 2 positive number 
// console.log(Math.abs(-2.1)); // 2 positive number 
// console.log(Math.trunc(2.1)); // 2 drop decimal point
// console.log(Math.trunc(-2.1)); // 2 drop decimal point
// console.log(Math.pow(2, 3)); // power
// console.log(Math.sqrt(4, 4)); // square root
// console.log(Math.max(4, 4, 5, 6, 78, 90, 33, 4, 5, 100, 100.1)); // max value 
// console.log(Math.min(0, -2, -9, -9.2, -9.9, 4, 4, 5, 6, 78, 90, 33, 4, 5, 100, 100.1)); // min value

// let point = prompt("Please enter Lucky Number");
// let amount = 200
// let rate = 2
// let res = '' + Math.floor(Math.random() * 1000);

// console.log('res.length :', res.length)
// console.log('res :', res)
// if (Number(parseInt(point)) === parseInt(res)) {
//     console.log(`You Win ${amount * rate} MMK`)
// } else {
//     console.log("You Lose")
// }
// 'Y m d'
// 'm d Y'
// let date = "30/10/2024";
// console.log(new Date(date).getMonth());
// let [day, month, year] = date.split("/");
// let formattedDate = `${month}/${day}/${year}`;
// let formattedDate2 = `${year}/${month}/${day}`;

// console.log(new Date(formattedDate).getFullYear());
// console.log(new Date(formattedDate).getMonth() + 1);
// console.log(new Date(formattedDate).getDate());

// console.log(new Date(formattedDate2).getFullYear());
// console.log(new Date(formattedDate2).getMonth() + 1);
// console.log(new Date(formattedDate2).getDate());