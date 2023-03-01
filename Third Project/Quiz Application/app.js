const  question =[
    {
    'que':'which of the following is a Scripting languae ?',
    'a':'Python',
    'b':'JavaScript',
    'c':'HTML',
    'd':'Java',
    'ans':'b',
    },
    {
    'que':'Which of the following is a Markup language ?',
    'a':'Python',
    'b':'JavaScript',
    'c':'HTML',
    'd':'Java',
    'ans':'c',
    },
    {
    'que':'Django is a framwork of ... ?',
    'a':'Python',
    'b':'JavaScript',
    'c':'HTML',
    'd':'Java',
    'ans':'a',
    }
];
const index=2;
const questionLoad =document.getElementById("h3");
const option= document.querySelectorAll(".option");
function loadQuestion(){
    const data= question[index];
    questionLoad.innerText= ` ${index+1} ) ${data.que} `;
    option[0].nextElementSibling.innerText=data.a;
    option[1].nextElementSibling.innerText=data.b;
    option[2].nextElementSibling.innerText=data.c;
    option[3].nextElementSibling.innerText=data.d;
    
    console.log(questionLoad);
}
loadQuestion();
