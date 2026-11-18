/* MovaSI — navegação acessível compartilhada, sem dependências. */
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navegacao-principal');
  if (!botao || !nav) return;
  const fechar = () => {botao.setAttribute('aria-expanded','false');botao.setAttribute('aria-label','Abrir menu de navegação');nav.classList.remove('menu-aberto');};
  botao.addEventListener('click', () => {
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    botao.setAttribute('aria-label', aberto ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    nav.classList.toggle('menu-aberto', !aberto);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', fechar));
  document.addEventListener('keydown', e => {if (e.key === 'Escape') {fechar();botao.focus();}});
  document.addEventListener('click', e => {if(!nav.contains(e.target) && !botao.contains(e.target)) fechar();});
  window.addEventListener('resize', () => {if(window.innerWidth > 990) fechar();});
});
