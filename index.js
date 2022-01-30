const form = document.querySelector('#forms_wraper');
const signInBtn = document.querySelector('#signIn');
const signUpBtn = document.querySelector('#signUp');
const body = document.body;
const block = document.querySelector('#regBlock');

signInBtn.addEventListener('click', () => {
	form.classList.remove('active');
	body.classList.remove('active');
	block.classList.remove('active');
});
signUpBtn.addEventListener('click', () => {
	form.classList.add('active');
	body.classList.add('active');
	block.classList.add('active');
});

// form
class from {
	constructor() {}
	sendData() {}
}
