
# MovaSI — Seu movimento gera MovimentAÇÃO

**Versão de entrega:** 1.0  
**Projeto:** MovaSI — Plataforma de Mobilidade Inclusiva  
**Instituição:** FIAP  
**Global Solution:** 2026/2  
**Tema:** CitizenTech  
**Disciplina:** Engenharia de Design Front-End  
**Turma:** 1TDSPS  
**Status:** Protótipo acadêmico demonstrativo — Versão 1.0

---

## 1. Descrição e objetivo

O **MovaSI** é uma proposta acadêmica de mobilidade inclusiva que busca ampliar o acesso a informações sobre deslocamentos urbanos, obstáculos e condições de acessibilidade, priorizando a autonomia das pessoas com deficiência e mobilidade reduzida.

O projeto nasceu da necessidade de tornar a mobilidade urbana mais compreensível, colaborativa e inclusiva.

Para muitas pessoas, deslocar-se pela cidade envolve incertezas relacionadas às condições das calçadas, à presença de obstáculos e à disponibilidade de recursos de acessibilidade.

O MovaSI propõe o uso da tecnologia como instrumento de apoio à informação, permitindo que usuários consultem referências geográficas e participem de experiências demonstrativas de colaboração.

Um princípio fundamental do projeto é que **a ausência de informações verificadas sobre um local não significa que ele seja acessível**.

A demonstração utiliza pontos de referência da Avenida Paulista, em São Paulo, e apresenta formulários e recursos interativos.

**Atenção:** a versão 1.0 é acadêmica e demonstrativa. Não constitui um serviço de navegação segura, não verifica a acessibilidade real das vias e não oferece informações públicas em tempo real.

### Objetivo geral

Desenvolver uma interface web responsiva e acessível para demonstrar uma proposta tecnológica de mobilidade urbana inclusiva.

### Objetivos específicos

- Facilitar a visualização de pontos de referência em mapas.
- Apresentar informações relacionadas à acessibilidade urbana.
- Demonstrar o registro colaborativo de obstáculos e ocorrências.
- Disponibilizar uma experiência adaptável a diferentes dispositivos.
- Aplicar conceitos de acessibilidade digital e usabilidade.
- Utilizar JavaScript para interações, formulários e armazenamento local.
- Incentivar a autonomia e a participação colaborativa dos usuários.

---

## 2. Tecnologias utilizadas

O Front-End do MovaSI utiliza as seguintes tecnologias:

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estruturação semântica das páginas |
| CSS3 | Estilização, identidade visual e responsividade |
| JavaScript | Interatividade, validações e recursos demonstrativos |
| Leaflet 1.9.4 | Visualização interativa de mapas |
| OpenStreetMap | Dados cartográficos para a apresentação do mapa |
| localStorage | Armazenamento local de favoritos e alertas demonstrativos |
| Git | Controle de versões |
| GitHub | Colaboração, commits, branches e Pull Requests |
| Visual Studio Code | Ambiente de desenvolvimento |

O projeto utiliza **HTML, CSS e JavaScript** como tecnologias fundamentais.

A biblioteca Leaflet é utilizada especificamente para a visualização cartográfica e depende de conexão com a internet para carregar os recursos externos necessários.

O Front-End não possui servidor de aplicação, autenticação real, OAuth, banco de dados integrado ou coleta centralizada de informações.

---

## 3. Páginas do projeto

O MovaSI possui **sete páginas HTML**, organizadas para apresentar as funcionalidades do protótipo.

| Página | Descrição |
|---|---|
| `index.html` | Página inicial, apresentação do projeto e interfaces demonstrativas de login e cadastro |
| `painel.html` | Mapa interativo, pontos de referência, perfil de mobilidade e favoritos |
| `alertas.html` | Registro, consulta e filtragem de alertas demonstrativos |
| `sobre.html` | Apresentação do problema, da solução e dos objetivos do MovaSI |
| `perguntas frequentes.html` | Perguntas frequentes e informações sobre o funcionamento do projeto |
| `formas.html` | Apresentação das integrantes, identificação acadêmica e perfis |
| `contato.html` | Formulário de contato com validações e feedback demonstrativo |

A navegação entre as páginas foi planejada para manter consistência visual e facilitar a utilização da aplicação.

---

## 4. Organização do repositório

A estrutura principal publicada no GitHub está organizada da seguinte forma:

