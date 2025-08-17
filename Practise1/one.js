// const { createElement } = require("react");

const body = document.querySelector('body');
const boxs = document.querySelectorAll('.box');




const addNewDiv = (colourName) => {
    const div = document.createElement('div');
    div.id = (`${colourName}`);
    div.className = 'box';
    div.innerHTML = `Box 3`;
    document.querySelector('.container').appendChild(div);
    div.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id; 
    });
}

addNewDiv('brown');
addNewDiv('yellow');



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
         body.style.backgroundColor = e.target.id; 
    })
})
