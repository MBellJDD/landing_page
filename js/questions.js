// Creo una función auto invocada para proteger las variables de otros archivos
(function(){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestion)
    // Iterar a cada elemento (cada pregunta)
    titleQuestion.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
        });
    });
})();