```text
MovaSI-Solução-Global-2026/
│
├── ativos/
│
├── CSS/
│
├── js/
│
├── index.html
├── painel.html
├── alertas.html
├── sobre.html
├── perguntas frequentes.html
├── formas.html
├── contato.html
│
├── IDENTIFICAÇÃO_EQUIPE.txt
├── .gitignore
└── README.md
```

### Organização das pastas

**`ativos/`**

Contém os recursos visuais utilizados no projeto, incluindo elementos de identidade visual e imagens.

**`CSS/`**

Contém os arquivos responsáveis pela estilização, organização visual e adaptação da interface a diferentes tamanhos de tela.

**`js/`**

Contém os scripts JavaScript utilizados para interatividade, navegação, validação e funcionalidades demonstrativas.

**Arquivos HTML**

Representam as sete páginas que compõem a aplicação.

**`IDENTIFICAÇÃO_EQUIPE.txt`**

Reúne informações de identificação acadêmica da equipe.

**`.gitignore`**

Define os arquivos e diretórios que não devem ser incluídos no controle de versão.

**`README.md`**

Apresenta a documentação geral do projeto.

---

## 5. Como executar o MovaSI

### Requisitos

- Navegador atualizado.
- Visual Studio Code (opcional).
- Extensão Live Server (opcional).
- Conexão com a internet para carregamento do mapa.

### Passo a passo

1. Acesse o repositório oficial do projeto no GitHub.
2. Faça o download do código-fonte utilizando a opção `Code > Download ZIP`.
3. Extraia o conteúdo para uma pasta do computador.
4. Abra a pasta no Visual Studio Code, se desejar.
5. Localize o arquivo `index.html`.
6. Abra o arquivo no navegador ou utilize a extensão Live Server.
7. Navegue entre as páginas para conhecer as funcionalidades.

### Observações sobre o funcionamento

As funcionalidades de interface, formulários e armazenamento local são demonstrativas.

A visualização cartográfica requer conexão com os serviços externos utilizados pelo Leaflet e pelo OpenStreetMap.

Não é necessário configurar um servidor de aplicação ou banco de dados para executar a demonstração do Front-End.

---

## 6. Funcionalidades em JavaScript

O projeto utiliza JavaScript para proporcionar interatividade e demonstrar recursos de uma aplicação web.

### 6.1. Navegação responsiva

O sistema apresenta mecanismos de navegação adaptados a diferentes dispositivos.

Entre os recursos desenvolvidos estão:

- Menu adaptável para dispositivos móveis.
- Abertura e fechamento da navegação.
- Organização dos links entre as páginas.
- Recursos de acessibilidade associados aos controles interativos.

### 6.2. Login e cadastro demonstrativos

A página inicial apresenta interfaces de login e cadastro para demonstrar a experiência de acesso à plataforma.

As interações incluem:

- Alternância visual entre login e cadastro.
- Validação de campos.
- Mensagens de orientação.
- Feedback visual ao usuário.

**Limitação:** não existe criação real de contas, autenticação em servidor ou integração com provedores externos.

### 6.3. Mapa interativo

A página do painel utiliza Leaflet e OpenStreetMap para a apresentação de referências geográficas.

A demonstração inclui:

- Visualização do mapa.
- Pontos de referência.
- Interação com elementos cartográficos.
- Recursos demonstrativos relacionados à mobilidade.
- Consulta e armazenamento local de favoritos.

O mapa não calcula rotas acessíveis verificadas e não garante as condições reais dos trajetos.

### 6.4. Alertas colaborativos

O MovaSI apresenta uma interface demonstrativa para registrar e consultar informações relacionadas a obstáculos urbanos.

As funcionalidades incluem:

- Formulário de registro de relatos.
- Consulta de ocorrências simuladas.
- Filtros de informações.
- Feedback das interações.
- Armazenamento local no navegador, conforme os recursos implementados.

Os registros não são publicados em uma base de dados coletiva nem compartilhados em tempo real entre usuários.

### 6.5. Perguntas frequentes

A página de perguntas frequentes apresenta informações sobre o funcionamento do MovaSI.

O recurso de busca permite localizar conteúdos de acordo com os termos informados pelo usuário.

### 6.6. Formulário de contato

O formulário de contato demonstra boas práticas de interação com dados fornecidos pelo usuário.

Entre os recursos estão:

- Verificação de campos obrigatórios.
- Validação do formato do e-mail.
- Mensagens de feedback.
- Indicação de informações que precisam ser corrigidas.

