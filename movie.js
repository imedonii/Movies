const overlay = document.querySelector('.overlay');
const m1 = document.querySelector('.movie-1');
const m2 = document.querySelector('.movie-2');
const m3 = document.querySelector('.movie-3');
const m4 = document.querySelector('.movie-4');
const m5 = document.querySelector('.movie-5');



const removed = () => {
    overlay.classList.remove('hidden');
}

document.querySelector('.m-1').addEventListener('click', () => {
    m1.classList.remove('hidden');
    removed();
})
document.querySelector('.m-2').addEventListener('click', () => {
    m2.classList.remove('hidden');
    removed();
})
document.querySelector('.m-3').addEventListener('click', () => {
    m3.classList.remove('hidden');
    removed();
})
document.querySelector('.m-4').addEventListener('click', () => {
    m4.classList.remove('hidden');
    removed();
})
document.querySelector('.m-5').addEventListener('click', () => {
    m5.classList.remove('hidden');
    removed();
})



overlay.addEventListener('click', () => {
    m1.classList.add('hidden');
    m2.classList.add('hidden');
    m3.classList.add('hidden');
    m4.classList.add('hidden');
    m5.classList.add('hidden');
    overlay.classList.add('hidden');
})

// const mov = document.querySelectorAll('.mv');

// m1.addEventListener('click', () => {
//     mov[0].classList.remove('hidden');
//     overlay.classList.remove('hidden');
// })