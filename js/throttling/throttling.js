let input=document.getElementById('input');
let delay=document.getElementById('delay');
let heading=document.getElementById('heading');
var timerId, delayTime;

delay.addEventListener('input', () => {
    delayTime=delay.value;
});

input.addEventListener('input', () => {
    throttle(change, delayTime);
});

function change(){
    heading.innerHTML = input.value;
}

function throttle(fn, delay){
     if(timerId){
         return;
     }
     timerId=setTimeout(function(){
         fn();
         timerId=undefined;
     }, delay)
}