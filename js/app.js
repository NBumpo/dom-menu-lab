const mainEl = document.querySelector("main")
console.log(mainEl)
mainEl.style.backgroundColor = ('var(--main-bg)')
const hOneEl = document.createElement('h1')
mainEl.appendChild(hOneEl)
hOneEl.innerHTML = "SEI Rocks!";
document.querySelector('main').classList.add('flex-ctr')