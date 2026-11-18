/* Busca interativa de perguntas frequentes. */
document.addEventListener('DOMContentLoaded', () => {
  const busca=document.getElementById('buscar-faq');
  const itens=[...document.querySelectorAll('.faq-item')];
  const contador=document.getElementById('contagem-faq');
  const vazio=document.getElementById('faq-vazio');
  const limpar=document.getElementById('limpar-faq');
  if(!busca)return;
  const normalizar=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function atualizar(){const termo=normalizar(busca.value.trim());let n=0;
    itens.forEach(item=>{const mostrar=normalizar(item.textContent).includes(termo);item.hidden=!mostrar;if(mostrar)n++;});
    contador.textContent=n===1?'1 pergunta encontrada.':`${n} perguntas encontradas.`;
    vazio.hidden=n!==0;
  }
  busca.addEventListener('input',atualizar);
  limpar.addEventListener('click',()=>{busca.value='';atualizar();busca.focus();});
  atualizar();
});
