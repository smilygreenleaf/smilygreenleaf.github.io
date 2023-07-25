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

const ctx = document.getElementById('myChart');
        const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
            const {ctx} = chart;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || '#99ffff';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
        };
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                hoverOffset: 4
            }]
            };

        new Chart(ctx, {
    type: 'doughnut',
    offset: 100,
    options: {
        radius: 200,
            plugins: {
                legend: {
                    labels: {
                        padding: 40
                    }
                }
            }
        
    },
    data: {
            labels: [
                'Red',
                'Blue',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [50, 50],
                backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
            }]
            },
        
  });