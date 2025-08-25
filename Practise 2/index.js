const body = document.querySelector('body');
const button = document.querySelector('button');
let count = 0;
button.addEventListener('click',()=>{
    if(count===0){
        button.innerHTML="Request Sent &#10003;";
        count=1;
    }
    else{
        button.innerHTML="Follow Request";
        count=0;
    }
})