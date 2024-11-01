/*
let nameList = new Array("nono", "bobo");
console.log('nameList', nameList)

const data = [100, 200, true, false, "a", "b", "c", [1, 2, 3, 'a', 'b', 'c'], { 'a': 1, 'b': 2 }, 400, 500]
console.log(data[0])
console.log(data[2])
console.log(data[3])
console.log(data[data.length - 1])
console.log('data.length', data.length)
console.log('data', data)
const fe = ['html', 'css', 'js', 'jsx', ...[1, 2, ...[4000, 5000, 6000], 3, 'a', 'b', 'c'], 'reactjs', 'vuejs'];
const be = ['sql', 'NoSql', 'nodejs', 'php', 'java', 'expressJs']
// spread operator(...)
const fs = [...fe, ...be, "apple", "banana"]
console.log('fs', fs)
console.log('fs', fs.length)
// const fs = [fe, be];
console.log(fs[1])
console.log(fs[1][3])
console.log('fs', fs)
const be = ['sql', 'NoSql', 'nodejs', 'php', 'java', 'expressJs', 'C++']
//  array destructure
// (... rest operator)
const [sql, nosql, nodejs, ...all] = be
console.log('all', all)
console.log('sql', sql)
console.log('nosql', nosql)
console.log('nodejs', nodejs)
console.log('be[0]', be[0])
be[0] = "C#"
be[100] = "100 days Js"
be[10] = "10 days CSS"
console.log('be.length', be.length)
console.log('be', be)

const colors = ["red", "green", "blue", "yellow", "orange", "pink"]
const fruits = ["apple", "banana", "orange", "mango", "grapes", "pineapple", "watermelon"]
const allLists = [colors, fruits]
console.log('allLists :', allLists)
console.log('allLists :', allLists[0])
console.log('allLists :', allLists[0][4])
console.log('allLists :', allLists[1][3])
const [color, fruit] = [colors, fruits]
console.log('color', color)
console.log('fruit', fruit)
// (... spread operator)
const all = [...colors, ...fruits, "bobo", "rose", "tina", ['js'], { "name": "nono", "age": 20 }]
console.log('all', all)

*/

const users = [];
users.push("bobo")
users.push("nono")
users.push("tina")
users.unshift("rose")
users.unshift("john")
users.unshift("jane")
users.pop()
users.pop()
users.shift()
users.shift()
// console.log(users)
const colors = ["red", "green", "blue", "yellow", "apple", "red", "orange", "pink"];
console.log(colors.sort());
console.log(colors.reverse());
console.log(colors.join('/'))
console.log(colors.join('-'))
console.log(colors.join(',').split(","))
console.log(colors.join(',').split(""))
colors.fill('white')
console.log(colors)
let nums = [1, 2, 3, 100000, 2000, 4, 5, 6, 600, 500, 400, 200, 40000]
console.log(nums.sort((a, b) => a - b))
console.log(nums.sort((a, b) => b - a))
// console.log(colors.indexOf('red'))
// console.log(colors.lastIndexOf('red'))
// console.log(colors.includes('skyblue'))
// console.log(colors.includes('blue'))
// console.log(colors.indexOf('blue'))
// console.log(colors.splice(2, 1))
// console.log(colors.indexOf('orange'))
// console.log(colors.splice(3, 2, "white", "black"))