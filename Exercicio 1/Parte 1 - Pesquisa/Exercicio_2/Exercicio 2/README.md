# Exercício 2: `div` vs. HTML Semântico

## 1. Diferença entre `div` e HTML Semântico

No desenvolvimento web, a escolha entre usar a tag genérica `<div>` e as tags semânticas do HTML5 é crucial para a qualidade, acessibilidade e otimização de um site. Embora ambas possam ser usadas para agrupar e estilizar conteúdo, suas finalidades e impactos são bastante distintos.

### `<div>` (Elemento Genérico)

A tag `<div>` é um elemento de divisão genérico, sem significado semântico intrínseco. Ela é usada principalmente para agrupar conteúdo para fins de estilização (com CSS) ou manipulação (com JavaScript). Por si só, um `<div>` não informa ao navegador, aos mecanismos de busca ou às tecnologias assistivas (como leitores de tela) sobre o tipo de conteúdo que ele contém ou sua função na estrutura da página.

**Características da `<div>`:**

*   **Não Semântica**: Não carrega significado sobre o conteúdo.
*   **Flexível**: Pode ser usada para qualquer agrupamento.
*   **Dependente de Classes/IDs**: Seu propósito é geralmente definido por classes ou IDs CSS/JS.
*   **Impacto na Acessibilidade**: Dificulta a navegação para usuários de leitores de tela, pois não há indicação clara da estrutura da página.
*   **SEO**: Menos relevante para mecanismos de busca entenderem a estrutura do conteúdo.

### HTML Semântico (Elementos com Significado)

O HTML semântico refere-se ao uso de tags HTML que transmitem o significado e a estrutura do conteúdo que elas envolvem. Em vez de usar `<div>` para tudo, o HTML5 introduziu uma série de tags semânticas que descrevem a função de diferentes partes de uma página web, como `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`, entre outras.

**Características do HTML Semântico:**

*   **Significado Intrínseco**: Cada tag descreve o tipo de conteúdo que contém e sua função estrutural.
*   **Melhora a Acessibilidade**: Leitores de tela podem interpretar a estrutura da página de forma mais eficaz, permitindo que usuários com deficiência visual naveguem com mais facilidade.
*   **Otimização para SEO**: Mecanismos de busca podem entender melhor a hierarquia e a relevância do conteúdo, o que pode levar a um melhor ranqueamento.
*   **Manutenibilidade do Código**: O código se torna mais legível e fácil de manter para outros desenvolvedores, pois a estrutura é autoexplicativa.
*   **Consistência**: Promove uma abordagem mais padronizada para a construção de layouts web.

## 2. Exemplo Prático

Vamos comparar a estrutura de uma página web simples usando apenas `<div>`s genéricas versus o uso de HTML semântico.

### Exemplo com Blocos Genéricos (`<div>`)

```html
<body>
    <div id="cabecalho">
        <div class="navegacao">
            <!-- Links de navegação -->
        </div>
    </div>

    <div class="conteudo-principal">
        <div class="secao-sobre">
            <!-- Conteúdo sobre -->
        </div>
        <div class="secao-contato">
            <!-- Conteúdo de contato -->
        </div>
    </div>

    <div id="rodape">
        <!-- Conteúdo do rodapé -->
    </div>
</body>
```

Neste exemplo, é necessário inspecionar os `id`s e `class`es para entender a função de cada `<div>`. Para um leitor de tela ou um robô de busca, a estrutura é menos clara.

### Exemplo com Blocos Semânticos (HTML5)

```html
<body>
    <header>
        <nav>
            <!-- Links de navegação -->
        </nav>
    </header>

    <main>
        <section id="sobre">
            <!-- Conteúdo sobre -->
        </section>
        <section id="contato">
            <!-- Conteúdo de contato -->
        </section>
    </main>

    <footer>
        <!-- Conteúdo do rodapé -->
    </footer>
</body>
```

No exemplo semântico, as tags como `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>` comunicam imediatamente a função de cada bloco de conteúdo, tornando o código mais compreensível para humanos e máquinas, e melhorando a acessibilidade e o SEO.

## 3. Referências

*   [MDN Web Docs: Elementos semânticos](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Semantic_elements)
*   [W3C: HTML5 Semantics](https://www.w3.org/TR/html5/semantics.html)
