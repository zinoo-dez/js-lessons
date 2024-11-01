// let a = 10;
// a = a + 1
// a += 1
// let b = a++
// let c = ++a
// console.log('a :', a)
// console.log('b :', b)
// console.log('c :', c)
// (== check value)
// (=== check value and type)
// let a = 100;
// let b = "100"
// if (a === b) {
//     console.log('true :', true)
// } else {
//     console.log("false")
// }
// // ternary operator
// let res = a === b ? "true" : "false"
// console.log('res :', res)

// // nullish coalescing operator
// let photo = 'myPic.png';
// let res2 = photo ?? "dummy.png"
// console.log('res2 :', res2)

// if (b === "100" && a === 20 && a === 100) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// if (b === "100" || a === 20 || a === 500) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// let day = "wed"
// if (day === "mon") {
//     console.log("Monday")
// } else if (day === "tue") {
//     console.log("Tuesday")
// } else if (day === "wed") {
//     console.log("Wednesday")
// } else if (day === "thu") {
//     console.log("Thursday")
// } else if (day === "fri") {
//     console.log("Friday")
// } else if (day === "sat") {
//     console.log("Saturday")
// } else if (day === "sun") {
//     console.log("Sunday")
// } else {
//     console.log("Invalid day")
// }


// let day2 = new Date().getDay() + 1;
// console.log('day2 :', day2)
// switch (day2) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;

//     default:
//         console.log("Invalid day")
//         break;
// }

// for (let i = 10; i < 50; i++) {
//     if (i % 2 !== 0) {
//         if (i === 39) continue
//         if (i === 41) break
//         console.log('i is :', i)
//     }
//     // console.log('i :', i)
// }

// let users = ['bobo', 'mgmg', 'rose', 'tana', 'lana', 'jane']
// for (let i = 0; i < users.length; i++) {
//     const u = users[i];
//     if (u === 'rose') continue
//     if (u === 'lana') break
//     console.log('u :', u)
// }

let i = 20;
while (i < 10) {
    console.log('i :', i)
    i++
}
do {
    console.log('i :', i)
    i++
} while (i < 10);

// Js Falsy (false, 0, "", null, undefined, NaN, bigint)

if (100) {
    console.log('true')
} else {
    console.log('false')
}