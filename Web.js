let ham = document.querySelector(".ham")
let navforham = document.querySelector(".navforham")
let handleClick = () => {
    console.log(getComputedStyle(navforham).left)
    if (getComputedStyle(navforham).left === '0px'){
    navforham.style.left = '-100%';
   } else {
    navforham.style.left = '0px'
   }
}

ham.addEventListener("click", handleClick)


// https://docs.google.com/spreadsheets/d/1iRSG3ZHjkc8LlQ2dg4AJIkzkzQZrFJ7B1oFgA2Bw5SE/edit?usp=sharing




