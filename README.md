# 🍕 Pizzaria Digital — E-Commerce Single Page Application

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/DOM-6C63FF?style=for-the-badge&logo=javascript&logoColor=white" alt="DOM API">
  <img src="https://img.shields.io/badge/SPA-252525?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Single Page Application">
</p>

## 🚀 Demonstração

Aplicação de e-commerce desenvolvida para simular uma experiência de compra digital de pizzas gourmet, com catálogo interativo, personalização de produtos e fluxo de checkout.

**🌐 Visualização online:** [Acessar Pizzaria Digital](https://projeto-pizza-gourmet.vercel.app/)

## 📖 Sobre o projeto

O **Pizzaria Digital** é uma aplicação de comércio eletrônico desenvolvida com HTML5, CSS3 e JavaScript Vanilla, baseada em desafios práticos da plataforma B7Web e posteriormente expandida com funcionalidades adicionais e aprimoramentos de interface.

O projeto simula uma boutique digital de pizzas gourmet, oferecendo uma experiência de navegação interativa por meio de uma Single Page Application (SPA), sem necessidade de frameworks ou bibliotecas externas.

A aplicação contempla uma galeria dinâmica de produtos, seleção de tamanhos, atualização automática de preços, gerenciamento de carrinho de compras, cálculo de descontos e finalização simulada de pedidos.

Também foram implementados recursos de alternância entre temas Black & White, microinterações visuais, efeitos de interação e adaptação da interface para diferentes dispositivos.

O desenvolvimento teve como foco o aprofundamento em manipulação do DOM, organização de dados, gerenciamento de estado, lógica de negócio e construção de interfaces responsivas.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estruturação semântica da aplicação e criação de templates para renderização dinâmica.
- **CSS3:** estilização da interface, variáveis CSS, temas, animações e responsividade.
- **JavaScript ES6+:** implementação da lógica de negócio, gerenciamento do carrinho e interatividade.
- **DOM API:** manipulação dinâmica dos elementos HTML e atualização da interface.
- **CSS Grid:** organização responsiva da galeria de produtos.
- **Flexbox:** construção de layouts flexíveis e alinhamento dos componentes.

## ✨ Funcionalidades

### 🛒 E-Commerce e gerenciamento de pedidos

- **Catálogo de produtos:** exibição dinâmica das pizzas disponíveis para compra.
- **Seleção de tamanhos:** escolha entre diferentes opções de tamanho para cada produto.
- **Atualização dinâmica de preços:** alteração dos valores conforme o tamanho selecionado.
- **Carrinho de compras:** gerenciamento dos produtos adicionados durante a navegação.
- **Controle de quantidades:** possibilidade de incrementar ou decrementar a quantidade de cada item.
- **Identificação de produtos por variação:** diferenciação de produtos iguais com tamanhos distintos no carrinho.
- **Cálculo automático de valores:** atualização do subtotal e total da compra.
- **Sistema de descontos:** aplicação de desconto comercial de 10% sobre o subtotal.
- **Checkout interativo:** apresentação de um resumo detalhado dos itens e valores do pedido.

### 🎨 Interface e experiência visual

- **Black & White Theme (Premium Dark/Light Mode):** alternância entre uma interface minimalista clara e um ambiente escuro com preto absoluto (`#000000`).
- **Identidade visual sofisticada:** combinação de superfícies minimalistas com detalhes dourados (`#D4AF37`).
- **Microinterações tridimensionais:** efeitos visuais nos botões e controles de quantidade utilizando transformações e sombras dinâmicas.
- **Transições suaves:** animações de mudança de cores e propriedades visuais durante a alternância de temas.
- **Feedback visual:** respostas visuais às interações realizadas pelo usuário.
- **Interface responsiva:** adaptação dos componentes para diferentes resoluções de tela.
- **Renderização dinâmica:** atualização dos elementos da aplicação sem recarregamento da página.

## 🚀 Funcionalidades Premium implementadas

Além da lógica padrão do e-commerce, esta versão conta com aprimoramentos voltados à experiência visual e à interação com o usuário.

### Black & White Theme — Premium Dark/Light Mode

Sistema nativo de alternância de temas desenvolvido com JavaScript e CSS Variables, permitindo transformar a interface de um visual minimalista claro para um ambiente Black Deep sofisticado com apenas um clique.

O tema escuro utiliza preto absoluto como cor de base, acompanhado de detalhes dourados que reforçam a identidade visual da aplicação.

### Microinterações tridimensionais (3D Tátil)

Os controles de quantidade e botões de ação apresentam feedback visual por meio de transformações CSS, alterações de escala e reorganização dinâmica de sombras durante as interações.

### Camada dinâmica de checkout

Módulo de finalização de pedidos que constrói dinamicamente um resumo financeiro detalhado, apresentando os produtos selecionados, quantidades, subtotal, descontos e valor final.

A interface utiliza uma camada de sobreposição com efeitos de desfoque para destacar o processo de checkout e concentrar a atenção do usuário.

## ⚙️ Implementação técnica

### Organização e clonagem de elementos do DOM

A aplicação utiliza templates HTML armazenados em elementos da classe `.models` para servir como modelos de criação dos componentes dinâmicos.

O método `cloneNode(true)` permite duplicar estruturas existentes, preservando seus elementos internos e facilitando a construção dos cartões de produtos e demais componentes da interface.

Essa abordagem evita a necessidade de reconstruir toda a estrutura HTML por meio de concatenações de strings.

### Delegação e identificação de eventos

A identificação dos produtos selecionados utiliza o método `closest(".pizza-item")` para localizar o elemento correspondente a partir do componente que recebeu a interação.

Essa estratégia facilita a identificação dos produtos mesmo quando o clique acontece em elementos internos, como imagens, textos ou ícones.

### Gerenciamento do carrinho de compras

O carrinho é administrado por meio de um array JavaScript em memória, responsável por armazenar os produtos selecionados, suas quantidades e respectivas variações.

A identificação dos itens utiliza uma chave composta por `id` e `size`, permitindo diferenciar o mesmo produto quando adquirido em tamanhos distintos.

As operações de incremento, decremento e remoção atualizam o estado do carrinho por meio de métodos como `splice()`.

### Atualização dinâmica da interface

A função `updateCart()` utiliza os dados armazenados no array do carrinho para recalcular os valores e atualizar os componentes visuais.

Dessa maneira, as alterações realizadas pelo usuário são refletidas dinamicamente na interface.

### Regras de negócio e cálculos financeiros

Os dados dos produtos são organizados separadamente no arquivo `pizzas.js`, utilizando uma coleção de objetos JavaScript.

O processamento do pedido contempla:

- Cálculo do subtotal dos produtos.
- Atualização dos valores conforme as quantidades selecionadas.
- Aplicação de desconto de 10%.
- Cálculo do valor final da compra.
- Formatação monetária para o padrão brasileiro.

A formatação dos valores utiliza recursos nativos do JavaScript, como `toFixed(2)` e `replace(".", ",")`.

### Sistema de checkout

O módulo de checkout apresenta um resumo dos produtos selecionados, suas quantidades e os respectivos valores.

A interface é construída dinamicamente para apresentar o subtotal, o desconto aplicado e o total final do pedido.

O processamento é simulado no próprio navegador, sem integração com serviços externos de pagamento.

## 🌓 Arquitetura do Black & White Theme

O sistema de alternância de temas foi desenvolvido utilizando propriedades personalizadas do CSS e manipulação dinâmica do DOM, permitindo modificar a identidade cromática da aplicação sem reconstruir seus componentes.

### Escopo dinâmico com variáveis CSS

As principais propriedades visuais da interface são centralizadas em variáveis CSS, incluindo cores de fundo, textos, superfícies dos cartões e bordas.

Entre as propriedades utilizadas na organização dos temas estão:

- `--bg-primary`: cor principal de fundo.
- `--text-main`: cor principal dos textos.
- Variáveis de superfície: controle das cores dos cartões e componentes.
- Variáveis de borda: definição dos contornos dos elementos.

As classes `.dark-theme` e `.light-theme` permitem definir conjuntos distintos de propriedades visuais, facilitando a manutenção e a expansão do sistema de temas.

### Preto absoluto minimalista

O tema escuro utiliza a cor `#000000` como base da interface, criando uma identidade visual minimalista com alto contraste em relação aos detalhes dourados da marca (`#D4AF37`).

A utilização de preto absoluto também pode contribuir para a redução do consumo energético em telas OLED, nas quais pixels pretos podem permanecer desligados.

### Manipulação de classes no DOM

A alternância dos temas é controlada por um ouvinte de eventos JavaScript associado ao botão `.theme-toggle`.

A interação modifica dinamicamente a classe aplicada ao elemento `<body>`, alternando entre `.dark-theme` e `.light-theme`.

Como as propriedades cromáticas estão centralizadas nas variáveis CSS, a atualização visual acontece de maneira consistente em toda a aplicação.

### Transições e desempenho de renderização

As propriedades visuais utilizam transições CSS com duração de `0.4s`, proporcionando uma mudança gradual entre os temas.

A utilização de variáveis CSS reduz a necessidade de manipulações individuais nos estilos dos componentes, simplificando a atualização da interface.

## 🎨 Interface e responsividade

A interface foi desenvolvida combinando diferentes recursos do CSS3 para proporcionar uma experiência visual consistente em dispositivos desktop e móveis.

### CSS Grid

A galeria de produtos utiliza CSS Grid com dimensionamento automático das colunas:

```css
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
```

Essa configuração permite distribuir os cartões de produtos de acordo com o espaço disponível na tela.

### Flexbox

O Flexbox é utilizado na organização de componentes que exigem alinhamento linear, como controles de quantidade, informações dos produtos, carrinho e elementos dos modais.

### Design responsivo

A aplicação utiliza Media Queries para adaptar a interface a diferentes resoluções.

Em telas menores, o carrinho assume uma apresentação expandida, os componentes são reorganizados e os modais recebem ajustes dimensionais para melhorar a navegação em dispositivos móveis.

## 📂 Estrutura de diretórios

```text
├── index.html       # Estrutura semântica e templates DOM
├── style.css        # Estilização, temas e responsividade
├── pizzas.js        # Dados e informações dos produtos
├── script.js        # Lógica do carrinho, checkout e interações
└── images/          # Imagens e recursos visuais dos produtos
```

## 📦 Como executar o projeto

**1. Clone o repositório:**

```bash
git clone URL_DO_REPOSITORIO
```

**2. Acesse a pasta do projeto:**

```bash
cd nome-do-repositorio
```

**3. Execute a aplicação:**

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto em um servidor de desenvolvimento local.

## 📚 Aprendizados

O desenvolvimento deste projeto proporcionou a prática e consolidação de conhecimentos importantes no desenvolvimento Front-End, especialmente:

- Construção de aplicações Single Page Application (SPA) com JavaScript Vanilla.
- Manipulação avançada da árvore do DOM.
- Utilização de `cloneNode()` para clonagem de elementos HTML.
- Organização de dados com arrays e objetos JavaScript.
- Delegação e tratamento de eventos.
- Gerenciamento de estado em aplicações client-side.
- Implementação de carrinho de compras e controle de quantidades.
- Desenvolvimento de regras de negócio e cálculos financeiros.
- Renderização dinâmica de componentes.
- Utilização de CSS Grid e Flexbox.
- Implementação de temas com variáveis CSS.
- Manipulação dinâmica de classes no DOM.
- Criação de interfaces responsivas e microinterações.
- Utilização de transições CSS para aprimorar a experiência visual.
- Separação entre dados, estrutura e lógica da aplicação.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e construção de aplicações web.

- **GitHub:** [devRafaelSantana-Code](https://github.com/devRafaelSantana-Code)

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, CSS Grid, Flexbox e desenvolvimento de interfaces responsivas.
</p>
