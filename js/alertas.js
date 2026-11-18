/* Alertas de demonstração — exemplos fictícios e relatos salvos localmente. */
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.getElementById('form-alerta');if(!form)return;
 const chave='movasi_alertas_demo_2026';
 const exemplos=[{id:'ex-1',tipo:'Rampa danificada',local:'Exemplo fictício: região central',impacto:'Alto',descricao:'Exemplo para demonstrar como seria um relato da comunidade. Não representa situação real.',data:'Demonstração',origem:'exemplo'},
 {id:'ex-2',tipo:'Calçada irregular',local:'Exemplo fictício: entorno de uma estação',impacto:'Moderado',descricao:'Relato fictício usado exclusivamente para ilustrar os filtros e a interface.',data:'Demonstração',origem:'exemplo'}];
 const ids=['tipo','local','impacto','descricao'];const campos=Object.fromEntries(ids.map(k=>[k,document.getElementById('alerta-'+k)]));
 const lista=document.getElementById('lista-alertas');const total=document.getElementById('total-alertas');const retorno=document.getElementById('alerta-retorno');const filtros=[...document.querySelectorAll('[data-filtro]')];let filtroAtual='todos';
 function ler(){try{const arr=JSON.parse(localStorage.getItem(chave)||'[]');return Array.isArray(arr)?arr.filter(x=>x&&typeof x.tipo==='string'&&typeof x.local==='string'&&typeof x.descricao==='string').slice(0,100):[];}catch{return [];}}
 function salvar(dados){try{localStorage.setItem(chave,JSON.stringify(dados));return true;}catch{return false;}}
 function criarTexto(tag,classe,valor){const e=document.createElement(tag);if(classe)e.className=classe;e.textContent=valor;return e;}
 function renderizar(){const pessoais=ler();const todos=[...pessoais,...exemplos];const visiveis=filtroAtual==='meus'?pessoais:filtroAtual==='exemplos'?exemplos:todos;
  total.textContent=String(visiveis.length);lista.replaceChildren();
  if(!visiveis.length){lista.appendChild(criarTexto('p','mensagem-vazia','Não há relatos nesta categoria.'));return;}
  visiveis.forEach(r=>{const card=document.createElement('article');card.className='cartao-relato';
    const topo=document.createElement('div');topo.className='topo-relato';topo.append(criarTexto('strong','',r.tipo),criarTexto('span','etiqueta-status','PENDENTE · NÃO VERIFICADO'));
    card.append(topo,criarTexto('p','local-relato',r.local),criarTexto('p','',r.descricao));
    card.append(criarTexto('small','metadados-relato',`Impacto percebido: ${r.impacto} · ${r.origem==='exemplo'?'Exemplo fictício':'Registro local'} · ${r.data}`));
    lista.appendChild(card);
  });
 }
 function erro(k){const v=campos[k].value.trim();if(!v)return 'Preencha este campo.';if(k==='local'&&v.length<5)return 'Informe um local com pelo menos 5 caracteres.';if(k==='descricao'&&v.length<10)return 'Descreva a situação com pelo menos 10 caracteres.';return '';}
 function validar(k){const msg=erro(k);const campo=campos[k];campo.classList.toggle('campo-invalido',!!msg);campo.setAttribute('aria-invalid',String(!!msg));const saida=document.getElementById('erro-'+k);saida.textContent=msg;campo.setAttribute('aria-describedby','erro-'+k);return !msg;}
 ids.forEach(k=>{campos[k].addEventListener('blur',()=>validar(k));campos[k].addEventListener('input',()=>{if(campos[k].getAttribute('aria-invalid')==='true')validar(k);});});
 form.addEventListener('submit',e=>{e.preventDefault();const valido=ids.map(validar).every(Boolean);retorno.hidden=false;
  if(!valido){retorno.className='feedback-formulario feedback-erro';retorno.textContent='Revise os campos destacados.';form.querySelector('[aria-invalid="true"]').focus();return;}
  const novo={id:`local-${Date.now()}`,tipo:campos.tipo.value,local:campos.local.value.trim(),impacto:campos.impacto.value,descricao:campos.descricao.value.trim(),data:new Date().toLocaleDateString('pt-BR'),origem:'local'};
  const anteriores=ler();anteriores.unshift(novo);if(!salvar(anteriores)){retorno.className='feedback-formulario feedback-erro';retorno.textContent='O navegador não permitiu salvar o relato localmente.';return;}
  form.reset();ids.forEach(k=>{campos[k].classList.remove('campo-invalido');campos[k].setAttribute('aria-invalid','false');document.getElementById('erro-'+k).textContent='';});
  retorno.className='feedback-formulario feedback-sucesso';retorno.textContent='Relato registrado somente neste navegador como PENDENTE e NÃO VERIFICADO. Nenhuma informação foi publicada.';
  filtroAtual='meus';filtros.forEach(b=>{const ativo=b.dataset.filtro===filtroAtual;b.classList.toggle('filtro-ativo',ativo);b.setAttribute('aria-pressed',String(ativo));});renderizar();
 });
 filtros.forEach(b=>b.addEventListener('click',()=>{filtroAtual=b.dataset.filtro;filtros.forEach(x=>{const ativo=x===b;x.classList.toggle('filtro-ativo',ativo);x.setAttribute('aria-pressed',String(ativo));});renderizar();}));
 document.getElementById('limpar-alertas').addEventListener('click',()=>{if(!ler().length){retorno.hidden=false;retorno.className='feedback-formulario';retorno.textContent='Não existem relatos locais para limpar.';return;}if(!window.confirm('Deseja apagar os relatos locais deste navegador? Os exemplos fictícios continuarão disponíveis.'))return;
  if(!salvar([])){retorno.hidden=false;retorno.className='feedback-formulario feedback-erro';retorno.textContent='Não foi possível limpar os dados locais.';return;}retorno.hidden=false;retorno.className='feedback-formulario feedback-sucesso';retorno.textContent='Seus relatos locais foram apagados.';renderizar();});
 renderizar();
});
