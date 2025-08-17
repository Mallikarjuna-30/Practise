// const { createElement } = require("react");

const body = document.querySelector('body');
const boxs = document.querySelectorAll('.box');
const button = document.querySelector('button');



const addNewDiv = (colourName) => {
    const div = document.createElement('div');
    div.id = (`${colourName}`);
    div.className = 'box';
    div.innerHTML = `${colourName}`;
    document.querySelector('.container').appendChild(div);
    div.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id; 
    });
}

addNewDiv('brown');
addNewDiv('yellow');
addNewDiv('orange')



boxs.forEach((box) => {
    console.log(box);
    box.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        // if (e.target.id === "blue") {
        //     body.style.backgroundColor = e.target.id;

        // }
        // else if (e.target.id === "green") {
        //     body.style.backgroundColor = e.target.id;
        // }
        box.innerHTML = e.target.id;
         body.style.backgroundColor = e.target.id; 
    })
    
})


button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(body.style.backgroundColor === 'white'){
        body.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
    }
    else{
        body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
})