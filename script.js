function abrirCarta() {
  document.getElementById('envelope').classList.add('hidden');
  document.getElementById('carta').classList.remove('hidden');
}

function mostrarMensagem() {
  const msg = document.getElementById('mensagem');
  msg.classList.toggle('hidden');
}

// Efeito de corações ao clicar
document.body.addEventListener('click', (e) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
});

