const overlay = document.querySelector('.overlay');
const m1 = document.querySelector('.movie-1');
const m2 = document.querySelector('.movie-2');
const m3 = document.querySelector('.movie-3');
const m4 = document.querySelector('.movie-4');
const m5 = document.querySelector('.movie-5');
const m6 = document.querySelector('.movie-6');
const m7 = document.querySelector('.movie-7');
const m8 = document.querySelector('.movie-8');
const m9 = document.querySelector('.movie-9');
const m10 = document.querySelector('.movie-10');



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
document.querySelector('.m-6').addEventListener('click', () => {
    m6.classList.remove('hidden');
    removed();
})
document.querySelector('.m-7').addEventListener('click', () => {
    m7.classList.remove('hidden');
    removed();
})
document.querySelector('.m-8').addEventListener('click', () => {
    m8.classList.remove('hidden');
    removed();
})
document.querySelector('.m-9').addEventListener('click', () => {
    m9.classList.remove('hidden');
    removed();
})
document.querySelector('.m-10').addEventListener('click', () => {
    m10.classList.remove('hidden');
    removed();
})



overlay.addEventListener('click', () => {
    m1.classList.add('hidden');
    m2.classList.add('hidden');
    m3.classList.add('hidden');
    m4.classList.add('hidden');
    m5.classList.add('hidden');
    m6.classList.add('hidden');
    m7.classList.add('hidden');
    m8.classList.add('hidden');
    m9.classList.add('hidden');
    m10.classList.add('hidden');
    overlay.classList.add('hidden');
})


document.querySelector('.pickRandom').addEventListener('click', () => {
    let no = Math.trunc(Math.random() * 10) + 1;
    let movieRandom = `.m${no}`;
    console.log(movieRandom);
    document.querySelector(`.movie-${no}`).classList.remove('hidden');
    removed();
})

