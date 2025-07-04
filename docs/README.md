# Introdução

O mapa atual da instituição, apesar de bastante informativo, não possui interatividade, tornando a navegação confusa e pouco intuitiva. Tendo isso em vista, a criação de um aplicativo de localização indoor facilitaria a busca por locais específicos, como salas de aula, bibliotecas, áreas de convivência e laboratórios.
Nesse sentido, a dificuldade de locomoção dentro do campus universitário representa um desafio tanto para alunos quanto para funcionários, o que interfere na pontualidade em aulas e compromissos acadêmicos. Além disso, muitos estudantes, especialmente os calouros, não conhecem todas as instalações e espaços de estudo disponíveis, o que limita o aproveitamento da infraestrutura da faculdade.
Além disso, a ideia do projeto não se restringe apenas ao ambiente universitário. Posteriormente, o software pode ser expandido para outros espaços fechados e muito frequentados, como shoppings, hospitais e parques, onde a orientação indoor também se mostra um desafio.


* **Projeto:** Puc Maps
* **Repositório GitHub:** https://github.com/ICEI-PUC-Minas-CC-TI/ti1-2025-1-t2-manha-puc-maps
* **Membros da equipe:**

  * Anne Sudre (https://github.com/annesudre13)
  * Camila Menezes (https://github.com/meunomeecamila)
  * Daniel Gomes (https://github.com/dgpluks)
  * Mariana Fonseca (https://github.com/marifviana)
  * Saulo Peixoto (https://github.com/saulopf05)
  * Sérgio Manso (https://github.com/sergiomansoo)
  

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](files/processo-dt.pdf)

# Contexto

O problema esta inserido no contexto atual. Isso devido ao fato de utilizarmos uma tecnologia de software como solução da dificuldade escolhida.

## Problema

A dificuldade de localização em ambientes internos prejudica a mobilidade e a experiência dos usuários, tornando a navegação dentro do campus desorganizada e, muitas vezes, confusa.

## Objetivos

O principal objetivo do aplicativo é auxiliar os alunos e funcionários a se locomoverem pelo campus de forma rápida e eficiente. Para isso, a ferramenta contará com localização em tempo real.

Além da navegação tradicional, o app poderá oferecer funcionalidades adicionais, como localização de amigos dentro do campus para facilitar encontros e estudos em grupo, consulta dos cardápios dos restaurantes universitários para otimizar a escolha das refeições, sugestões personalizadas de rotas e locais, com base no perfil e nas preferências do usuário.


## Justificativa

A dificuldade de se localizar dentro do campus é um problema recorrente enfrentado diariamente tanto pelos alunos quanto pelos professores e funcionários da universidade. A falta de um mapa interativo e de uma sinalização eficiente dificulta a mobilidade, impactando a rotina academica e administrativa. Diante desse cenário, um aplicativo de navegação indoor se torna uma solução viável e inovadora para otimizar a experiência universitária.
>

## Público-Alvo
>
O público-alvo da aplicação de localização indoor na faculdade é diversificado e abrange diferentes perfis de usuários, cada um com necessidades específicas e diferentes níveis de familiaridade com tecnologia.

Os estudantes representam a maior parcela dos usuários. Dentro desse grupo, os calouros são os que mais se beneficiarão da aplicação, pois ainda estão se adaptando ao ambiente da faculdade e podem ter dificuldades para encontrar salas de aula, laboratórios e setores administrativos. Normalmente, são jovens familiarizados com tecnologia, acostumados a aplicativos de navegação, redes sociais e ferramentas digitais, o que facilita a adoção da plataforma. Já os estudantes veteranos, embora conheçam melhor o campus, podem usar o aplicativo para otimizar seu tempo, encontrar rotas mais rápidas ou acessar locais específicos em prédios que frequentam menos.

Os professores e funcionários administrativos também são um público importante. Diferentemente dos alunos, eles podem ter uma relação variada com a tecnologia, dependendo da idade e do nível de familiaridade com dispositivos móveis. Professores que dão aulas em diferentes prédios podem utilizar a aplicação para planejar seus deslocamentos, enquanto funcionários administrativos podem usá-la para ajudar estudantes e visitantes a se localizarem.

Outro grupo relevante são os visitantes e palestrantes, que geralmente não conhecem a estrutura da faculdade e podem ter dificuldades para encontrar auditórios, salas de reunião e setores administrativos. Para eles, a aplicação pode ser uma ferramenta essencial para evitar atrasos e facilitar a experiência no campus.

Por fim, pessoas com deficiência ou mobilidade reduzida também se beneficiam do aplicativo, especialmente se ele oferecer informações sobre acessibilidade, como a localização de elevadores, rampas e banheiros adaptados. Esse público pode ter necessidades específicas que devem ser levadas em consideração no desenvolvimento da solução.
>

# Product Discovery

## Etapa de Entendimento
> * **Matriz CSD**: também conhecida por Matriz de Alinhamento, é uma ferramenta utilizada no Design Thinking para organizar informações e facilitar o processo de tomada de decisão e solução de problemas;
<img src="images/matrizcsd.jpeg">

> * **Mapa de stakeholders**: ferramenta que nos permite compreender o grupo de pessoas e entidades que devemos estudar e conversar para entender mais sobre o problema
<img src="images/mapadestakeholders.jpeg">
> * **Entrevistas qualitativas**: série de entrevistas qualitativas para validar suposições e solucionar as dúvidas com as principais pessoas envolvidas;
Entrevista 1 - Paula Cardoso
<img src="images/entrevistapaulacardoso.jpeg">
Entrevista 2 - Júlia Fonseca
<img src="images/entrevistajuliafonseca.jpeg">
> * **Highlights de pesquisa**: um compilado do levantamento realizado por meio das entrevistas.
<img src="images/highlights.jpeg">

## Etapa de Definição

### Personas
Persona 1 - Clara Silva
<img src="images/persona1.png">

Persona 2 - Bruna Mendes
<img src="images/persona2.png">

Persona 3 - Sérgio Souza
<img src="images/persona3.png">

# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Aluna da Universidade   | Arranjar uma forma fácil de me locomover sem ficar perdida  | Preciso chegar nas aulas no horário e descobrir o que mais a faculdade pode me oferecer           |
| Visitante da Universidade         | Encontrar com meus amigos e conhecer um pouco mais sobre a PUC     | Quero poder ter autonomia e descobrir mais sobre o lugar, além de me orientar para palestras ou campeonatos|
| Funcionário da Universidade      | Me orientar sobre as localizações de prédios e áreas da faculdade   | Facilitará e otimizará meu trabalho, pois assim eu saberei onde são os locais que devo limpar|

## Proposta de Valor

##### Proposta para Persona 1 -> Clara Silva
<img src="images/propostavalor1.png">

##### Proposta para Persona 2 -> Bruna Mendes
<img src="images/propostavalor2.png">


##### Proposta para Persona 3 -> Sérgio Souza
<img src="images/propostavalor3.png">


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                   | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | O software deve mostrar a localização dos prédios, lanchonetes e outros locais da universidade. | ALTA       |
| RF-002 | O software deve conter divisões de filtros para diferentes categorias como aulas, lazer, locais de estudo e alimentação. | MÉDIA     |
| RF-003 | O programa deve permitir a seleção de locais principais que fiquem marcados para que o usuário possa se localizar mais rápido | MÉDIA     |
| RF-004 | ⁠O sistema deve trazer informações sobre os prédios e atividades em cada um deles. | MÉDIA     |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                              | Prioridade |
| ------- | ------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O site ou aplicativo deve estar disponível nos dias de semana | ALTA    |
| RNF-002 | O software deve ser de fácil acesso para alunos        | ALTA    |
| RNF-003 | O software deverá ser responsivo no celular principalmente      | ALTA    |

## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.
<img src="images/telafigma.png">

Tela 1 -> Tela de Início
Conta com o mapa para orientação, uma lista dos lugares da Universidade e quatro
ícones no canto superior direito: Home, para que seja possível retornar para a tela inicial,
Eventos para que o aluno possa descobrir mais sobre as notícias, Favoritos para
que o usuário possa favoritar seus prédios mais usados e as configurações. 
Além disso, há uma barra de pesquisa para que o cliente possa se localizar. 

Tela 2 -> Tela de notícias
Conta com mensagens, datas e ilustrações das notícias da faculdade. 

Tela 3 -> Favoritos
Nessa aba você pode favoritar os seus lugares preferidos para que fiquem 
com um acesso mais rápido

Tela 4 -> Configurações
Lá você pode personalizar seu aplicativo, mudando o tema, silenciando
notificações, mudando o idioma e ativando ferramentas de acessibilidade. 


### User Flow
Para deixar a ideia do projeto mais clara, a equipe fez o user flow em dois modelos:
fluxograma e telas, como pedido nos links de tutoriais enviados. <br>
Fluxograma:
<img src="images/userflowfluxo.jpg">
Telas:
[userflow](https://www.figma.com/design/hFSz9eHJWNaeAVlLdt1ugj/user-flow---puc-maps?node-id=0-1&t=WEsV5WqLnXucLKT2-1)
<img src="images/userflowtelas.png">



### Protótipo Interativo
<img src="images/prototipointerativo.png">
Link do protótipo:
[Protótipo](https://marvelapp.com/prototype/g06790g)
<br>
<br>
<br>


# Metodologia

Para a realização deste trabalho, foram conduzidas pesquisas com diversos grupos do público-alvo, incluindo alunos, professores e funcionários da universidade. A análise dos dados coletados por meio de entrevistas individuais foi realizada de forma colaborativa, garantindo a inclusão de múltiplas perspectivas e enriquecendo o projeto com diferentes realidades.
A equipe se organizou principalmente por meio de redes sociais, facilitando a comunicação e a realização de reuniões entre membros responsáveis por tarefas semelhantes. O laboratório da universidade serviu como principal ponto de encontro para troca de ideias e compartilhamento de pesquisas. Além disso, o uso de arquivos editáveis, como os do Google Docs, garantiu que todas as contribuições fossem acessíveis a todos os integrantes do grupo.
A divisão de papéis foi estruturada considerando as habilidades e interesses de cada membro. No entanto, reuniões coletivas foram realizadas para que todos pudessem contribuir com suas opiniões em todas as etapas do trabalho. As atividades desenvolvidas na plataforma Miro foram elaboradas de forma colaborativa durante reuniões e aulas. Já as demais tarefas foram organizadas em três áreas principais: parte criativa, produção textual e formatação e estruturação, sendo que cada uma contou com a responsabilidade de dois integrantes.


## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Entrega de Arquivos | Miro       | https://miro.com/welcomeonboard/V3VMTm9WUU0wMityVFp1b1JMd1FadlFjVlhRbEo5MDU4SXg1R21sY2xHMWxSZUN1RWd5aCttenViUXgwMDBZVTRka2NLeDNkVEl1M252RmErbU5Vai82THk2TG81Wm05OUtBdGlEZjFjZnR2TkZpRlQ0MkRsU0JvUlZaY1ZFdXJBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=611181900261      |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-CC-TI/ti1-2025-1-t2-manha-puc-maps  |
| Protótipo Interativo       | MarvelApp  | https://marvelapp.com/prototype/g06790g |
| Figma fluxo de telas                        |  Figma       |            https://www.figma.com/design/hFSz9eHJWNaeAVlLdt1ugj/user-flow---puc-maps?node-id=0-1&t=WEsV5WqLnXucLKT2-1                                        |

## Gerenciamento do Projeto
Como falado anteriormente no tópico de Metodologia, a equipe de seis
integrantes foi divididas em duplas, sendo Camila e Daniel responsáveis pela parte
criativa, Anne e Mariana pela parte textual e Saulo e Sérgio responsáveis
pela formatação e estruturação.
Porém, nas reuniões feitas com o grupo, cada integrante pôde opinar no
quesito que achasse necessário, fazendo assim com que 
todas as tarefas fossem feitas de forma colaborativa. 
A seguir, apresentamos o quadro com a divisão das tarefas:
<img src="images/kanban.png">
>


# Solução Implementada
O Puc Maps é uma solução desenvolvida para facilitar a vida de estudantes, visitantes e funcionários da PUC.
Na página inicial, o usuário encontra um mapa interativo com os principais pontos da universidade, além de informações sobre o funcionamento do aplicativo. Ao clicar em um dos pontos do mapa, é possível visualizar o nome do local.

No lado direito da tela, uma aba lateral oferece diversas funcionalidades, como:
- Notícias: acompanhe as principais novidades da PUC e compartilhe informações com outros usuários.
- Cardápios: acesse os cardápios dos restaurantes e lanchonetes da universidade
- Avaliações: avalie seus lugares favoritos dentro do campus e veja a opinião de outros usuários.
- Lista de Lugares: explore e conheça melhor os espaços da universidade, com informações detalhadas sobre cada local.


## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução. 

[[Vídeo do projeto](images/videopucmaps.mov)](https://youtu.be/9BI0bWuSLiM?feature=shared)
Link do vídeo: https://youtu.be/9BI0bWuSLiM?feature=shared


## Funcionalidades

##### Funcionalidade 1 - Lista de notícias recentes
Ao clicar no botão de notícias, representado por um calendário, o usuário terá acesso aos eventos da faculdade.
As notícias podem ser tanto de palestras e oficinas quanto de novidades da universidade, como descontos em lanchonetes e obras.
Nesse filtro, é possível ver o local, a data e o horário. Quando a notícia é clicada aparece informações adicionais sobre ela.

* **Estrutura de dados:**
"noticias" : [
{
"id": 1,
"nome": "Workshop WebTech",
"data": "29/04",
"local": "Teatro PUC Minas",
"descricao": "Temos uma ótima oportunidade para quem deseja dar os primeiros passos no
mundo do Linux! O nosso colega Henrique Mendonça vai conduzir um workshop super
interessante sobre Linux para iniciantes. Ele vai compartilhar sua experiência com a plataforma
com dicas, truques e os fundamentos essenciais para quem quer aprender a usar o sistema.",
"curso": "exatas e informática"

* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na Página de Notícias
    
* **Tela da funcionalidade**:
![alt text](image.png)

##### Funcionalidade 2 - Mapa da faculdade com ícones visíveis
Ao clicar no botão Home (ícone de casa), o usuário é redirecionado para a página principal, onde está localizado o mapa interativo.
Esse mapa oferece funcionalidades como filtros, barra de pesquisa e uma lista de locais, permitindo uma navegação rápida, fácil e precisa.
Sempre que o usuário interage com qualquer uma dessas ferramentas — seja selecionando um item da lista ou realizando uma busca — o local correspondente é automaticamente destacado no mapa.
Para a construção desse recurso, será utilizada a biblioteca Leaflet, uma ferramenta JavaScript de código aberto, especializada em mapas interativos. Ela permite trabalhar com coordenadas geográficas (latitude e longitude), garantindo precisão na localização dos pontos dentro do campus.

* **Estrutura de dados:**
“lugares”: [
{
"id": 1,
"nome": "Boca do Forno",
"descricao": "A Boca do Forno é uma lanchonete que
conta com doces e salgados disponíveis para os alunos.",
"curso": "indefinido"
},

* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal 
    
* **Tela da funcionalidade**:
![alt text](image-1.png)

##### Funcionalidade 3 - Filtros com categorias e barra de pesquisa
Ao clicar no botão de filtros/pesquisa, o usuario verá diversas opções para escolher entre caracteristicas em comum como relacionado a alimentação, relacionado a descanço, ou até mesmo a solução de problemas, como secretarias, recebendo varios resultados que se encontram nessa classificação. Além disso, poderá pesquisar por nomes dos destinos que deseja ir, indo desde biblioteca ou secretarias até lanchonetes, recebendo apenas resultados que se identificam com o digitado

* **Estrutura de dados:**
“lugares”: [
{
"id": 2,
"nome": "Posto médico",
"descricao": "O posto médico oferece atendimento básico
de saúde, primeiros socorros e orientações para a
comunidade universitária.",
"curso": "indefinido"
},

* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal
  * Faça uma pesquisa clicando na barra e digitando o nome ou clicando em filtros
    
* **Tela da funcionalidade**:
![alt text](image-3.png)

##### Funcionalidade 4 - Lista dos locais com opção de favoritar
Ao clicar no coração cinza à direita do nome de um local, ele é favoritado. Quando o botão de coração é clicado a aba "favoritos", onde o usuário encontra seus locais favoritados dentro da universidade, é
aberta. Agora, dentro da aba "favoritos" o usuário pode clicar em um dos locais, sendo direcionado para uma breve descrição.

* **Estrutura de dados:**
“lugares”: [
{
"id": 3,
"nome": "Biblioteca",
"descricao": "Aqui você encontra livros sobre diversos
assuntos e com matérias relacionadas aos cursos da PUC e
extras, além de livros de entretenimento. Áreas de estudos
com computadores e áreas de descanso também inclusas.",
"curso": "indefinido"
},

* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal
  * Clique na barra lateral e em Lista de Locais
  * Favorite ou desfavorite lugares
    
* **Tela da funcionalidade**:
![alt text](image-12.png)

##### Funcionalidade 5 - Página de informação específica sobre cada notícia
Ao clicar em uma notícia na página inicial, o usuário será levado para uma nova página com o conteúdo completo daquela notícia. Essa página tem um formato fixo, mas se adapta automaticamente à notícia escolhida, exibindo título, imagem, data e texto. O objetivo é facilitar a leitura e o acesso a informações importantes de forma simples e rápida.

* **Estrutura de dados:**
“noticias”: [{
"id": 2,
"nome": "Comp Software Day",
"data": "21/03",
"local": "Teatro PUC Minas",
"descricao": "O Comp Software Day reuniu especialistas da área de tecnologia
para discutir temas atuais e relevantes do setor de software. O evento contou com a
apresentação de assuntos como Workshop Linkedin, palestra acerca do
funcionamento do deepseek, premiação dos melhores trabalhos interdisciplinares,
governança de IA entre outros assuntos relevantes na área tecnológica. A
abordagem desses tópicos promoveu o intercâmbio de conhecimento entre
estudantes, professores e profissionais do mercado.",
"curso": "exatas e informática"
},

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na Página de Notícias
  * Clique em uma notícia específica para ver mais informações
    
* **Tela da funcionalidade**:
![alt text](image-4.png)

##### Funcionalidade 6 - Página de informação específica sobre cada local
Ao clicar em um local na tela, o usuário será levado para uma página com informações específicas sobre aquele espaço. O conteúdo será adaptado conforme o tipo de ambiente: Para salas de aula ou prédios acadêmicos, serão mostradas a descrição, finalidade e os cursos que utilizam o espaço. Para restaurantes ou cantinas, serão exibidos o cardápio e os horários de funcionamento. A interface destacará visualmente o local e trará textos explicativos claros, facilitando o reconhecimento e a compreensão do espaço. Isso melhora a navegação, ajuda na orientação dentro do campus e oferece acesso rápido a informações úteis.

* **Estrutura de dados:**
“lugares”: [
{
"id": 5,
"nome": "Prédio 34",
"descricao": "Prédio de laboratórios de informática e de
ciências naturais.",
"curso": "ciências exatas e natureza"
},

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na Lista de locais
  * Clique em um local específico para ver mais informações
    
* **Tela da funcionalidade**:
![alt text](image-11.png)

##### Funcionalidade 7 - Barra de pesquisa para a lista de lugares
Para facilitar a pesquisa de lugares que o usuário queira ver informações ou favoritar, há uma barra de pesquisa que delimita as opções ao que o usuário digita,
garantindo assim uma fácil busca por lugares.

* **Estrutura de dados:**
“lugares”: [
{
"id": 5,
"nome": "Prédio 34",
"descricao": "Prédio de laboratórios de informática e de
ciências naturais.",
"curso": "ciências exatas e natureza"
},

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na Lista de lugares
  * Utilize a barra de pesquisa para delimitar a busca
    
* **Tela da funcionalidade**:
![alt text](image-5.png)


##### Funcionalidade 8 - Página de Avaliações
Ao clicar no ícone de “Nos Avalie”, na página de configurações, o usuário será redirecionado para A página de avaliações, que conta com alguns formulários para serem preenchidos, a fim
de otimizar a experiência do cliente e avaliar lugares da universidade. Após serem enviadas, as informações serão armazenadas em um json server, para posteriormente poderem ser apresentadas.

* **Estrutura de dados:**
{
"avaliacoes": {
"id": 1,
"nome": "João Silva",
"nota": 4.5,
"comentario": "Excelente experiência, recomendo!",
"data": "2025-05-14",
"itemAvaliador": "Curso de Programação"
}

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na página de Avaliações
  * Preencha os formulários
    
* **Tela da funcionalidade**:
![alt text](image-6.png)

##### Funcionalidade 9 - Exibição de Cardápios
Ao clicar na seção de Cardápios, o usuário encontrará nomes e imagens dos restaurantes e lanchonetes da PUC, para que ele possa escolher entre as diversas opções.
A seção utiliza informações de um json server para obter os nomes

* **Estrutura de dados:**
{
"menu": {
"id": 1,
"nome": "Restaurante 1",
"latitude": 04647,
"longitude": 0646373735,
"itens": Enrolado..,
}

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na página de cardápios
    
* **Tela da funcionalidade**:
![alt text](image-8.png)


##### Funcionalidade 10 - Exibição do menu de cada Restaurante
Ao clicar na seção de Cardápios, o usuário encontrará nomes e imagens dos restaurantes e lanchonetes da PUC, para que ele possa escolher entre as diversas opções.
A seção utiliza informações de um json server para obter os nomes. Ao clicar em um deles, apareçerá o cardápio completo do local. 

* **Estrutura de dados:**
{
"menu": {
"id": 1,
"nome": "Restaurante 1",
"latitude": 04647,
"longitude": 0646373735,
"itens": Enrolado..,
}

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na página de cardápios
  * Escolha um e veja o menu completo
    
* **Tela da funcionalidade**:
![alt text](image-7.png)


##### Funcionalidade 11 - Página com avaliações dos usuários
Após fazer uma avaliação sobre algum lugar da universidade, o usuário tem também a oportunidade de conferir avaliações de outros usuários, clicando em "Ver avaliações"

* **Estrutura de dados:**
{
"avaliacoes": {
"id": 2,
"nome": "Felipe Silva",
"nota": 5,
"comentario": "Perfeito!",
"data": "2024-05-14",
"itemAvaliador": "Curso de Engenharia"
}

* **Instruções de acesso:**
  Abra o site e efetue o login
  * Acesse o menu principal e abra a barra lateral
  * Em seguida, clique na página de avaliações
  * Clique em ver avaliações
    
* **Tela da funcionalidade**:
![alt text](image-10.png)


##### Funcionalidade 12 - Cadastro para  novas notícias
A funcionalidade de cadastro de notícias permite que os usuários adicionem novas notícias ao site, mantendo o conteúdo sempre atualizado e relevante. Por meio do preenchimento de um formulário simples, os usuários podem registrar informações completas sobre uma nova notícia, que será exibida na página de notícias para todos os visitantes.

* **Estrutura de dados:**
{
  "titulo": "Título da Notícia",
  "data": "dd/mm/aaaa - Local do Evento",
  "descricao": "Descrição breve da notícia...",
  "descricao-completa": "Descrição completa da notícia, com todos os detalhes...",
  "imagem": "URL ou caminho da imagem"
}


* **Instruções de acesso:**
  
  Acesse o menu principal e abra a barra lateral.

  Clique na página Cadastrar Notícias.

  Preencha os campos obrigatórios (ex: título, descrição, conteúdo) e envie.

  A nova notícia será exibida automaticamente na página de notícias do site
    
* **Tela da funcionalidade**:
![alt text](image-9.png)





## Estruturas de Dados

##### Estrutura de Dados - Locais

Registra os locais do campus e sua latitude e longitude para ser usada no mapa

```json
  {
    "id": 1,
   "nome": "Posto Médico",
   "descricao": "O posto médico da faculdade é uma unidade de apoio à saúde voltada para atender estudantes, professores e funcionários da instituição. No local, são oferecidos atendimentos ambulatoriais de        baixa complexidade, como primeiros socorros, aferição de pressão, curativos, administração de medicamentos e orientações de saúde. Além disso, é comum oferecer campanhas de vacinação, ações de prevenção e       encaminhamentos para serviços externos quando necessário, promovendo o bem-estar da comunidade acadêmica.",
   "coords": [-19.9231362, -43.9934320],
   "filtro":"Ajuda"
  }
  
```

##### Estrutura de Dados - Restaurantes

Registra os restaurantes da universidade e seus cardápios

```json
  {
    "id": "bocadoforno",
    "nome": "Lanchonete Boca do Forno",
    "cardapio": {
      "Salgados": [
        "Coxinha de frango - R$ 10,20",
        "Coxinha de frango com catupiry - R$ 12,60",
        "Quibe com catupiry - R$ 15,00",
        "Risole de milho com catupiry - R$ 12,60"
      ],
      "Assados": [
        "Enrolado de presunto e mussarela - R$ 17,40",
        "Pastel assado frango com catupiry - R$ 13,80",
        "Folhado de queijo - R$ 13,80",
        "Bauru assado - R$ 15,00"
      ],
      "Doces": [
        "Brigadeiro (25 unidades) - R$ 42,25",
        "Beijinho recheado com Nutella (25 unidades) - R$ 79,00",
        "Docinho de Churros (25 unidades)- R$ 50,75",
        "Moranguinho (25 unidades) - R$ 49,75",
        "Brigadeiro colorido Taça (25 unidades) - R$ 92,25",
        "Brigadeiro de Colher (25 unidades)- R$ 92,25",
        "Brigadeiro Oreo (25 unidades)- R$ 54,00"
      ],
      "Tortas Doces": [
        "Torta Boca do Forno - R$ 93,00",
        "Torta Bolo de Limão - R$ 93,00",
        "Torta Mousse de Limão - R$ 106,00",
        "Torta Morango com Chantilly (Estação) - R$ 106,60"
      ]
    }
  }
```

##### Estrutura de Dados - Notícias

Registra as notícias da universidade e seus eventos

```json
  {
    "titulo": "PUC Aberta",
        "data": "06/05-09/05 - PUC Minas Coreu",
        "descricao": "O PUC Aberta é a oportunidade perfeita para você explorar os cursos oferecidos por uma das melhores universidades do mundo. Mais do que uma simples mostra de profissões...",
        "descricao-completa":"O PUC Aberta é a oportunidade perfeita para você explorar os cursos oferecidos por uma das melhores universidades do mundo. Mais do que uma simples mostra de profissões, o evento            oferece uma experiência imersiva, onde você pode conhecer a estrutura dos campi, conversar com professores e alunos e descobrir tudo que a PUC Minas tem a oferecer O evento acontecerá no mês de maio             nos campi da PUC Minas e a programação conta com feira de cursos de graduação, palestras dos cursos, oficinas e visitas guiadas ao laboratórios. Será incrível.",
        "imagem": "../assets/images/pucaberta.jpg"
  }
```

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

**Fonts:**

* Font Awesome - [https://fontawesome.com/]

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) 
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) 
* Leaflet - [https://leafletjs.com/]



# Referências

As referências utilizadas no trabalho foram:

* RAMOS, Cristhiane da Silva. Visualização cartográfica e cartografia multimídia: conceitos e tecnologias. São Paulo: Editora UNESP, 2005.
* PUC Minas. Campus Coração Eucarístico. Disponível em: https://www.pucminas.br/mundopucminas/Paginas/CampusCoracaoEucaristico.aspx#:~:text=O%20maior%20entre%20os%20dez,miss%C3%A3o%20inspirada%20no%20esp%C3%ADrito%20human%C3%ADstico. Acesso em: 1 abr. 2025.
* PUGLIESI, Edmur Azevedo. Desenvolvimento de mapa dinâmico para sistema de navegação terrestre. 2002.
* LEAFLET. Leaflet – a JavaScript library for interactive maps. Disponível em: https://leafletjs.com/. Acesso em: 18 jun. 2025.
* MDN WEB DOCS. JavaScript – Documentação oficial. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript. Acesso em: 18 jun. 2025.
* OPENSTREETMAP. OpenStreetMap – Dados de mapa livres e colaborativos. Disponível em: https://www.openstreetmap.org/. Acesso em: 18 jun. 2025.
* GOOGLE DEVELOPER. Google Maps Platform Documentation. Disponível em: https://developers.google.com/maps. Acesso em: 18 jun. 2025.