**Limitação:** o formulário não envia mensagens reais.

---

## 7. Responsividade

O Front-End do MovaSI foi desenvolvido para adaptar a apresentação do conteúdo a diferentes tamanhos de tela.

O CSS utiliza recursos de organização visual e media queries para ajustar os elementos da interface.

### Dispositivos considerados

- Smartphones.
- Tablets.
- Computadores e notebooks.

### Recursos de adaptação

- Organização responsiva dos conteúdos.
- Ajuste de espaçamentos e dimensões.
- Navegação adaptável.
- Redimensionamento dos elementos da interface.
- Melhor distribuição de formulários, cartões e informações.

O projeto também recebeu uma contribuição específica para melhorar a responsividade em telas intermediárias, registrada no Pull Request #2.

---

## 8. Acessibilidade digital

A acessibilidade é um dos pilares da proposta do MovaSI.

Além de abordar a mobilidade urbana inclusiva, o projeto procura aplicar boas práticas de desenvolvimento web acessível.

### Práticas consideradas

- Estruturação semântica em HTML.
- Organização hierárquica dos títulos.
- Navegação por links e botões.
- Identificação dos campos dos formulários.
- Textos alternativos em imagens.
- Utilização de atributos ARIA em componentes interativos.
- Adaptação da interface a dispositivos móveis.
- Mensagens de feedback nas interações.

Durante o desenvolvimento colaborativo, também foram realizadas melhorias específicas relacionadas à acessibilidade dos links da equipe.

Essas alterações foram registradas no Pull Request #1.

**Observação:** a adoção dessas práticas não equivale a uma certificação formal de conformidade com normas de acessibilidade.

---

## 9. Identidade visual

A identidade visual do MovaSI foi concebida para representar movimento, inclusão e autonomia.

A marca utiliza uma composição visual que remete à mobilidade de pessoas que utilizam cadeira de rodas.

### Paleta visual

- Fundo escuro.
- Ciano.
- Verde.
- Rosa.

As cores e os elementos visuais são utilizados para criar uma identidade consistente entre as páginas do projeto.

### Nome e slogan

**MovaSI**

**Seu movimento gera MovimentAÇÃO.**

O nome e a identidade do projeto reforçam a proposta de participação, deslocamento e transformação social.

Os recursos gráficos utilizados na aplicação estão organizados na pasta `ativos/` do repositório.

---

## 10. Controle de versão com Git e GitHub

O MovaSI utiliza Git e GitHub para organizar o desenvolvimento colaborativo.

O controle de versão permite registrar modificações, identificar responsáveis, acompanhar o histórico e integrar contribuições de diferentes integrantes.

### Estratégia de colaboração

O projeto utilizou branches para organizar o desenvolvimento e as revisões.

Entre as branches utilizadas estão:

- `principal` — branch principal de entrega.
- `desenvolvimento` — integração das melhorias.
- `revisão-css-gleycianne` — contribuição relacionada à responsividade.
- `revisão-html-isabella` — contribuição relacionada à acessibilidade.

Os nomes das branches refletem a organização apresentada durante o desenvolvimento no GitHub.

### Pull Requests concluídos

| Pull Request | Responsável | Alteração | Situação |
|---|---|---|---|
| #1 | Isabella Fernandes dos Passos Prado | Melhoria de acessibilidade dos links da equipe | Mesclado |
| #2 | Gleycianne Arruda de Freitas Silva | Melhoria da responsividade em telas intermediárias | Mesclado |
| #3 | Diane Vinha Arantes | Integração das contribuições para a versão 1.0 | Mesclado |

### Integração da versão 1.0

O Pull Request #3 consolidou o trabalho colaborativo realizado na branch de desenvolvimento.

A integração incluiu cinco commits associados às melhorias e ao processo de mesclagem dos Pull Requests anteriores.

**Commit de mesclagem do PR #3:** `1d34ba7`

As contribuições individuais permanecem registradas no histórico do repositório, permitindo acompanhar a evolução da aplicação.

O objetivo dessa organização é demonstrar a utilização prática de Git e GitHub em um projeto colaborativo.

---

## 11. Equipe de desenvolvimento

O projeto foi desenvolvido pelas seguintes integrantes:

