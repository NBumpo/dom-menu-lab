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
//from here is where I needed the solutions page
//
//listens for click us click is not an A tag return
topMenuEl.addEventListener('click',function(e){
    e.preventDefault();
    const link = e.target
    if (link.tagName !== 'A') return;
    console.log(link.textContent)
})
    topMenuLinks.forEach(function(link) {

    })
    

if (link.classList.contains('active')) {
    link.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
}

 // Task 5.4 iterates through links and removes active state
 topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});
// Task 5.5
link.classList.add('active');
// Task 5.6
// finds linkObj returns linkobj if strict equals link textContent
const linkData = menuLinks.find(function(linkObj) {
  return linkObj.text === link.textContent;
});
showingSubMenu = 'subLinks' in linkData;
// Task 6.4
// Task 5.7
if (showingSubMenu) {
  buildSubMenu(linkData.subLinks);
  subMenuEl.style.top = '100%';
} else {
  subMenuEl.style.top = '0';
  mainEl.innerHTML = '<h1>about</h1>';
}


// Task 5.8
function buildSubMenu(subLinks) {
subMenuEl.innerHTML = '';
subLinks.forEach(function(link) {
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  subMenuEl.appendChild(linkEl);
});
}

// Task 6.0 repeated from earlier
subMenuEl.addEventListener('click', function(evt) {
evt.preventDefault();
const link = evt.target;
if (link.tagName !== 'A') return;
console.log(link.textContent);
// Task 6.1
showingSubMenu = false;
subMenuEl.style.top = '0';
// Task 6.2
topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});
// Task 6.3
mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});


