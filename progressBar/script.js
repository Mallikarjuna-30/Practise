const progressBar = document.querySelector('.progressBar');
const btnR = document.querySelector('.btn');


let width = 0;


btnR.addEventListener('click', () => {
    function fillProgress() {
        if (width >= 100) {
            clearInterval(interval);
        }
        else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
    const interval = setInterval(fillProgress, 30)
})
