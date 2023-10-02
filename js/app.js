const mainEl = document.querySelector("main")
const topMenuEl = document.getElementById('top-menu')
const hOneEl = document.createElement('h1')
const subMenu = document.createElement('nav')
const subMenuEl = document.getElementById("sub-menu")
const topMenuLinks = document.querySelector('a')
const showingSubMenu = false
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
 menuLinks.forEach(function(link){
        const aEl = document.createElement('a')
        aEl.setAttribute('href', link.href)
        aEl.textContent = link.text
        topMenuEl.appendChild(aEl)
  })



topMenuEl.style.height = '100%' 
subMenuEl.style.height = '100%' 
topMenuEl.style.backgroundColor = ('var(--top-menu-bg')
subMenuEl.style.backgroundColor = ('var(--sub-menu-bg')
subMenuEl.style.position = ('absolute')
document.getElementById('sub-menu').style.top = '0'
document.getElementById('top-menu').classList.add('flex-ctr')
document.getElementById('sub-menu').classList.add('flex-around')
console.log(mainEl)
mainEl.style.backgroundColor = ('var(--main-bg)')

mainEl.appendChild(hOneEl)
hOneEl.innerHTML = "SEI Rocks!";
document.querySelector('main').classList.add('flex-ctr')

topMenuEl.addEventListener('click',function(e){
    e.preventDefault();
    
})