var aaa = 1;

async function async1() {
    console.log('a');
    await async2();
    console.log('b');
}

async function async2() {
    console.log('c')
}

console.log('d')
async1();

setTimeout(()=> {
    console.log('e')
},0)

new Promise((resolve, reject) => {
    console.log('f')
    resolve()
}).then(()=> {
    console.log('g')
})

// d a c b f g e
// d a c f b g e

/*
console.log(1);
console.log(2);
Promise.resolve().then(function() {
    console.log(3);
})
setTimeout(function () {
    console.log('setTimeout1');
    Promise.resolve().then(function () {
        console.log('promise');
    });
});
setTimeout(function () {
    console.log('setTimeout2');
});

// 1 2 3 setTimeout1 promise setTimeout2
*/

/*
let s = "pwwkew"
let result = function(str){
   let arr = Array.from({length:128},()=>0)
   let res = 0

   for(let i=0;i<str.length;i++){
       if(arr[str.charCodeAt(i)]>=1) {
           res = Math.max(res,arr.filter(item=>item === 1).length)
           arr.forEach(item => item = 0)
           arr[str.charCodeAt(i)]++
       }
       arr[str.charCodeAt(i)]++
   }

   console.log(res)
}

result("abcabcbb")
result("bbbbb")
result("pwwkew")*/
