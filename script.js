const formElt = document.querySelector('#form');
const emailElt = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');

const onSubmit = (e) => {
  e.preventDefault();

  console.log('submitted');
};

formElt.addEventListener('submit', onSubmit);
