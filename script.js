const questions = [
{
    question:"Quesl est le nom du pays?",
    img: "senegal.webp",
    name:"Sénégal"
},
{
    question:"Quesl est le nom du pays?",
    img: "cameroun.jpg",
    name:"Cameroun"
},
{
    question:"Quesl est le nom du pays?",
    img: "congo.png",
    name:"Congo"
},
{
    question:"Quesl est le nom du pays?",
    img: "nigeria.avif",
    name:"Nigéria"
},
{
    question:"Quesl est le nom du pays?",
    img: "afriquedusud.webp",
    name:"Afrique du sud"
},

]

// On initialise le score et la current question

let currentQuestion = 0;
let score = 0;

const quizzImg = document.querySelector('#quizz-img');
const quizzQuestion = document.querySelector('#quizz-question');
const inputResultat = document.querySelector('#resultat');
const btnNext = document.querySelector('#next');
const resultatFinal = document.querySelector('#resultatFinal');

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const shuffledQuestions = shuffle(questions);

quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;

function validation(){
    if(inputResultat.value.toLowerCase() === shuffledQuestions
    [currentQuestion].name.toLowerCase()){
        score++;
    }
    // On initialise l'input
    inputResultat.value="";

    currentQuestion++;

    if(currentQuestion === shuffledQuestions.length){
        quizzQuestion.textContent = "Fin du quizz";
        quizzImg.style.display = "none";
        inputResultat.style.display = "none";
        btnNext.style.display = "none";
        resultatFinal.textContent = "Votre score est de " + score + " sur " + shuffledQuestions.length;
    }else{
        quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
        quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;
        inputResult.value = "";
    }
}



btnNext.addEventListener("click",validation);
inputResult.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        validation();
    }
});

// Ajouter qqch pour permettre de recommencer le quizz sans rafraichir la page