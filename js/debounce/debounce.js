let input=document.getElementById('input');
let delay=document.getElementById('delay');
let heading=document.getElementById('heading');
var timerId, delayTime;

delay.addEventListener('input', () => {
    delayTime=delay.value;
});

input.addEventListener('input', () => {
    debounce(change, delayTime);
});

function change(){
    heading.innerHTML = input.value;
}

function debounce(fn, delay){
    clearTimeout(timerId);
    timerId = setTimeout(()=>{
        fn();
    }, delay)
}