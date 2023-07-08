let ham = document.querySelector(".ham")
let navforham = document.querySelector(".navforham")
let poll_options = document.querySelector(".choices")
let selected_option = null
let vote_btn = document.querySelector('.CompleteVote')
let vote_error = document.querySelector('.VoteError')

let handleClick = () => {
    console.log(getComputedStyle(navforham).left)
    if (getComputedStyle(navforham).left === '0px'){
    navforham.style.left = '-100%';
   } else {
    navforham.style.left = '0px'
   }
}

ham.addEventListener("click", handleClick)

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
    }
]



for (let choice of choices_data){
    poll_options.innerHTML += `<div key=${choice.id} class='choice'>${choice.text}</div>`
}

let choices = document.querySelectorAll(".choice")

console.log(choices)

for (let choice of choices){
    choice.addEventListener("click", function(){
        selected_option = choice.getAttribute('key')
        if (choice.style.backgroundColor === "rgb(46, 46, 46)") {
            choice.style.backgroundColor = "rgb(168, 168, 168)";
            selected_option = null
        } else {

        for (let c of choices){
            c.style.backgroundColor = "rgb(168, 168, 168)";
        }

        choice.style.backgroundColor = "rgb(46, 46, 46)";

        }
    })
}

vote_btn.addEventListener('click', function(e){
    e.preventDefault()
    setTimeout(function(){
        vote_error.style.height = "0px"
    }, 5000)
    if (selected_option){
        console.log("Something Works and ", selected_option, " has been selected!")
    } else {
        vote_error.style.height = "50px"
    }
})