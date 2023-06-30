// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
console.log ("btnToggle",btnToggle)
btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});
