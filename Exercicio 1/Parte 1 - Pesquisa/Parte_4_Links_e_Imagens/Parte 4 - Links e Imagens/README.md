# Exercício 1 - Parte 4: Links e Imagens

Este `README.md` aborda a utilização de links e imagens em HTML, e oferece orientações sobre como diagnosticar e corrigir problemas com imagens que não são exibidas corretamente.

## Links

*   **Links Externos**: Utilizam o atributo `href` para direcionar o usuário para uma URL fora do domínio atual. O atributo `target="_blank"` é comumente usado para abrir o link em uma nova aba do navegador.

*   **Links Internos (Âncoras)**: Permitem navegar para uma seção específica dentro da mesma página. Isso é feito associando o `href="#id-da-secao"` a um elemento que possui o atributo `id="id-da-secao"`.

## Imagens

*   **Tag `<img>`**: Usada para incorporar imagens em uma página HTML. Os atributos essenciais são:
    *   `src`: Especifica o caminho (URL) da imagem.
    *   `alt`: Fornece um texto alternativo para a imagem, importante para acessibilidade e SEO, e exibido quando a imagem não pode ser carregada.

## Como Corrigir uma Imagem Quebrada

Quando uma imagem não é exibida em uma página web, geralmente aparece um ícone de imagem quebrada e o texto do atributo `alt`. Para corrigir este problema, siga os passos abaixo:

1.  **Verificar o Caminho (`src`)**: O erro mais comum é um caminho incorreto para o arquivo da imagem. Certifique-se de que o valor do atributo `src` esteja apontando para o local exato onde a imagem está armazenada. Verifique se há erros de digitação no nome do arquivo ou na estrutura de pastas (sensível a maiúsculas e minúsculas em alguns servidores).
    *   **Caminho Relativo**: Se a imagem estiver na mesma pasta ou em uma subpasta, o caminho deve ser relativo à localização do arquivo HTML (ex: `img/minha-imagem.png`).
    *   **Caminho Absoluto**: Se a imagem estiver em um servidor externo, o caminho deve ser a URL completa (ex: `https://exemplo.com/imagens/minha-imagem.png`).

2.  **Verificar o Nome do Arquivo**: Confirme se o nome do arquivo da imagem no `src` corresponde exatamente ao nome do arquivo no servidor, incluindo a extensão (ex: `.png`, `.jpg`, `.gif`).

3.  **Permissões do Arquivo**: Em alguns ambientes de servidor, as permissões de arquivo podem impedir que o navegador acesse a imagem. Certifique-se de que o arquivo da imagem tenha as permissões de leitura adequadas.

4.  **Imagem Existe**: Verifique se o arquivo da imagem realmente existe no caminho especificado. Tente acessar a imagem diretamente pelo navegador usando o caminho completo para confirmar sua existência.

5.  **Atributo `alt`**: Embora não corrija a imagem, um `alt` descritivo é crucial para a acessibilidade. Ele garante que, mesmo que a imagem não carregue, o usuário ainda tenha uma ideia do seu conteúdo.

Ao seguir estas etapas, é possível identificar e resolver a maioria dos problemas relacionados a imagens quebradas em páginas HTML.
