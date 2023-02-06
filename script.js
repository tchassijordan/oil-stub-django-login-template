const formElt = document.querySelector('#form');
const emailElt = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');

const onSubmit = (e) => {
  e.preventDefault();

  // do what  you like when user enters  is credentials
  console.log('submitted');
};

formElt.addEventListener('submit', onSubmit);
