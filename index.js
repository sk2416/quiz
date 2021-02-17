const quizData = [

  {
    question:"our first kiss ?",
    a:"feb 14",
    b:"july16",
    c:"jan13",
    d:"march24",
    correct:"c",

  },

  {
    question:"our fav place  ?",
    a:"goa",
    b:"north india",
    c:"maldives",
    d:"kakinada",
    correct:"c",

  },

  {
    question:"which part in you, i like u most  ?",
    a:"eyes",
    b:"nose",
    c:"ears",
    d:"forehead",
    correct:"a",

  },

  {
    question:"most used word to scold in our chat ?",
    a:"idiot",
    b:"donkey",
    c:"mind less",
    d:"waste felow",
    correct:"b",

  },

  {
    question:"how many years do u want live with me",
    a:"100",
    b:"30",
    c:"50",
    d:"infinity",
    correct:"d",

  },



];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
  answerEls.forEach(answerEl => answerEl.checked =false)
}

function getSelected(){
  let answer
  answerEls.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer
}
submitBtn.addEventListener('click',() =>{
  const answer =getSelected()
  if(answer){
   if(answer===quizData[currentQuiz].correct){
      score++
    }
    currentQuiz++
    if(currentQuiz<quizData.length){
    loadQuiz()
   }else{
     quiz.innerHTML =`
     <h2>you answerd  ${score}/${quizData.length} questions correctly </h2>

     <button onclick="window.location.reload()"
     >reload</button>
      `
   }
}
})
