var aaa = 1;

/*
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
*/

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

/*
const promise = new Promise((resolve, reject) => {
    console.log("Promise 执行函数");
    resolve(12);
}).then((result) => {
    console.log("Promise 回调（.then）", result);
});

setTimeout(() => {
    console.log("新一轮事件循环：Promise（已完成）", promise);
}, 0);

console.log("Promise（队列中）", promise);
*/

/*
function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
}

function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
}

async function sequentialStart() {
    console.log("==SEQUENTIAL START==");

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
    console.log("==CONCURRENT START with await==");
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second(); // starts timer immediately

    // 1. Execution gets here almost instantly
    console.log(await slow); // 2. this runs 2 seconds after 1.
    console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
    console.log("==CONCURRENT START with Promise.all==");
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
        (messages) => {
            console.log(messages[0]); // slow
            console.log(messages[1]); // fast
        },
    );
}

async function parallel() {
    console.log("==PARALLEL with await Promise.all==");

    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
    ]);
}

// sequentialStart();

// setTimeout(concurrentStart, 4000);

// setTimeout(concurrentPromise, 7000);

// setTimeout(parallel, 10000);
*/

/*
let i = 0;

queueMicrotask(function test() {
    i++;
    console.log("microtask", i);
    if (i < 3) {
        queueMicrotask(test);
    }
});

(async () => {
    console.log("async function start");
    for (let i = 1; i < 3; i++) {
        await null;
        console.log("async function resume", i);
    }
    await null;
    console.log("async function end");
})();

queueMicrotask(() => {
    console.log("queueMicrotask() after calling async function");
});

console.log("script sync part end");
*/

// async function start
// script sync part end
// "async function resume", 1
// "microtask", 1
// "queueMicrotask() after calling async function"
// "async function resume", 2
// "microtask", 2
// "async function resume", 3
// "microtask", 3
// "async function end"

/*
async function foo(name) {
    console.log(name, "start");
    await console.log(name, "middle");
    await console.log(name, "middle---2");
    console.log(name, "end");
}

foo("First");
foo("Second");
*/

// ----this
/*function fn(){
    this.x = 2
    console.log(this)
    return this
}

fn()

class fn1 {
    constructor() {
        console.log(this)
    }

    fnn(){
        console.log(this)
    }
}

let a = new fn1()
a.fnn()
*/

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
// }
//
// let a = new Food('cheese', 5)
// console.log(a);

/*
function show(){
    console.log(this.x,' is a Number.')
}
function Ddd(){
    this.x = 9
}

let mo = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

let mo2 = {
    x: 10,
    getX: function () {
        return this.x;
    },
};

let mo3 = new Ddd()

show()
show.call(mo)
show.call(mo2)
show.call(mo3)
let q = show.bind(mo)
console.log(q)
q()*/

// 防抖、节流

/*
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let data = 1
one.addEventListener('click', oneFunc(add))
two.addEventListener('click', twoFunc(add))

function add(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
    console.log(data++)
}

// 防抖实现
function oneFunc(fn, wait = 1000) {
    let timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, [2,4,6])
        }, wait)
    }
}

// 节流实现
function twoFunc(fn,wait = 1000){
    let timeout;
    let startTime = Date.now()
    return function(){
        let curTime = Date.now()
        let remaining = wait - (curTime - startTime)
        console.log(remaining,curTime-startTime)
        clearTimeout(timeout)
        if(remaining <= 0){
            fn.apply(this,[2,4,6])
            startTime = Date.now()
        }else timeout = setTimeout(fn,remaining)
    }
}
*/

// 生成器函数与for of的使用

/*
var gen = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();
for (let o of gen) {
    console.log(o);
    break; //关闭生成器
}

//生成器不应该重用，以下没有意义！
for (let o of gen) {
    console.log(o);
}
*/
