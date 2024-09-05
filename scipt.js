function checkAnswer(questionId, selectedAnswer) {
    const correctAnswers = {
        answer1: 'a',
        answer2: 'a',
        answer3: 'a'
    };

    const answerElement = document.getElementById(questionId);
    const buttons = document.querySelectorAll(`#${questionId} ~ .options button`);

    buttons.forEach(button => {
        button.disabled = true; // Desabilita todos os botões
        if (button.innerText.startsWith(correctAnswers[questionId])) {
            button.style.backgroundColor = '#d4edda'; // Verde para a resposta correta
        } else if (button.innerText.startsWith(selectedAnswer)) {
            button.style.backgroundColor = '#f8d7da'; // Vermelho para a resposta errada
        }
    });

    answerElement.style.display = 'block'; // Exibe a resposta correta
}
