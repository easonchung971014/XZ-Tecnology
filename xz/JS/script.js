

window.addEventListener('scroll', (e) => {
    let noStickyOffset = document.documentElement.clientHeight * 2
    let scrolled = document.documentElement.scrollTop / noStickyOffset

    let $white = document.querySelector('.white')
    let $red = document.querySelector('.red')
    

    $white.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
    $red.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
   
    if (scrolled >= 1) {
        document.querySelector('.sticky-container').classList.add('no-sticky')
    } else {
        document.querySelector('.sticky-container').classList.remove('no-sticky')
    }
})


let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");


// 按下按鈕之後產生的變化

menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
    
}
//
const rows = document.querySelectorAll('#ui ul li')
const html = document.documentElement

document.addEventListener('scroll', (e) => {
  let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)
  
  let total =  2 / rows.length
  
  for (let [index, row] of rows.entries()) {
    let start = total * index
    let end = total * (index + 1)
    
    let progress = (scrolled - start) / (end - start)
    if (progress >= 1) progress = 1
    if (progress <= 0) progress = 0
    
    row.style.setProperty('--progress', progress)
  }
})