let name = document.getElementById("name");
let email = document.getElementById("email");
let cpf = document.getElementById("cpf");
let date = document.getElementById("date");
let password = document.getElementById("password");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textName = document.getElementById("textName");
let textEmail = document.getElementById("textEmail");
let textCPF = document.getElementById("textCPF");
let dateNumber = document.getElementById("dateNumber");
let textPassword = document.getElementById("textPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    name.value === "" &&
    email.value === "" &&
    cpf.value === "" &&
    date.value === "" &&
    password.value === ""
  ) {
    textForm.textContent = "Você precisa preencher todos os campos!";
    return;
  }

  if (
    validatorName(name.value) === true &&
    validatorEmail(email.value) === true &&
    validatorCPF(cpf.value) === true &&
    validatorDate(date.value) === true &&
    validatorPassword(password.value) === true
  ) {
    console.log("Nome:", name.value);
    console.log("Email:", email.value);
    console.log("CPF:", cpf.value);
    console.log("Data:", date.value);
    console.log("Senha:", password.value);

    textForm.textContent = "";
    textName.textContent = "";
    textEmail.textContent = "";
    textCPF.textContent = "";
    dateNumber.textContent = "";
    textPassword.textContent = "";
  } else {
    textForm.textContent = "Algum campo está inválido. Verifique os erros abaixo.";
    console.log("Requisição não atendida");
  }
});

name.addEventListener("keyup", () => {
  if (!validatorName(name.value)) {
    textName.textContent = "Nome e sobrenome são obrigatórios, apenas letras, espaços, '-' e apostrofo.";
  } else {
    textName.textContent = "";
  }
});

email.addEventListener("keyup", () => {
  if (!validatorEmail(email.value)) {
    textEmail.textContent = "O formato do email deve ser Ex: name@abc.com";
  } else {
    textEmail.textContent = "";
  }
});

cpf.addEventListener("keyup", () => {
  if (!validatorCPF(cpf.value)) {
    textCPF.textContent = "O CPF deve conter 11 números válidos e não repetidos.";
  } else {
    textCPF.textContent = "";
  }
});

date.addEventListener("keyup", () => {
  if (!validatorDate(date.value)) {
    dateNumber.textContent = "Data inválida. Use o formato YYYY-MM-DD.";
  } else {
    dateNumber.textContent = "";
  }
});

password.addEventListener("keyup", () => {
  if (!validatorPassword(password.value)) {
    textPassword.textContent =
      "A senha deve ter entre 6 e 16 caracteres, pelo menos um número e um caractere especial (!@#$%^&).";
  } else {
    textPassword.textContent = "";
  }
});

// Valida nome - letras, espaços, hifens e apóstrofos
function validatorName(name) {
  let namePattern = /^[_a-zA-ZÀ-ÿ '-\s]+$/;
  return namePattern.test(name.trim()) && name.trim().includes(" ");
}

// Valida email simples
function validatorEmail(email) {
  let emailPattern =
    /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i;
  return emailPattern.test(email.trim());
}

// Valida CPF com 11 dígitos e que não seja todos iguais
function validatorCPF(cpf) {
  cpf = cpf.replace(/\D/g, ""); // Remove tudo que não for número
  if (!/^\d{11}$/.test(cpf)) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false; // Números todos iguais não válidos
  // Aqui pode colocar validação mais robusta de CPF se quiser, mas fica assim simples
  return true;
}

// Valida data no formato YYYY-MM-DD e se é data válida
function validatorDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const d = new Date(date);
  return !isNaN(d.getTime());
}

// Valida senha com 6-16 chars, pelo menos um número e um caractere especial (!@#$%^&)
function validatorPassword(password) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
  return passwordPattern.test(password);
}