| Integrante | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|
| Diane Vinha Arantes | 575041 | 1TDSPS | [@dianevinhaarantes](https://github.com/dianevinhaarantes) | [Perfil](https://www.linkedin.com/in/diane-arantes) |
| Gleycianne Arruda de Freitas Silva | 575040 | 1TDSPS | [@gleycifreitas](https://github.com/gleycifreitas) | [Perfil](https://www.linkedin.com/in/gleyci) |
| Isabella Fernandes dos Passos Prado | 574951 | 1TDSPS | [@isabellaprado25](https://github.com/isabellaprado25) | [Perfil](https://www.linkedin.com/in/isabellaprado20) |

O desenvolvimento foi realizado de forma colaborativa, com registro de alterações e integração das contribuições no GitHub.

---

## 12. Repositório oficial

O código-fonte e o histórico de desenvolvimento do Front-End estão disponíveis no repositório:

**MovaSI — Global Solution FIAP 2026/2**

https://github.com/dianevinhaarantes/MovaSI-Global-Solution-2026

O repositório é utilizado para armazenar os arquivos, documentar o projeto e registrar sua evolução por meio de commits e Pull Requests.

---

## 13. Contato

Os perfis públicos das integrantes estão disponibilizados na seção de equipe.

O projeto também apresenta uma página de contato para demonstração de formulários e validações.

**O formulário de contato não realiza o envio de mensagens reais.**

---

## 14. Limitações do protótipo acadêmico

O MovaSI, na versão 1.0, apresenta funcionalidades de demonstração.

Por esse motivo, é importante esclarecer as limitações da aplicação.

### Mobilidade e acessibilidade urbana

- O mapa não confirma a segurança de ruas e calçadas.
- Não existe verificação presencial das condições de acessibilidade.
- A ausência de alertas não representa garantia de acesso.
- Não são calculadas rotas acessíveis verificadas.
- As informações não constituem um serviço público de navegação.

### Cadastro e autenticação

- O login e o cadastro são demonstrativos.
- Não há autenticação real.
- Não existe integração ativa com provedores de identidade.

### Alertas e favoritos

- Os alertas são demonstrativos.
- Não há publicação coletiva em tempo real.
- Os dados locais podem permanecer somente no navegador utilizado.
- Não existe armazenamento centralizado em servidor.

### Contato

- O formulário possui finalidade demonstrativa.
- Não realiza envio efetivo de mensagens.

### Integração com outras disciplinas

O projeto Java e a modelagem de banco de dados Oracle representam entregas complementares da Global Solution.

**Nesta versão, não existe integração ativa entre o Front-End, o sistema Java e o banco de dados Oracle.**

---

## 15. Possibilidades de evolução

O MovaSI foi concebido como uma proposta que poderá receber melhorias futuras.

Entre as possibilidades de evolução estão:

- Implementação de autenticação real.
- Integração com banco de dados.
- Armazenamento centralizado de informações.
- Publicação colaborativa de alertas.
- Mecanismos de moderação e validação de ocorrências.
- Atualização de informações por usuários autorizados.
- Integração com serviços de geolocalização.
- Desenvolvimento de critérios para rotas acessíveis.
- Ampliação dos testes de acessibilidade digital.
- Integração entre Front-End, Java e banco de dados.
- Desenvolvimento de recursos de inteligência artificial para apoio à análise de informações.

Essas possibilidades representam melhorias futuras e não funcionalidades ativas da versão 1.0.

---

## 16. Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio na revisão, organização do desenvolvimento e documentação do projeto.

A utilização dessas ferramentas ocorreu como recurso complementar às atividades acadêmicas.

As integrantes são responsáveis por compreender, revisar, validar e apresentar as funcionalidades desenvolvidas.

O uso de IA não substitui a responsabilidade técnica e acadêmica da equipe.

---

## 17. Considerações finais

O MovaSI reúne conceitos de desenvolvimento Front-End, acessibilidade digital, mobilidade inclusiva e colaboração tecnológica.

A proposta busca demonstrar como uma aplicação web pode contribuir para ampliar a discussão sobre autonomia e deslocamento de pessoas com deficiência e mobilidade reduzida.

Durante o desenvolvimento, foram aplicados conhecimentos relacionados a HTML, CSS, JavaScript, responsividade, usabilidade e controle de versões com Git e GitHub.

A versão 1.0 consolida a proposta acadêmica e as contribuições colaborativas registradas no repositório.

O projeto também estabelece uma base conceitual para futuras integrações com as demais disciplinas da Global Solution.

---

**MovaSI — Seu movimento gera MovimentAÇÃO.**

**FIAP | Global Solution 2026/2 | CitizenTech | Versão 1.0**
