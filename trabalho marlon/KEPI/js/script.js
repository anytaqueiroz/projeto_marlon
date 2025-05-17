const form = document.getElementById('loginForm');
const logoutButton = document.getElementById('logoutButton');
const welcomeTitle = document.getElementById('welcomeTitle');

// Se já existe um login salvo, mostra mensagem
const savedEmail = localStorage.getItem('userEmail');
if (savedEmail) {
  welcomeTitle.innerText = `Bem-vindo, ${savedEmail}!`;
  form.style.display = 'none';
  logoutButton.style.display = 'block';
}

form.addEventListener('submit', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  if (password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  // Salvar no localStorage
  localStorage.setItem('userEmail', email);
  location.reload(); // Recarrega a página
});

logoutButton.addEventListener('click', function() {
  // Remover do localStorage
  localStorage.removeItem('userEmail');
  location.reload(); // Recarrega a página
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}