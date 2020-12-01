const $button = document.querySelector('button');

$button.addEventListener('click', (event) => {
  const popup = window.open('/users/github', '_blank', 'height=500,width=400,menubar=no,toolbar=no,status=no');
});

window.addEventListener('message', (event) => {
  console.log(event.data);
  window.localStorage.setItem('api-token', event.data);
});

