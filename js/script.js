
window.onload= function(){
	const quizData = [
	{
		question: 'How old was bruce when he lost his parents?',
		a: '10',
		b: '8',
		c: '7',
		d: '9',
		correct: 'b'
	},{
		question: 'Who did train bruce at league of assassins?',
		a: 'Hugo Stranger',
		b: 'Dick Grayson',
		c: 'Eobard Thawne',
		d: "ra's al ghul",
		correct: 'd'

	},{
		question:"Who is not a batman's arch enemy?",
		a: 'Joker',
		b: 'Dr Freeze',
		c: 'Black manta',
		d: "riddler",
		correct: 'c'
	},{
		question:"who was the first robin?",
		a: 'Dick Grayson',
		b: 'Tim drake',
		c: 'Jason Todd',
		d: "Damian Wayne",
		correct: 'a'
	},{
		question:"Who played Batman in Batman:Dark Knight?",
		a: 'Geroge Clooney',
		b: 'Robert Pattinson',
		c: 'Heath Ledger',
		d: "Christian bale",
		correct: 'a'
	}
	];
	const quiz = document.getElementById('quiz');
	const answersEls = document.querySelectorAll('.answer');
	const questionEl = document.getElementById('question');
	const a_text = document.getElementById('a_text');
	const b_text = document.getElementById('b_text');
	const c_text = document.getElementById('c_text'); 
	const d_text = document.getElementById('d_text');
	const submitBtn = document.getElementById('submit');

	let currentQuiz =0;
	let score = 0;

	loadQuiz()

	function loadQuiz(){
		deselectAnswers();
		const currentQuizData = quizData[currentQuiz];

		questionEl.innerText= currentQuizData.question;
		a_text.innerText = currentQuizData.a;
		b_text.innerText = currentQuizData.b;
		c_text.innerText = currentQuizData.c;
		d_text.innerText = currentQuizData.d;

	}

	function getSelected(){
		
		let answer = undefined;
		

		answersEls.forEach((answerEl) =>{
			if (answerEl.checked) {
				answer = answerEl.id;

			}
		});
		return answer;

	}

	function deselectAnswers(){
		answersEls.forEach((answerEl) =>{
			answerEl.checked = false;
		});

	}
	submitBtn.addEventListener('click', () => {
		//check to see the answer

		const answer = getSelected();
		console.log(answer);
		if (answer) {
			if (answer === quizData[currentQuiz].correct) {
				score++;
			}


			currentQuiz++;
			if (currentQuiz < quizData.length) {
				loadQuiz();
			}else {
				quiz.innerHTML = `<h2 style="padding: 100px 25px; color: gold; background: linear-gradient(215deg,#8e44ad 20%,#602d75 74%)">You Answered Correctly at ${score} out of ${quizData.length} questions</h2>`;

			}

		}


		


	});
}