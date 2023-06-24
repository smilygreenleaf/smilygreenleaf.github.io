let ham = document.querySelector(".ham")
let navforham = document.querySelector(".navforham")
let poll_options = document.querySelector(".choices")
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

let choices_data = [
    {
        id: 1,
        text: "One",
        votes: 0
    },
    {
        id: 2,
        text: "Two",
        votes: 0
    },
    {
        id: 3,
        text: "Three",
        votes: 0
    },
    {
        id: 4,
        text: "Four",
        votes: 0
    }
]

for (let choice of choices_data){
    poll_options.innerHTML += `<div class='choice'>${choice.text}</div>`
}

let choices = document.querySelectorAll(".choice")

console.log(choices)

for (let choice of choices){
    choice.addEventListener("click", function(){

        for (let c of choices){
            c.style.backgroundColor = "rgb(168, 168, 168)";
        }

        choice.style.backgroundColor = "rgb(46, 46, 46)";
    })
}
