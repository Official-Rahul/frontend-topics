let start = document.getElementById("start");
let start2 = document.getElementById("start2");
let start3 = document.getElementById("start3");
let messageDom = document.getElementById("message");
let messageDom2 = document.getElementById("message2");
let messageDom3 = document.getElementById("message3");

start.addEventListener('click',()=>{
    asyncCall();
})

start2.addEventListener('click',()=>{
    asyncCall2();
})

start3.addEventListener('click',()=>{
    asyncCall3();
})

async function asyncCall(){
    messageDom.innerHTML = "calling";
    const result = await resolveAfterSomeTime();
    messageDom.innerHTML = result;
}

async function asyncCall2(){
    messageDom2.innerHTML = "calling";
    const result1 = await resolveAfterSomeTime();
    messageDom2.innerHTML = result1+" from 1";
    const result2 = await resolveAfterSomeTime();
    messageDom2.innerHTML = result2+" from 2";
}

async function asyncCall3(){
    messageDom3.innerHTML = "calling";
    const result = await Promise.all([resolveAfterSomeTime(), resolveAfterSomeTime()]);
    messageDom3.innerHTML = result+" 2 calls parallely";
}

function resolveAfterSomeTime(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000)
    })
}