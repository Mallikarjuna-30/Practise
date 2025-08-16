const body = document.querySelector('body');
const boxs = document.querySelectorAll('boxs');

boxs.forEach((b) => {
    console.log(b);
    b.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;

        }
        else
            body.style.backgroundColor = e.target.id;
    })
})