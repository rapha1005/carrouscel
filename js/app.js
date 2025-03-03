const $testimonialText = document.querySelector('.testimonial-text')
const $testimonialAuthor = document.querySelector('.testimonial-author')
const $testimonialPosition = document.querySelector('.testimonial-position')
const $testimonialAuthorPicture = document.querySelector('.testimonial-author-picture')

const $nextButton = document.querySelector('.next-button')
const $previousButton = document.querySelector('.previous-button')

let currentState = 0
let timer = setInterval(() => {
    currentState++;
    changeCarouselState();
}, 10000);


const students = [
    {
        author: "Tanya Sinclar",
        job: "UX Engineer",
        comment: "La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.",
        picture: "./images/image-tanya.jpg"
    },
    {
        author: "Robert Marchand.",
        job: "Robotics Engineer.",
        comment: "Ce bootcamp a été une expérience intense et enrichissante. En quelques semaines, j’ai appris énormément et créé mes propres applications. Aujourd’hui, je suis prêt à me lancer dans le développement !",
        picture: "./images/image-robert.png"
    },
    {
        author: "john Carter",
        job: "Software Developer",
        comment: "Avant ce bootcamp, le code me semblait inaccessible. Mais en quelques semaines, j'ai acquis des bases solides et développé mes premiers projets concrets. Aujourd’hui, je me sens prêt à relever de vrais défis dans le monde du développement.",
        picture: "./images/image-john.jpg"
    },
    {
        author: "Sophia Mitchell",
        job: "Chef",
        comment: "Je pensais toujours que la programmation était réservée aux gens du milieu technologique, mais ce bootcamp a changé ma vision. Aujourd’hui, j’utilise ce que j’ai appris pour développer une application pour mon restaurant, permettant à mes clients de commander facilement leurs plats préférés. Ça a vraiment changé la donne !",
        picture: "./images/image-sophia.png"
    }
]

$nextButton.addEventListener('click', function () {
    currentState++
    changeCarouselState()
})

$previousButton.addEventListener('click', function () {
    currentState--
    changeCarouselState()
})

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        currentState++;
        changeCarouselState();
    } else if (e.key === "ArrowLeft") {
        currentState--; 
        changeCarouselState();
    }
})

function changeCarouselState(){
    if(currentState === 4){
        currentState = 0
    } else if(currentState === -1){
        currentState = 3
    }
    $testimonialText.textContent = students[currentState].comment
    $testimonialAuthor.textContent = students[currentState].author
    $testimonialAuthorPicture.src = students[currentState].picture
    $testimonialPosition.textContent = students[currentState].job
    

    clearInterval(timer)
    timer = setInterval(() => {
        currentState++;
        changeCarouselState();
    }, 4000);
}


