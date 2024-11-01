var a = "apple";
{
    var a = "banana";
    console.log('inside scope a', a)
}
console.log('outside scope a', a)

let b = "apple";
{
    let b = "banana";
    console.log('inside scope b', b)
}
console.log('outside scope b', b)

const bb = "apple from const";
{
    const bb = "banana from const";
    console.log('inside scope bb', bb)
}
console.log('outside scope bb', bb)