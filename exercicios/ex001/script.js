const form = document.getElementById('form-noticia');
const noticiasContainer = document.getElementById('noticias-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const conteudo = document.getElementById('conteudo').value;

  // Cria o elemento da notícia
  const noticia = document.createElement('div');
  noticia.classList.add('noticia');
  noticia.innerHTML = `<h3>${titulo}</h3><p>${conteudo}</p>`;

  // Adiciona no container
  noticiasContainer.prepend(noticia);

  // Limpa os campos
  form.reset();
});
