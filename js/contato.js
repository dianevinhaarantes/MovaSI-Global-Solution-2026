/* Validação real do formulário, com simulação local de envio. */
document.addEventListener('DOMContentLoaded', () => {
 const form=document.getElementById('form-contato');if(!form)return;
 const campos={nome:document.getElementById('contato-nome'),email:document.getElementById('contato-email'),assunto:document.getElementById('contato-assunto'),mensagem:document.getElementById('contato-mensagem')};
 const retorno=document.getElementById('retorno-contato');
 function mensagem(nome){const val=campos[nome].value.trim();
  if(!val) return 'Este campo é obrigatório.';
  if(nome==='nome' && val.length<3) return 'Informe ao menos 3 caracteres no nome.';
  if(nome==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Digite um e-mail válido, como nome@exemplo.com.';
  if(nome==='mensagem' && val.length<10)return 'Escreva uma mensagem com pelo menos 10 caracteres.';
  return '';
 }
 function validar(nome){const erro=mensagem(nome);const campo=campos[nome];const saida=document.getElementById(`erro-${nome}`);
  saida.textContent=erro;campo.classList.toggle('campo-invalido',Boolean(erro));
  campo.setAttribute('aria-invalid',String(Boolean(erro)));campo.setAttribute('aria-describedby',`erro-${nome}`);
  return !erro;
 }
 Object.entries(campos).forEach(([nome,campo])=>{campo.addEventListener('blur',()=>validar(nome));campo.addEventListener('input',()=>{if(campo.getAttribute('aria-invalid')==='true')validar(nome);});});
 form.addEventListener('submit', e=>{e.preventDefault();retorno.hidden=true;
  const ok=Object.keys(campos).map(validar).every(Boolean);
  if(!ok){retorno.hidden=false;retorno.className='feedback-formulario feedback-erro';retorno.textContent='Revise os campos destacados antes de continuar.';
    const primeiro=form.querySelector('[aria-invalid="true"]');if(primeiro)primeiro.focus();return;}
  retorno.hidden=false;retorno.className='feedback-formulario feedback-sucesso';
  retorno.textContent='Dados validados com sucesso! Esta é uma simulação acadêmica: nenhuma mensagem foi enviada ou armazenada.';
  form.reset();Object.keys(campos).forEach(nome=>{campos[nome].setAttribute('aria-invalid','false');document.getElementById(`erro-${nome}`).textContent='';campos[nome].classList.remove('campo-invalido');});
 });
});
